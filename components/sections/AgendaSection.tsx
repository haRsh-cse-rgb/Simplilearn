const agendaItems = [
    {
      title: "Welcome & Opening",
      speaker: "Sudipto Mitra, CRO Simplilearn",
      description: "Why capability-building is now a board-level issue and what's changing in the workforce landscape.",
    },
    {
      title: "Keynote:\nWhat Enterprise Leaders Are Seeing on the Ground",
      speaker: "Rob Lauber, Former CLO McDonald's",
      description: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.",
    },
    {
      title: "Lunch & Executive Conversation",
      speaker: "Industry Experts Invited",
      description: "What large enterprise talent ecosystems are learning about capability-building at scale.",
    },
  ];
  
  export default function AgendaSection() {
    return (
      <section className="bg-[#00f0ff] py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#2563eb] mb-12">
            Event Agenda
          </h2>
  
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agendaItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-8 flex flex-col h-full shadow-sm"
              >
                
                <div className="min-h-[6rem] mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2563eb] leading-tight whitespace-pre-line">
                    {item.title}
                  </h3>
                </div>
  
                
                <div className="mb-4">
                  <p className="text-black font-bold text-base md:text-lg">
                    {item.speaker}
                  </p>
                </div>
  
                
                <p className="text-black text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }