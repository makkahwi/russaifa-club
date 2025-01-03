import PageSection from "@/components/PageSection";
import dynamic from "next/dynamic";

const NumberCounters = dynamic(() => import("./Numbers"));

const WhoAmISection = async () => {
  const LinkComp = ({ link = "", text = "", image = "" }) => (
    <a href={link} target="_blank" className="text-success">
      <img src={image} style={{ height: 44 }} />{" "}
      <span className="text-decoration-underline">{text}</span>
    </a>
  );

  return (
    <PageSection title="عني" id="about">
      <div className="col-md-12">
        <NumberCounters />

        <h5 className="text-justify lh-lg text-success">
          أخصائية تغذية سريرية وحميات، حاصلة على درجة البكالوريوس في التغذية
          السريرية والحميات من{" "}
          <LinkComp
            link="https://hu.edu.jo"
            text="الجامعة الهاشمية"
            image="/images/logos/hu.png"
          />
          ، ومعتمدة كأخصائية تغدية من{" "}
          <LinkComp
            link="https://moh.gov.jo"
            text="وزارة الصحة الأردنية"
            image="/images/logos/moh.png"
          />
          . طوال رحلتي المهنية، كان شغفي دائمًا تقديم الدعم والإرشاد الغذائي
          للأفراد لمساعدتهم على تحقيق أهدافهم الصحية وتحسين جودة حياتهم. أفتخر
          بعضويتي في{" "}
          <LinkComp
            link="https://www.facebook.com/jmylgdhwltgdhy/"
            text="جمعية الغذاء والتغذية الأردنية"
            image="/images/logos/soc1.jpg"
          />{" "}
          و
          <LinkComp
            link="https://www.facebook.com/JordanianDietitiansAssociation"
            text="جمعية أخصائيي التغذية العلاجية الأردنية"
            image="/images/logos/soc2.jpg"
          />
          ، حيث أعمل مع زملاء مهنيين لتعزيز الوعي الغذائي في مجتمعنا.
        </h5>

        <h5 className="text-justify lh-lg text-success my-5">
          على مدار أكثر من 5 سنوات، قدمت استشارات التغذية الشخصية وساعدت المئات
          من العملاء في التغلب على التحديات الصحية والغذائية، سواء كان هدفهم
          خسارة الوزن، اكتساب الوزن الصحي، علاج الكثير من الأمراض والمشاكل
          الصحية، أو تحسين الأداء البدني والعقلي. رسالتي هي أن أساعد عملائي على
          تبني نظام غذائي صحي مستدام يناسب احتياجاتهم وأسلوب حياتهم، بدون الشعور
          بالحرمان أو الإجهاد.
        </h5>

        <h5 className="text-justify lh-lg text-success fw-bold mt-4">
          أؤمن أن رحلة التغيير تبدأ بخطوة صغيرة، وأنا هنا لاساعدك في إطلاق هذه
          الرحلة.
        </h5>
      </div>
    </PageSection>
  );
};

export default WhoAmISection;
