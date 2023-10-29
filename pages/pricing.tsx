import Head from 'next/head';
import Pricing from '../components/Pricing';

function PricingPage() {
  return (
    <div>
      <Head>
        <title>Premium Pricing - Your Website</title>
        {/* Add any additional head elements you need */}
      </Head>
      <Pricing />
    </div>
  );
}

export default PricingPage;
