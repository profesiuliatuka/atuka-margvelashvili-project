import { useEffect } from 'react';
import { Section } from '../components/Section';

export const Terms = () => {
  useEffect(() => {
    document.title = 'წესები და პირობები | FC Torpedo Kutaisi';
  }, []);

  return (
    <div className="pt-10 pb-20">
      <Section title="წესები და პირობები">
        <div className="max-w-4xl mx-auto bg-zinc-950/80 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">1. ზოგადი დებულებები</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
              წინამდებარე წესები და პირობები არეგულირებს ქუთაისის "ტორპედოს" ოფიციალური ვებგვერდით სარგებლობის პირობებს. ვებგვერდზე შემოსვლით და მისი გამოყენებით, თქვენ ეთანხმებით ამ წესებს. თუ არ ეთანხმებით რომელიმე პუნქტს, გთხოვთ, შეწყვიტოთ საიტით სარგებლობა.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">2. ინტელექტუალური საკუთრება</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
              საიტზე განთავსებული ყველა მასალა, მათ შორის ტექსტი, გრაფიკა, ლოგოები, სურათები და პროგრამული უზრუნველყოფა, წარმოადგენს საფეხბურთო კლუბ "ტორპედო" ქუთაისის ინტელექტუალურ საკუთრებას და დაცულია საქართველოს კანონმდებლობით. მათი უნებართვო გამოყენება, კოპირება ან გავრცელება მკაცრად იკრძალება.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">3. მომხმარებლის ქცევის წესები</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
              საიტით სარგებლობისას იკრძალება ნებისმიერი უკანონო, შეურაცხმყოფელი ან მავნე ქმედების განხორციელება. მომხმარებელი ვალდებულია პატივი სცეს კლუბის, სხვა გულშემატკივრების და საზოგადოების ინტერესებს. აკრძალულია საიტის ტექნიკური გამართულობის ხელყოფა.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">4. პასუხისმგებლობის შეზღუდვა</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
              კლუბი იტოვებს უფლებას ნებისმიერ დროს შეიტანოს ცვლილებები საიტზე განთავსებულ ინფორმაციაში გაფრთხილების გარეშე. ჩვენ არ ვიღებთ პასუხისმგებლობას საიტის შეფერხებით მუშაობაზე ან ტექნიკურ ხარვეზებზე, რომლებიც ჩვენგან დამოუკიდებელი ობიექტური მიზეზებით არის გამოწვეული.
            </p>

            <p className="text-xs tracking-widest uppercase font-bold text-zinc-600 mt-12 border-t border-white/10 pt-6">
              ბოლო განახლება: აპრილი, 2026 წელი
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};
