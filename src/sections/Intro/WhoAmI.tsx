import PageSection from "@/components/PageSection";
import dynamic from "next/dynamic";

const NumberCounters = dynamic(() => import("./Numbers"));

const WhoAmISection = async () => {
  const LinkComp = ({ link = "", text = "", image = "" }) => (
    <a href={link} target="_blank" className="text-primary">
      <img src={image} style={{ height: 44 }} />{" "}
      <span className="text-decoration-underline">{text}</span>
    </a>
  );

  return (
    <PageSection title="عن النادي" id="about">
      <div className="col-md-12">
        <NumberCounters />

        <h5 className="text-justify lh-lg text-primary">
          تم تأسيس مركز شباب الرصيفة عام 1989، ويقع مقره الدائم في مدينة الرصيفة
          – الأردن. يضم المركز مجلس إدارة منتخب من الأعضاء النشطين، ويعمل على
          تنظيم فعاليات مستمرة تشمل الرياضة، الثقافة، والعمل التطوعي. نمتلك
          حافلة خاصة لخدمة أعضاء المركز، ونقوم بتوثيق كافة أنشطتنا بالصور
          والفيديوهات بشكل دوري. مركزنا معتمد من
          <LinkComp
            link="https://moh.gov.jo"
            text="وزارة الشباب الأردنية"
            image="/images/logos/moh.png"
          />{" "}
          وعضو في
          <LinkComp
            link="https://www.facebook.com/jmylgdhwltgdhy/"
            text="اتحاد النوادي الرياضية الأردنية"
            image="/images/logos/soc1.jpg"
          />{" "}
          و
          <LinkComp
            link="https://www.facebook.com/JordanianDietitiansAssociation"
            text="جمعية النوادي الاجتماعية في محافظة الزرقاء"
            image="/images/logos/soc2.jpg"
          />
          . نقدم أنشطة رياضية وثقافية واجتماعية متنوعة تهدف لتمكين الشباب وتنمية
          قدراتهم.
        </h5>

        <h5 className="text-justify lh-lg text-primary my-5">
          على مدار أكثر من 36 سنوات، قمنا بالعديد من الإنجازات مثل الحصول على
          جائزة كذا وكذا وكذا.
        </h5>

        <h5 className="text-justify lh-lg text-primary fw-bold mt-4">
          نحن هنا من الشباب والمستقبل الواعد.
        </h5>
      </div>
    </PageSection>
  );
};

export default WhoAmISection;
