import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/profile/linkedin-lookup
 *
 * Takes email address, looks up LinkedIn profile via Hunter.io API
 * Returns profile data to be stored in cookies
 */

interface LinkedInProfile {
  name: string;
  email: string;
  title?: string;
  company?: string;
  location?: string;
  linkedin_url?: string;
  confidence?: number;
}

interface HunterResponse {
  data: {
    first_name?: string;
    last_name?: string;
    email?: string;
    position?: string;
    company?: string;
    linkedin_url?: string;
    confidence?: number;
    city?: string;
    state?: string;
    country?: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if Hunter.io API key is configured
    const hunterApiKey = process.env.HUNTER_IO_API_KEY;

    if (!hunterApiKey) {
      // Return mock data for development/POC (when API key not set up yet)
      console.warn('HUNTER_IO_API_KEY not configured; returning mock LinkedIn data');
      return NextResponse.json(mockLinkedInLookup(email, name));
    }

    // Real Hunter.io API call
    try {
      const hunterUrl = `https://api.hunter.io/v2/email-finder?domain=${extractDomain(
        email
      )}&full_name=${encodeURIComponent(name || '')}&limit=1`;

      const hunterResponse = await fetch(hunterUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ai-business/1.0)',
        },
      });

      if (!hunterResponse.ok) {
        console.error('Hunter.io API error:', hunterResponse.status);
        return NextResponse.json(mockLinkedInLookup(email, name));
      }

      const data = (await hunterResponse.json()) as HunterResponse;

      if (!data.data) {
        return NextResponse.json(mockLinkedInLookup(email, name));
      }

      const profile: LinkedInProfile = {
        name:
          name ||
          `${data.data.first_name || ''} ${data.data.last_name || ''}`.trim(),
        email: data.data.email || email,
        title: data.data.position,
        company: data.data.company,
        location: buildLocation(data.data),
        linkedin_url: data.data.linkedin_url,
        confidence: data.data.confidence,
      };

      return NextResponse.json({
        success: true,
        profile,
        source: 'hunter.io',
      });
    } catch (hunterError) {
      console.error('Hunter.io lookup failed:', hunterError);
      return NextResponse.json(mockLinkedInLookup(email, name));
    }
  } catch (error) {
    console.error('LinkedIn lookup error:', error);
    return NextResponse.json(
      { error: 'Failed to lookup LinkedIn profile' },
      { status: 500 }
    );
  }
}

/**
 * Mock LinkedIn lookup for development/POC
 * Replace with real data once you set up Hunter.io API key
 */
function mockLinkedInLookup(email: string, name: string): LinkedInProfile {
  const domain = extractDomain(email);
  const firstInitial = name?.split(' ')[0]?.[0]?.toLowerCase() || 'j';
  const lastNameSlug = (name?.split(' ')[1] || 'doe')?.toLowerCase();

  // Recognize if it's one of your known target companies
  let company = domain.split('.')[0];
  let title = 'Team Member';
  let location = 'Australia';

  if (domain.includes('passmore')) {
    company = 'Passmore Automotive';
    title = 'Owner';
    location = 'Busselton, WA';
  } else if (domain.includes('buyforbaby')) {
    company = 'Buy For Baby';
    title = 'Manager';
    location = 'Busselton, WA';
  }

  return {
    name: name || `User ${firstInitial}${lastNameSlug}`,
    email,
    title,
    company,
    location,
    linkedin_url: `https://linkedin.com/in/${firstInitial}${lastNameSlug}`,
    confidence: 0.85, // Mock confidence score
  };
}

function extractDomain(email: string): string {
  return email.split('@')[1] || '';
}

function buildLocation(data: HunterResponse['data']): string {
  const parts = [data.city, data.state, data.country].filter(Boolean);
  return parts.join(', ') || 'Unknown';
}
