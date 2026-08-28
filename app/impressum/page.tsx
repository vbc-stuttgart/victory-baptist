import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal notice for Victory Baptist Church Stuttgart pursuant to § 5 TMG.',
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base">
          <span className="section-label block mb-3 text-church-gold">Legal</span>
          <h1 className="text-white text-4xl md:text-5xl">Legal Notice</h1>
        </div>
      </section>

      <SectionWrapper bg="cream">
        <div className="prose-church max-w-3xl">

          <h2>Information pursuant to § 5 TMG</h2>

          <p>
            <strong>Victory Baptist Church e.V.</strong><br />
            Schulze-Delitzsch-Straße 30<br />
            70565 Stuttgart<br />
            Germany
          </p>

          <h2>Contact</h2>
          <p>
            Email:{' '}
            <a href="mailto:victory.stuttgart@gmail.com">
              victory.stuttgart@gmail.com
            </a>
            <br />
            Phone:{' '}
            <a href="tel:+491773373200">+49 177 3373200</a>
          </p>

          <h2>Person responsible for content pursuant to § 55 (2) RStV</h2>
          <p>
           Victory Baptist Church e.V. <br />
            Schulze-Delitzsch-Straße 30<br />
            70565 Stuttgart
          </p>

          <h2>Legal status</h2>
          <p>
            Victory Baptist Church e.V. is an independent Baptist church. It is not a
            corporation under public law.
          </p>

          <h2>Liability for content</h2>
          <p>
            The content of this website has been compiled with the greatest possible care.
            However, we cannot guarantee the accuracy, completeness, or up-to-date nature of
            the content. As a service provider, we are responsible for our own content on these
            pages in accordance with § 7 (1) TMG and general law.
          </p>

          <h2>Liability for links</h2>
          <p>
            Our website contains links to external third-party websites over whose content we
            have no control. We therefore accept no liability for such external content. The
            respective provider or operator of the linked pages is always responsible for their
            content.
          </p>

          <h2>Copyright</h2>
          <p>
            The content and works created by the site operator on these pages are subject to
            German copyright law. Third-party contributions are identified as such. Reproduction,
            editing, distribution, or any form of use beyond the limits of copyright law requires
            the written consent of the respective author or creator.
          </p>

        </div>
      </SectionWrapper>
    </>
  );
}
