import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { players } from '../data';

export const Team = () => {
  return (
    <div className="pt-10">
      <Section title="პირველი გუნდი">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((player) => (
            <div key={player.id} className="relative group">
              <Card 
                title={`${player.firstName} ${player.lastName}`}
                description={`${player.position} | #${player.squadNumber}`}
                image={player.imageUrl}
              />
              {player.isCaptain && (
                <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-xl">
                  კაპიტანი
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};