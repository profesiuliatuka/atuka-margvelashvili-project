import { useEffect, useState } from 'react';
import { Section } from '../components/Section';
import playersData from '../data/players.json';
import type { Player } from '../types';

const positionColor: Record<string, string> = {
  'მეკარე': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'მცველი': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'ნახევარმცველი': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'თავდამსხმელი': 'bg-red-500/20 text-red-400 border-red-500/30',
};

const countryFlags: Record<string, string> = {
  'საქართველო': '🇬🇪',
  'სერბეთი': '🇷🇸',
  'ბრაზილია': '🇧🇷',
  'პორტუგალია': '🇵🇹',
  'ხორვატია': '🇭🇷',
  'გერმანია': '🇩🇪',
  'გვინეა-ბისაუ': '🇬🇼',
  'უკრაინა': '🇺🇦',
  'საფრანგეთი': '🇫🇷',
};

export const Team = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'გუნდი | FC Torpedo Kutaisi';
    setPlayers(playersData as Player[]);
    setLoading(false);
  }, []);

  const positionOrder = ['მეკარე', 'მცველი', 'ნახევარმცველი', 'თავდამსხმელი'];
  
  const grouped = positionOrder.reduce((acc, pos) => {
    acc[pos] = players.filter((p) => p.position === pos);
    return acc;
  }, {} as Record<string, Player[]>);

  const sections = [
    { key: 'მეკარე', label: 'მეკარეები' },
    { key: 'მცველი', label: 'მცველები' },
    { key: 'ნახევარმცველი', label: 'ნახევარმცველები' },
    { key: 'თავდამსხმელი', label: 'თავდამსხმელები' },
  ];

  return (
    <div className="pt-10">
      <Section title="პირველი გუნდი">

        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">სეზონი:</span>
          <span className="bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 px-4 py-1.5 rounded-full text-sm font-black tracking-wider">
            2026
          </span>
          <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest ml-2">
            {players.length} მოთამაშე
          </span>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-5">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-zinc-800 rounded-full" />
              <div className="absolute inset-0 border-4 border-transparent border-t-emerald-500 rounded-full animate-spin" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            {sections.map(({ key, label }) => {
              const group = grouped[key] || [];
              if (group.length === 0) return null;
              
              return (
                <div key={key}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1.5 h-6 bg-emerald-600 rounded-full" />
                    <h3 className="text-xl font-black uppercase tracking-widest text-zinc-300">{label}</h3>
                    <span className="text-zinc-600 text-sm font-bold">— {group.length}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {group.map((item) => {
                      const posColorClass = positionColor[item.position] || 'bg-zinc-700/20 text-zinc-400 border-zinc-600/30';
                      const flag = countryFlags[item.country] || '🌍';

                      return (
                        <div
                          key={item.id}
                          className="group relative bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 shadow-2xl hover:shadow-emerald-900/20 hover:shadow-xl hover:-translate-y-1"
                        >
                          <div className="absolute top-3 left-3 z-20">
                            <div className={`px-2 py-1 rounded-lg border text-[10px] font-black uppercase tracking-wider ${posColorClass}`}>
                              {item.position}
                            </div>
                          </div>

                          <div className="absolute top-3 right-3 z-20">
                            <div className="bg-zinc-900/90 backdrop-blur-sm border border-emerald-500/30 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-sm font-black leading-none text-white">{item.number}</span>
                            </div>
                          </div>

                          <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 flex items-end justify-center">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent z-10" />
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-zinc-950 to-transparent z-10" />

                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              className="relative z-10 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>

                          <div className="relative z-20 p-4 -mt-6">
                            <h3 className="text-sm md:text-base font-black text-white uppercase tracking-tight mb-1 truncate text-center">
                              {item.name}
                            </h3>
                            <div className="flex items-center justify-center gap-2 text-xs flex-wrap">
                              <span className="text-zinc-400 font-bold flex items-center gap-1.5">
                                <span className="text-sm">{flag}</span> {item.country}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Section>
    </div>
  );
};