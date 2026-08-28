import type { Metadata } from 'next';
import SectionWrapper from '@/components/ui/SectionWrapper';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description: 'Privacy Notice of Victory Baptist Church Stuttgart in accordance with the GDPR.',
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-church-navy section-padding pt-40">
        <div className="container-base">
          <span className="section-label block mb-3 text-church-gold">Legal</span>
          <h1 className="text-white text-4xl md:text-5xl">Privacy Notice</h1>
        </div>
      </section>

      <SectionWrapper bg="cream">
        <div className="prose-church max-w-3xl">

          <h2>1. Data Controller</h2>
          <p>
            The party responsible for data processing on this website is:
          </p>
          <p>
            <strong>Victory Baptist Church Stuttgart</strong><br />
            Schulze-Delitzsch-Straße 30<br />
            70565 Stuttgart<br />
            Email:{' '}
            <a href="mailto:victory.stuttgart@gmail.com">
              victory.stuttgart@gmail.com
            </a>
          </p>

          <h2>2. Collection and Storage of Personal Data</h2>

          <h3>a) Server Log Files</h3>
          <p>
            When you visit this website, your browser automatically transmits information to the
            server on which this website is hosted. This information is stored in so-called server
            log files and includes:
          </p>
          <ul>
            <li>IP address of the requesting device</li>
            <li>Date and time of access</li>
            <li>Name and URL of the file accessed</li>
            <li>Website from which access was made (referrer URL)</li>
            <li>Browser used and, where applicable, the operating system</li>
          </ul>
          <p>
            This data is processed on the basis of Art. 6(1)(f) GDPR (legitimate interest in the
            security and operation of the website). Log files are deleted after a maximum of 30 days.
          </p>

          <h3>b) Contact Form</h3>
          <p>
            When you send us a message via the contact form on this website, the following data
            is processed:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Subject (topic of your enquiry)</li>
            <li>Content of your message</li>
          </ul>
          <p>
            Processing takes place solely to handle your enquiry on the basis of Art. 6(1)(b) GDPR
            (performance of pre-contractual measures) or Art. 6(1)(f) GDPR (legitimate interest in
            responding to enquiries). Data is not passed on to third parties and is deleted after
            processing is complete, unless statutory retention obligations apply.
          </p>

          <h2>3. Cookies</h2>
          <p>
            This website does not use tracking cookies or cookies for advertising or analysis
            purposes. Only technically necessary cookies are used that are required for the operation
            of the website (e.g. session cookies). These cookies are automatically deleted when you
            close your browser. No consent is required for this (Art. 6(1)(f) GDPR).
          </p>

          <h2>4. Fonts</h2>
          <p>
            This website uses Google Fonts. However, the font files are downloaded when the website
            is built and served from our own server (self-hosting). Therefore, <strong>no connections
            to Google servers</strong> are established when the page loads and no data is transferred
            to Google.
          </p>

          <h2>5. Hosting</h2>
          <p>
            This website is operated by an external hosting provider. Personal data collected on
            this website is stored on the host&apos;s servers. Processing is carried out on the basis
            of a data processing agreement (DPA) in accordance with Art. 28 GDPR.
            {/* TODO: Add hosting provider name and server location */}
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the following rights with regard to us:</p>
          <ul>
            <li>
              <strong>Right of access</strong> (Art. 15 GDPR): You may request information about the
              personal data we process about you.
            </li>
            <li>
              <strong>Right to rectification</strong> (Art. 16 GDPR): You may request the correction
              of inaccurate data.
            </li>
            <li>
              <strong>Right to erasure</strong> (Art. 17 GDPR): Under certain conditions you may
              request the deletion of your data.
            </li>
            <li>
              <strong>Right to restriction of processing</strong> (Art. 18 GDPR): You may request
              that the processing of your data be restricted.
            </li>
            <li>
              <strong>Right to object</strong> (Art. 21 GDPR): You may object to the processing of
              your data where it is based on legitimate interests.
            </li>
            <li>
              <strong>Right to lodge a complaint</strong>: You have the right to lodge a complaint
              with the competent supervisory authority. In Baden-Württemberg this is the State
              Commissioner for Data Protection and Freedom of Information
              (Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg —
              LfDI BW), Postfach 10 29 32, 70025 Stuttgart.
            </li>
          </ul>
          <p>
            To exercise your rights, please contact us at:{' '}
            <a href="mailto:victory.stuttgart@gmail.com">
              victory.stuttgart@gmail.com
            </a>
          </p>

          <h2>7. Currency of this Privacy Notice</h2>
          <p>
            This Privacy Notice is currently valid and dated August 2025. As our website develops
            or due to changes in legal or regulatory requirements, it may be necessary to amend
            this Privacy Notice.
          </p>

        </div>
      </SectionWrapper>
    </>
  );
}
