"use client";
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import ButtonIconArrow from '@/components/buttons/ButtonIconArrow';
import TextboxStandard from '@/components/textbox/TextboxStandard';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div className="bg-gradient-to-br from-pink-500 to-teal-400">
        <section id="hero" className="flex items-center justify-center h-screen text-white">
          <BillboardHero title="Welcome to Webild" subtitle="Your fun and trendy SaaS solution" />
        </section>

        <section id="features" className="py-24 bg-white">
          <TextboxStandard title={<h2 className="text-2xl font-bold">Features</h2>} description={<p>Discover our amazing features that make us stand out!</p>} />
          {/* Feature cards go here */}
        </section>

        <section id="use-cases" className="soft-noise py-24">
          <TextGridTokenomics title="Use Cases" description="See how Webild can solve your problems." tokenData={[]} />
        </section>

        <section id="about" className="bg-gray-100 py-24">
          <SocialsAbout title="About Us" descriptions={["We are a team of enthusiasts!", "Join our mission to change the world!" ]} />
        </section>

        <section id="pricing" className="bg-white py-24">
          <TextboxStandard title={<h2 className="text-2xl font-bold">Pricing</h2>} description={<p>Flexible pricing plan to suit your needs!</p>} />
          {/* Pricing plans go here */}
        </section>

        <section id="contact" className="bg-white py-24">
          <CentralFAQ items={[{title: 'How to contact us?', content: 'You can contact us via email at info@webild.com.'}]} />
        </section>
      </div>
    </SiteThemeProvider>
  );
}
