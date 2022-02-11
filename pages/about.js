import Link from 'next/link';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout title="about DJ Events">
      <h1>About</h1>
      <p>This is an app to find the latest DJ and other musical events</p>
      <p>Virsion: 1.0.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  );
}
