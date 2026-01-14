import Image from 'next/image';

const speakers = [
  {
    name: 'Rob Lauber',
    image: '/rob.png',
    bio: "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
  },
  {
    name: 'Krishna Kumar',
    image: '/krishna.png',
    bio: "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn't, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.",
  },
  {
    name: 'Sudipto Mitra',
    image: '/sudipto.png',
    bio: "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.",
  },
];

export default function SpeakersSection() {
  return (
    <section className="bg-gradient-to-b from-[#1D4DF4] to-[#112D8E] py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffb800] mb-12">
          Featured Speakers
        </h2>

        
        <div className="space-y-12">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              
              <div className="w-[60%] md:w-56 flex-shrink-0 mx-auto md:mx-0">
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-[#00eaff] mb-4 text-center md:text-left">
                  {speaker.name}
                </h3>
                <p className="text-white text-base leading-relaxed opacity-95 text-center md:text-left">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-20 relative rounded-lg overflow-hidden">
          
          <div className="absolute inset-0 z-0">
            <Image 
                src="/frame.png" 
                alt="Background Pattern" 
                fill 
                className="object-cover"
            />
             
            <div className="absolute inset-0 bg-[#2563eb]/30 mix-blend-multiply" />
          </div>

          
          <div className="relative z-10 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-[#00eaff] mb-3">
              Additional Expert Perspectives
            </h3>
            <p className="text-white text-base md:text-lg leading-relaxed max-w-4xl">
              Invited experts from leading consulting and enterprise learning organizations 
              will contribute short perspectives, offering insight into how large 
              organizations are evolving skills and leadership models in the AI era.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}