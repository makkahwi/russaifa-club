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
          نادي رسمي لأبناء الرصيفة, مسجل ومرخص لدى
          <LinkComp
            link="https://moh.gov.jo"
            text="وزارة الشباب الأردنية"
            image="/images/logos/moh.png"
          />{" "}
          النادي عضو في{" "}
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
          .{" "}
        </h5>

        <h5 className="text-justify lh-lg text-primary my-5">
          على مدار أكثر من 36 سنوات، قدمنا العديد من الخدمات مثل كذا وكذا وكذا.
        </h5>

        <h5 className="text-justify lh-lg text-primary fw-bold mt-4">
          نحن هنا من أجلك{" "}
        </h5>
      </div>
    </PageSection>
  );
};

export default WhoAmISection;
