import { useEffect } from 'react';
import { Section } from '../components/Section';

export const Privacy = () => {
  useEffect(() => {
    document.title = 'კონფიდენციალურობა | FC Torpedo Kutaisi';
  }, []);

  return (
    <div className="pt-10 pb-20">
      <Section title="კონფიდენციალურობის პოლიტიკა">
        <div className="max-w-4xl mx-auto bg-zinc-950/80 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">1. მონაცემთა შეგროვება</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
              ჩვენ პატივს ვცემთ თქვენს პირად სივრცეს. საიტზე სტუმრობისას შესაძლოა ავტომატურად შეგროვდეს გარკვეული სახის ტექნიკური ინფორმაცია (მაგ: IP მისამართი, ბრაუზერის ტიპი, ოპერაციული სისტემა), რომელიც გამოიყენება მხოლოდ საიტის მუშაობის გასაუმჯობესებლად და ვიზიტორთა სტატისტიკური მიზნებისთვის.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">2. პერსონალური ინფორმაციის გამოყენება</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
              საკონტაქტო ფორმის გამოყენებისას შევსებული მონაცემები (მაგალითად: სახელი, ელ-ფოსტა) გამოიყენება ექსკლუზიურად თქვენთან დასაკავშირებლად და თქვენს კითხვებზე პასუხის გასაცემად. ჩვენ არასოდეს გადავცემთ თქვენს პირად მონაცემებს მესამე პირებს თქვენი წინასწარი თანხმობის გარეშე, გარდა საქართველოს კანონმდებლობით პირდაპირ გათვალისწინებული შემთხვევებისა.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">3. ქუქი-ფაილები (Cookies)</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
              ჩვენი ვებგვერდი იყენებს ე.წ. ქუქი-ფაილებს მომხმარებლისთვის საუკეთესო გამოცდილების უზრუნველსაყოფად. ქუქი-ფაილები გვეხმარება გავიგოთ, თუ როგორ იყენებენ ვიზიტორები საიტს. თქვენ შეგიძლიათ ნებისმიერ დროს გამორთოთ ქუქი-ფაილები თქვენი ბრაუზერის პარამეტრებიდან, თუმცა ამან შესაძლოა შეზღუდოს ვებგვერდის ზოგიერთი ფუნქციონალი.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">4. უსაფრთხოება</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
              ჩვენ ვიღებთ შესაბამის ტექნიკურ და ორგანიზაციულ ზომებს თქვენი მონაცემების მაქსიმალური უსაფრთხოების დასაცავად არაავტორიზებული წვდომისგან, შეცვლისგან, გამჟღავნებისგან ან განადგურებისგან.
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
