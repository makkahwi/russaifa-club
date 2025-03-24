import { getPartners } from "@/api";
import ImageComp from "@/components/Image";
import PageSection from "@/components/PageSection";

interface PartnerProps {
  logo: string;
  link: string;
  bigger?: boolean;
}

const TrustedBySection = async () => {
  const partners: PartnerProps[] = [
    { logo: "/images/logo/logo-c.png", link: "" },
    { logo: "/images/logo/logo-c.png", link: "" },
    { logo: "/images/logo/logo-c.png", link: "" },
    { logo: "/images/logo/logo-c.png", link: "" },
    { logo: "/images/logo/logo-c.png", link: "" },
    { logo: "/images/logo/logo-c.png", link: "" },
  ];

  return (
    <PageSection title="الداعمين وشركاء النجاح" noMinHeight color="light">
      {partners.map(({ logo, link, bigger }, i) => (
        <div
          className={`col-xl-${
            bigger ? 3 : 2
          } col-lg-4 col-md-3 col-6 p-3 p-lg-5`}
          key={i}
        >
          <a href={link} target="_blank">
            <ImageComp alt={`partner-${i}-logo`} src={logo} />
          </a>
        </div>
      ))}
    </PageSection>
  );
};

export default TrustedBySection;
