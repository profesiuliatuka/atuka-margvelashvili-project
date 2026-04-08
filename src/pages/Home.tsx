import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { news } from '../data';

export const Home = () => {
  return (
    <>
      <Hero 
        title="Torpedo Kutaisi" 
        slogan="ჩვენი ქალაქი, ჩვენი ისტორია, ჩვენი გუნდი"
        ctaText="ბილეთების შეძენა"
      />

      <Section title="უახლესი ამბები">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card 
              key={item.id}
              title={item.title}
              description={item.excerpt}
              image={item.imageUrl}
            />
          ))}
        </div>
      </Section>

      <Section title="მომავალი მატჩი" className="bg-zinc-800/30 rounded-3xl my-10">
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">ეროვნული ლიგა</p>
          <div className="flex items-center gap-8 md:gap-20">
            <div className="text-center">
              <div className="w-24 h-24 bg-emerald-600 rounded-full mb-4 mx-auto flex items-center justify-center font-bold text-white text-2xl">TK</div>
              <span className="text-white font-bold uppercase tracking-wider">ტორპედო</span>
            </div>
            <div className="text-4xl md:text-6xl font-black text-white italic opacity-50">VS</div>
            <div className="text-center">
              <div className="w-24 h-24 bg-zinc-700 rounded-full mb-4 mx-auto flex items-center justify-center font-bold text-white text-2xl">DT</div>
              <span className="text-white font-bold uppercase tracking-wider">დინამო თბ</span>
            </div>
          </div>
          <p className="mt-8 text-emerald-500 font-mono tracking-widest text-xl bg-emerald-500/10 px-6 py-2 rounded-full border border-emerald-500/20">
            12 აპრილი | 19:00
          </p>
        </div>
      </Section>
    </>
  );
};