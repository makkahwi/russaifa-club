import PageSection from "@/components/PageSection";
import dynamic from "next/dynamic";

const NumberCounters = dynamic(() => import("./Numbers"));

const WhoAmISection = async () => {
  return (
    <PageSection title="عني" id="about">
      <div className="col-md-12">
        <NumberCounters />

        <h5 className="text-justify lh-lg text-dark">
          أخصائية تغذية سريرية وحميات، حاصلة على درجة البكالوريوس في التغذية
          السريرية والحميات من الجامعة الهاشمية، ومعتمدة كأخصائية تغدية من وزارة
          الصحة الأردنية. طوال رحلتي المهنية، كان شغفي دائمًا تقديم الدعم
          والإرشاد الغذائي للأفراد لمساعدتهم على تحقيق أهدافهم الصحية وتحسين
          جودة حياتهم.
        </h5>

        <h5 className="text-justify lh-lg text-dark">
          أفتخر بعضويتي في الجمعية الأردنية للغذاء والتغذية وجمعية أخصائي
          التغذية العلاجية الأردنية، حيث أعمل مع زملاء مهنيين لتعزيز الوعي
          الغذائي في مجتمعنا.
        </h5>

        <h5 className="text-justify lh-lg text-dark">
          على مدار أكثر من 5 سنوات، قدمت استشارات التغذية الشخصية وساعدت المئات
          من العملاء في التغلب على التحديات الصحية والغذائية، سواء كان هدفهم
          خسارة الوزن، اكتساب الوزن الصحي، علاج الكثير من الأمراض والمشاكل
          الصحية، أو تحسين الأداء البدني والعقلي. رسالتي هي أن أساعد عملائي على
          تبني نظام غذائي صحي مستدام يناسب احتياجاتهم وأسلوب حياتهم، بدون الشعور
          بالحرمان أو الإجهاد.
        </h5>

        <h5 className="text-justify lh-lg text-dark fw-bold mt-4">
          أؤمن أن رحلة التغيير تبدأ بخطوة صغيرة، وأنا هنا لاساعدك في إطلاق هذه
          الرحلة.
        </h5>
      </div>
    </PageSection>
  );
};

export default WhoAmISection;
