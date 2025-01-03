import PageSection from "@/components/PageSection";

const HolisticSection = () => {
  const list = [
    "اختيار أنشطة رياضية تناسب نمط الحياة.",
    "الإقلاع عن التدخين لتحقيق حياة أكثر صحة.",
    "مساعدتك على تنظيم استخدام الأدوية عند الحاجة.",
    "تنظيم دورات النوم للحصول على نوم كاف ومريح.",
    "التعامل مع المشاكل النفسية التي تؤثر على التفاعلات البدنية.",
  ];

  return (
    <PageSection title="صحة شاملة.. حياة متوازنة.." id="services">
      <div className="col-xl-6 px-3">
        <img
          alt="photo"
          src="/images/gallery/Holistic.jpg"
          className="rounded-5 soft-edges w-100 mb-5"
        />
      </div>

      <div className="col-xl-6">
        <h5 className="lh-lg text-justify mb-4">
          الصحة ليست مجرد نظام غذائي؛ إنها رحلة متكاملة. أعمل مع عملائي لتحسين
          جميع الجوانب التي تؤثر على صحتهم العامة، والتي تمس بكفاءة الجسم خلال
          اتباع النظام الغذائي, بما في ذلك...
        </h5>

        <ul>
          {list.map((item, i) => (
            <li key={i}>
              <h5 className="text-justify text-dark lh-lg">{item}</h5>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
};

export default HolisticSection;
