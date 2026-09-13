import type { Metadata } from 'next';
import './globals.css';
import Navbar from './navbar';

export const metadata: Metadata = {
  title: 'Ai Team Implementation | LLM Architecture for Enterprise',
  description: 'Enterprise Ai team account setup, integration, and scaling. Security, compliance, and architecture for organisations deploying LLMs at scale.',
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
        <Navbar />

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
