import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';

const blurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoH' +
  'BwYIDAoMCwsKCwsNCxAQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAARCAAKAAoDASIAAhEBAxEB/8QAFQ' +
  'ABAQAAAAAAAAAAAAAAAAAACAT/xAAcEAABBAMBAAAAAAAAAAAAAAAAAgEDBBESIf/EABQBAQAAAAAAAAAAAAAAAAAA' +
  'AAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCyocrFHMTdkq4hktAABTH4AAB//9k=';

export default function TeamSection() {
  return (
    <SectionWrapper id="team" bg="white">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label block mb-3">The People Behind the Church</span>
        <h2 className="text-balance">Meet Our Pastor</h2>
        <p className="font-sans text-church-gray mt-4 max-w-xl mx-auto text-base md:text-lg">
          The Lord sent Pastor Jobway to serve in Germany.
        </p>
      </AnimatedSection>

      {/* Couple photo + names */}
      <AnimatedSection className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center max-w-3xl mx-auto card-base p-8">
          <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden shrink-0 ring-4 ring-church-gold/20">
            <Image
              src="/images/pastor-couple.jpeg"
              alt="Pastor Patrick Jobway"
              fill
              className="object-cover object-[60%_center]"
              placeholder="blur"
              blurDataURL={blurDataURL}
              sizes="224px"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-church-navy mb-1">Pastor Patrick Jobway</h3>
            <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-4">Senior Pastor</span>
            <div className="w-10 h-0.5 bg-church-gold/40 mb-4 mx-auto md:mx-0" />
            <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-4"></span>
            <p className="font-sans text-church-gray text-sm leading-relaxed">
              Married in 2007, Pastor and Mrs. Christelle answered God&apos;s call to bring the Gospel to the international community of Germany — serving faithfully at Victory Baptist Church Stuttgart.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimony */}
      <AnimatedSection className="max-w-4xl mx-auto">
        <article className="card-base p-7">
          <div className="mb-4">
            <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Testimony</span>
          </div>
          <div className="w-8 h-0.5 bg-church-gold/40 mb-4" />
          <p className="font-sans text-church-gray text-sm leading-relaxed">
            Pastor Patrick Jobway was called to serve as pastor of Victory Baptist Church in 2023. He received Jesus Christ as his Savior at age 16. After earning a Master&apos;s degree in Electrical Engineering, he worked in that field for more than 12 years before answering God&apos;s call to full-time ministry in 2018.
          </p>
          <p className="font-sans text-church-gray text-sm leading-relaxed mt-3">
            He also holds a Bachelor of Theology and a Master&apos;s degree in Pastoral Ministry from Crown University in the United States. Together with his wife, Christelle, he accepted God&apos;s call to serve in Germany. In 2022, he founded Wort Gottes Gemeinde in Stuttgart, a German-speaking ministry.
          </p>
          <p className="font-sans text-church-gray text-sm leading-relaxed mt-3">
            He is passionate about teaching God&apos;s Word and shepherding God&apos;s flock. Pastor Jobway and Christelle would love to meet you at Victory Baptist Church.
          </p>
        </article>
      </AnimatedSection>
    </SectionWrapper>
  );
}
