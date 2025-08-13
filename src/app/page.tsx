import styles from './theme.module.css';
import Link from 'next/link';
import NewsletterSignup from '../components/NewsletterSignup';

const QUOTES = [
  "Follow for the journey, stay for the lessons.",
];

function getTodaysQuote() {
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  return QUOTES[day % QUOTES.length];
}

export default function Home() {
  return (
    <main className={styles.surface}>
      <section className={styles.heroSection}>
        <div className={styles.heroColCentered}>
          <div className={styles.heroImageCentered}>
            <img src="/avatar.png" alt="Alejandro Palumbo" width={220} height={280} className={styles.heroImage} loading="eager" />
          </div>
          <h1 className={styles.heroNameCentered}>Alejandro Palumbo</h1>
          <div className={styles.heroSubtitleCentered}>
            National Market Platform Engineering Focal @ IBM&nbsp;&nbsp;|&nbsp;&nbsp;MS in Computer Science
          </div>
          <section className={styles.snapshotSectionCentered}>
            <h2 className={styles.h2Centered}>Who</h2>
            <ul className={styles.snapshotListCentered}>
              <li>5+ years accelerating enterprise outcomes with IBM's automation and integration stack</li>
              <li>M.S. Computer Science, CSU Channel Islands | B.S. Economics, San Francisco State</li>
              <li>Proven record guiding Fortune‑500 & public‑sector teams from legacy frameworks to cloud‑native architectures</li>
              <li>Trusted advisor on AI‑driven modernization, cost‑optimization, and developer experience</li>
            </ul>
          </section>
          <section className={styles.sharingSectionCentered}>
            <h3 className={styles.h3Centered}>What I'm Sharing Here</h3>
            <ul className={styles.sharingListCentered}>
              <li>Project Spotlights — hands‑on walk‑throughs of current builds, successful pilots, and lessons learned</li>
              <li>Local Tech Events — calendars, recaps, and takeaways from the latest modern‑tech meetups and conferences near me</li>
              <li>IBM‑Focused Blogs — deep dives on IBM Cloud, software best practices, and tips for maximizing IBM's free cloud credits</li>
            </ul>
          </section>
          <section className={styles.whySectionCentered}>
            <h3 className={styles.h3Centered}>Why Follow Along?</h3>
            <blockquote className={styles.rotatingQuote}>{getTodaysQuote()}</blockquote>
          </section>
          <section className={styles.whereSectionCentered}>
            <h3 className={styles.h3Centered}>Where</h3>
            <div className={styles.ctaRowCentered}>
              <Link href="/book-meeting" className={styles.primaryBtnBlue}>Book an intro meeting</Link>
              <Link href="/login" className={styles.primaryBtnBlue}>Sign In / Sign Up</Link>
            </div>
            <div className={styles.socialsSectionCentered}>
              <h4 className={styles.socialsHeader}>Socials</h4>
              <p className={styles.socialsSubheader}>Find me below</p>
              <div className={styles.socialIconsRow}>
                <a href="https://youtube.com/@IBMAlejandro" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialIcon}><i className="fab fa-youtube"></i></a>
                <a href="https://www.linkedin.com/in/alejandro-palumbo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}><i className="fab fa-linkedin"></i></a>
                <a href="https://tiktok.com/@asapalejandro" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.socialIcon}><i className="fab fa-tiktok"></i></a>
                <a href="https://instagram.com/asapalejandro" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}><i className="fab fa-instagram"></i></a>
                <a href="https://x.com/925alejandro" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIcon}><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </section>
          <div className={styles.disclaimerCentered}>Views are my own and do not represent IBM.</div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter-section" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </main>
  );
} 