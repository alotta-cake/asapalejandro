import styles from '../theme.module.css';
import Link from 'next/link';

const DATA_AI_PILLARS = [
  { title: 'AI Assistants', desc: 'Conversational AI and digital assistants for business and productivity.' },
  { title: 'AI/MLOps', desc: 'Machine learning operations, model management, and deployment.' },
  { title: 'Databases', desc: 'Enterprise-grade databases for structured and unstructured data.' },
  { title: 'Data Intelligence', desc: 'Data discovery, cataloging, and governance for trusted insights.' },
  { title: 'Data Integration', desc: 'Connect, transform, and move data across hybrid cloud environments.' },
  { title: 'Data Security', desc: 'Protect data at rest and in motion with advanced security solutions.' },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export default function DataAILanding() {
  return (
    <main className={styles.surface}>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 0' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 16, color: '#0F62FE' }}>IBM Data & AI Pillars</h1>
        <p style={{ fontSize: '1.15rem', color: '#222', marginBottom: 32 }}>
          Explore the core pillars of IBM’s Data & AI portfolio. Click a card to learn more about each specialty area.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
          {DATA_AI_PILLARS.map((item) => (
            <div key={item.title} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(15,98,254,0.07)', padding: 28, minHeight: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
              <Link href={`/data-ai/${slugify(item.title)}`} style={{ fontWeight: 700, fontSize: '1.18rem', color: '#0F62FE', marginBottom: 10, textDecoration: 'none', cursor: 'pointer' }}>{item.title}</Link>
              <div style={{ color: '#444', fontSize: '1rem' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 