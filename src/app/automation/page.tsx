import styles from '../theme.module.css';
import Link from 'next/link';

const AUTOMATION_PILLARS = [
  { title: 'Application Development', desc: 'Modernize, build, and deploy applications across hybrid cloud environments.' },
  { title: 'Application Integration', desc: 'Connect apps, data, and services for seamless business workflows.' },
  { title: 'Infrastructure Automation', desc: 'Automate IT infrastructure provisioning, configuration, and management.' },
  { title: 'Network Management', desc: 'Monitor, optimize, and automate network operations.' },
  { title: 'Identity & Access Management', desc: 'Secure access and manage identities across your enterprise.' },
  { title: 'IT Automation & FinOps', desc: 'Optimize IT operations, costs, and performance with intelligent automation.' },
  { title: 'Asset Lifecycle Management', desc: 'Track, manage, and optimize assets throughout their lifecycle.' },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export default function AutomationLanding() {
  return (
    <main className={styles.surface}>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 0' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 16, color: '#0F62FE' }}>IBM Automation Pillars</h1>
        <p style={{ fontSize: '1.15rem', color: '#222', marginBottom: 32 }}>
          Explore the core pillars of IBM’s automation portfolio. Click a card to learn more about each specialty area.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
          {AUTOMATION_PILLARS.map((item) => (
            <div key={item.title} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(15,98,254,0.07)', padding: 28, minHeight: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
              <Link href={`/automation/${slugify(item.title)}`} style={{ fontWeight: 700, fontSize: '1.18rem', color: '#0F62FE', marginBottom: 10, textDecoration: 'none', cursor: 'pointer' }}>{item.title}</Link>
              <div style={{ color: '#444', fontSize: '1rem' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 