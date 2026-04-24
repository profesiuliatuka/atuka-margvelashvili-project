import { useEffect, useState, useMemo } from 'react';
import { Section } from '../components/Section';
import playersData from '../data/players.json';
import type { Player } from '../types';

import georgiaFlag from '../assets/Flags/Georgia.webp';
import serbiaFlag from '../assets/Flags/Serbia.webp';
import brazilFlag from '../assets/Flags/Brazil.webp';
import portugalFlag from '../assets/Flags/Portugal.webp';
import croatiaFlag from '../assets/Flags/Croatia.webp';
import germanyFlag from '../assets/Flags/Germany.webp';
import guineaBissauFlag from '../assets/Flags/Guinea_Bissau.webp';
import ukraineFlag from '../assets/Flags/Ukraine.webp';
import franceFlag from '../assets/Flags/France.webp';

const positionColor: Record<string, string> = {
  'მეკარე': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'მცველი': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'ნახევარმცველი': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'თავდამსხმელი': 'bg-red-500/20 text-red-400 border-red-500/30',
};

const countryFlags: Record<string, string> = {
  'საქართველო': georgiaFlag,
  'სერბეთი': serbiaFlag,
  'ბრაზილია': brazilFlag,
  'პორტუგალია': portugalFlag,
  'ხორვატია': croatiaFlag,
  'გერმანია': germanyFlag,
  'გვინეა-ბისაუ': guineaBissauFlag,
  'უკრაინა': ukraineFlag,
  'საფრანგეთი': franceFlag,
};

const POSITION_ORDER = ['მეკარე', 'მცველი', 'ნახევარმცველი', 'თავდამსხმელი'];

type TeamFilter = 'All' | 'მეკარე' | 'მცველი' | 'ნახევარმცველი' | 'თავდამსხმელი';

export const Team = () => {
  const players = useMemo(() => playersData as Player[], []);
  const [filter, setFilter] = useState<TeamFilter>('All');

  useEffect(() => {
    document.title = 'გუნდი | FC Torpedo Kutaisi';
  }, []);

  const grouped = useMemo(() => POSITION_ORDER.reduce((acc, pos) => {
    acc[pos] = players.filter((p) => p.position === pos);
    return acc;
  }, {} as Record<string, Player[]>), [players]);

  const sections = [
    { key: 'მეკარე', label: 'მეკარეები' },
    { key: 'მცველი', label: 'მცველები' },
    { key: 'ნახევარმცველი', label: 'ნახევარმცველები' },
    { key: 'თავდამსხმელი', label: 'თავდამსხმელები' },
  ] as const;

  return (
    <div className="pt-10">
      <Section title="პირველი გუნდი">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">სეზონი:</span>
            <span className="bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 px-4 py-1.5 rounded-full text-sm font-black tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              2026
            </span>
            <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest ml-2">
              {players.length} მოთამაშე
            </span>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 p-1.5 bg-zinc-900/80 border border-zinc-800 rounded-2xl w-full sm:w-fit backdrop-blur-md shadow-xl">
            {[
              { key: 'All', label: 'ყველა' },
              { key: 'მეკარე', label: 'მეკარე' },
              { key: 'მცველი', label: 'მცველი' },
              { key: 'ნახევარმცველი', label: 'ნახევარმცველი' },
              { key: 'თავდამსხმელი', label: 'თავდამსხმელი' }
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key as TeamFilter)}
                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === f.key 
                  ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-100' 
                  : 'text-zinc-400 hover:text-white hover:bg-white/5 scale-95 hover:scale-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {(() => {
          return (
          <div key={filter} className="flex flex-col gap-16 animate-fade-in-up">
            {sections
              .filter(s => filter === 'All' || s.key === filter)
              .map(({ key, label }) => {
              const group = grouped[key] || [];
              if (group.length === 0) return null;
              
              return (
                <div key={key}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-2 h-8 bg-emerald-600 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                    <h3 className="text-2xl font-black uppercase tracking-widest text-white drop-shadow-md">{label}</h3>
                    <span className="text-zinc-600 text-sm font-bold bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800 ml-2">{group.length}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {group.map((item) => {
                      const posColorClass = positionColor[item.position] || 'bg-zinc-700/20 text-zinc-400 border-zinc-600/30';
                      const flagSrc = countryFlags[item.country];

                      return (
                        <div
                          key={item.id}
                          className="group relative bg-zinc-950/80 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1"
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

                          <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 flex items-end justify-center rounded-2xl group-hover:rounded-none transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
                            <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-zinc-950 to-transparent z-10" />

                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              className="relative z-10 w-full h-full object-cover object-top group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 ease-out drop-shadow-2xl"
                            />
                          </div>

                          <div className="relative z-20 p-5 -mt-8 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent pt-10">
                            <h3 className="text-sm md:text-base font-black text-white uppercase tracking-tight mb-2 truncate text-center group-hover:text-emerald-400 transition-colors duration-300">
                              {item.name}
                            </h3>
                            <div className="flex items-center justify-center gap-2 text-xs flex-wrap">
                              <span className="text-zinc-400 font-bold flex items-center gap-1.5">
                                {flagSrc ? (
                                  <img src={flagSrc} alt={item.country} className="w-6 h-6 object-contain rounded-[2px]" />
                                ) : (
                                  <span className="text-base">🌍</span>
                                )}
                                <span>{item.country}</span>
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
        );
        })()}
      </Section>
    </div>
  );
};