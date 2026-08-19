import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Claude Ai Team Implementation | Ai System Architecture for Enterprise',
  description: 'Enterprise Claude Ai team account setup, integration, and scaling. Security, compliance, and architecture for organizations deploying Claude Ai at scale.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <a href="/" className="logo">
              <img src="/favicon.svg" alt="Ai logo" className="logo-icon" />
              <span className="logo-text">less A and more I</span>
            </a>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Insights</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        <main>
          {children}
        </main>

        <footer>
          <div className="footer-container">
            <p>&copy; 2026 Ai Governance Consulting. All rights reserved.</p>
            <p>Building trustworthy Ai for regulated enterprises.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
