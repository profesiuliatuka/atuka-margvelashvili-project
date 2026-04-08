import { Section } from '../components/Section';

export const About = () => {
  return (
    <div className="pt-10">
      <Section title="კლუბის შესახებ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-500 uppercase italic">ჩვენი ისტორია</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              ქუთაისის „ტორპედო“ დაარსდა 1946 წელს და მას შემდეგ ქართული ფეხბურთის ერთ-ერთი მთავარი სიმბოლოა. 
              კლუბს აქვს მდიდარი ტრადიციები, მოპოვებული აქვს მრავალი ტიტული როგორც საბჭოთა პერიოდში, ისე დამოუკიდებელი საქართველოს ისტორიაში.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              ჩვენი მიზანია დავბრუნდეთ მწვერვალებზე და ქუთაისელ გულშემატკივარს ვაჩუქოთ დაუვიწყარი გამარჯვებები ევროპულ სარბიელზე.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-600/20 blur-xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000" 
              alt="Ramaz Shengelia Stadium" 
              className="relative rounded-2xl border border-zinc-800 shadow-2xl"
            />
          </div>
        </div>
      </Section>

      <Section title="რამაზ შენგელიას სტადიონი" className="bg-zinc-800/20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-zinc-400 text-lg italic">
            "ჩვენი ციხესიმაგრე, სადაც ყოველი მატჩი დღესასწაულია. სტადიონი იტევს 12,000-მდე მაყურებელს და გამოირჩევა საუკეთესო აკუსტიკით საქართველოში."
          </p>
        </div>
      </Section>
    </div>
  );
};