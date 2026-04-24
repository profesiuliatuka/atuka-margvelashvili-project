import { useEffect } from 'react';
import { Section } from '../components/Section';

export const About = () => {
  useEffect(() => {
    document.title = 'ჩვენს შესახებ | FC Torpedo Kutaisi';
  }, []);

  return (
    <div className="pt-10">
      <Section title="კლუბის შესახებ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-500 uppercase italic tracking-wider">ჩვენი ისტორია</h3>
            <p className="text-zinc-300 leading-relaxed text-lg font-light">
              ქუთაისის „ტორპედო“ დაარსდა 1946 წელს და მას შემდეგ ქართული ფეხბურთის ერთ-ერთი მთავარი სიმბოლოა. 
              კლუბს აქვს მდიდარი ტრადიციები, მოპოვებული აქვს მრავალი ტიტული როგორც საბჭოთა პერიოდში, ისე დამოუკიდებელი საქართველოს ისტორიაში.
            </p>
            <p className="text-zinc-300 leading-relaxed font-light">
              ჩვენი მიზანია დავბრუნდეთ მწვერვალებზე და ქუთაისელ გულშემატკივარს ვაჩუქოთ დაუვიწყარი გამარჯვებები ევროპულ სარბიელზე.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-600/10 blur-2xl rounded-full group-hover:bg-emerald-600/20 transition-colors duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000" 
              alt="Ramaz Shengelia Stadium" 
              loading="lazy"
              className="relative rounded-2xl border border-zinc-800 shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </Section>

      <Section title="რამაზ შენგელიას სტადიონი" className="bg-zinc-800/20 rounded-[3rem] my-10">
        <div className="text-center max-w-3xl mx-auto py-10">
          <p className="text-zinc-400 text-xl italic font-serif leading-loose">
            "ჩვენი ციხესიმაგრე, სადაც ყოველი მატჩი დღესასწაულია. სტადიონი იტევს 12,000-მდე მაყურებელს და გამოირჩევა საუკეთესო აკუსტიკით საქართველოში."
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-600" />
            <div className="w-2 h-2 rounded-full bg-emerald-600/50" />
            <div className="w-2 h-2 rounded-full bg-emerald-600/20" />
          </div>
        </div>
      </Section>
    </div>
  );
};