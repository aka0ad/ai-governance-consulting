import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Governance Consulting | Building Trustworthy AI Systems',
  description: 'B2B AI governance consulting for regulated enterprises. Compliance frameworks, risk management, and responsible AI deployment.',
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
            <a href="/" className="logo">AI Governance</a>
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
            <p>&copy; 2026 AI Governance Consulting. All rights reserved.</p>
            <p>Building trustworthy AI for regulated enterprises.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
