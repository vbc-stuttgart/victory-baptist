import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
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
          Called by God to reach the people of Germany — Pastor Patrick and Christelle Jobway serve Victory Baptist Church with love and dedication.
        </p>
      </AnimatedSection>

      {/* Couple photo + names */}
      <AnimatedSection className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center max-w-3xl mx-auto card-base p-8">
          <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden shrink-0 ring-4 ring-church-gold/20">
            <Image
              src="/images/pastor-couple.jpeg"
              alt="Pastor Patrick Jobway and Christelle Jobway"
              fill
              className="object-cover object-top"
              placeholder="blur"
              blurDataURL={blurDataURL}
              sizes="224px"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-church-navy mb-1">Pastor Patrick Jobway</h3>
            <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-4">Senior Pastor</span>
            <div className="w-10 h-0.5 bg-church-gold/40 mb-4 mx-auto md:mx-0" />
            <h3 className="font-serif text-2xl text-church-navy mb-1">Christelle Jobway</h3>
            <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-4">First Lady</span>
            <p className="font-sans text-church-gray text-sm leading-relaxed">
              Married in 2007, Patrick and Christelle answered God's call to bring the Gospel to the international community of Germany — serving faithfully at Victory Baptist Church Stuttgart.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonies */}
      <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {/* Patrick's Testimony */}
        <AnimatedItem>
          <article className="card-base p-7">
            <div className="mb-4">
              <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Testimony</span>
              <h3 className="font-serif text-lg text-church-navy">Pastor Patrick</h3>
            </div>
            <div className="w-8 h-0.5 bg-church-gold/40 mb-4" />
            <p className="font-sans text-church-gray text-sm leading-relaxed">
              I was raised in a Christian home, and often heard the gospel. I became convicted around age 14, and initially sought relief by reforming my ways. I agonized over my sins and failures over a period of two years until God gave me light, and I realized that I was incapable of saving myself. I then trusted Christ as my Savior.
            </p>
            <p className="font-sans text-church-gray text-sm leading-relaxed mt-3">
              After High School, I moved to Germany where I enrolled in language school and later in Engineering College. While attending college, I surrendered to preach the Gospel. I later met my sweetheart in Germany and we were married in 2007. Upon graduation, we both worked for the same German employer before the Lord moved us to Georgia, where we joined the Oakwood Baptist Church — serving as bus captain and Sunday school teachers while attending Bible college.
            </p>
            <p className="font-sans text-church-gray text-sm leading-relaxed mt-3">
              The Lord made clear through circumstances and prayer that He was calling us to reach the people of Germany for Christ.
            </p>
          </article>
        </AnimatedItem>

        {/* Christelle's Testimony */}
        <AnimatedItem>
          <article className="card-base p-7">
            <div className="mb-4">
              <span className="font-sans text-xs uppercase tracking-widest text-church-gold block mb-1">Testimony</span>
              <h3 className="font-serif text-lg text-church-navy">Christelle</h3>
            </div>
            <div className="w-8 h-0.5 bg-church-gold/40 mb-4" />
            <p className="font-sans text-church-gray text-sm leading-relaxed">
              I had the privilege to grow up in a Christian home. My parents got saved before I was born. I got saved when I was 11 years old — I realized I needed Jesus to go to heaven and received Christ as my personal Savior one Wednesday afternoon.
            </p>
            <p className="font-sans text-church-gray text-sm leading-relaxed mt-3">
              Soon the Lord began to burden my heart about mission work, and at age 14 I surrendered my life to serve the Lord wherever He would send me. I have been serving in the Children and Bus Ministries of the Oakwood Baptist Church.
            </p>
          </article>
        </AnimatedItem>

      </AnimatedSection>
    </SectionWrapper>
  );
}
