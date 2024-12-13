import PageSection from "@/components/PageSection";
import dynamic from "next/dynamic";

const NumberCounters = dynamic(() => import("./Numbers"));

const WhoAmISection = async () => {
  const certs = ["الجمعية الأردنية لأخصائيي التغذية"];

  return (
    <PageSection color="light" title="عني" id="about">
      <div className="col-md-12">
        <NumberCounters />

        <h5 className="text-block text-dark">
          <b>فاطمة محمد</b> حاصلة على درجة البكالوريوس في التغذية السريرية
          والحميات من الجامعة الهاشمية معتمدة من قبل وزارة الصحة الأردنية. كما
          أنها عضو لدى الجمعية الأردنية للغذاء والتغذية وجمعية أخصائي التغذية
          العلاجية الأردنية. على مدار أكثر من ٥ سنوات، ساهمت في تقديم استشارات
          التغذية ومساعدة المئات من العملاء على تحقيق أهدافهم الصحية.
        </h5>
      </div>
    </PageSection>
  );
};

export default WhoAmISection;
