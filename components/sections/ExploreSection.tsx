import {
  History,
  Network,
  BarChart2,
  ShieldCheck,
  FileText,
  Rocket,
  Workflow,
  GitBranch,
  GitMerge
} from 'lucide-react';

const capabilities = [
  {
    icon: History,
    title: 'Skills Decay',
    description: 'every 2-3 years\nfaster for technical skills',
  },
  {
    icon: Network,
    title: 'Manager Role Shift',
    description: 'orchestrating\npeople + AI agents',
  },
  {
    icon: BarChart2,
    title: 'Leaders + AI Co-Pilots',
    description: 'requires sensemaking\nand systems thinking',
  },
  {
    icon: ShieldCheck,
    title: 'Frontline Capability',
    description: 'now depends\non digital fluency',
  },
  {
    icon: FileText,
    title: 'Core Human Capabilities',
    description: 'analytical reasoning\nand scenario planning',
  },
  {
    icon: Rocket,
    title: 'Winning Organizations',
    description: 'predict skills\nahead of demand',
  },
];

export default function ExploreSection() {
  return (
    <section className="bg-[#eef6ff] py-20 px-6">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Heading Section */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#f59e0b] mb-4">
            What We&apos;ll Explore
          </h2>
          <p className="text-black text-lg font-medium">
            The critical shifts every enterprise must plan for:
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-md p-6 shadow-sm border border-transparent hover:border-blue-200 transition-all flex items-start gap-4 min-h-[140px]"
              >
                {/* Icon - Blue, no background box */}
                <div className="flex-shrink-0 pt-1">
                  <Icon className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1 leading-tight">
                    {capability.title}
                  </h3>
                  <p className="text-gray-800 text-sm whitespace-pre-line leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}