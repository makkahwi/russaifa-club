import { getCerts } from "@/api";
import PageSection from "@/components/PageSection";
import dynamic from "next/dynamic";

const NumberCounters = dynamic(() => import("./Numbers"));

interface CertProps {
  title: string;
  date: string;
  source: string;
}

const WhoAmISection = async () => {
  // const certs: CertProps[] = await getCerts();
  const certs = ["الجمعية الأردنية لأخصائيي التغذية"];

  return (
    <PageSection color="light" title="عني">
      <div className="col-md-12">
        <NumberCounters />

        <h5 className="text-block text-dark">
          فاطمة محمد هي أخصائية تغذية معتمدة بخبرة تمتد لأكثر من 8 سنوات. متخصصة
          في تصميم أنظمة غذائية فردية لمساعدتك على الوصول إلى أهدافك الصحية
          والتمتع بحياة أفضل.
        </h5>
      </div>

      <div className="col-md-12 border border-danger border-2 rounded-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12 my-4">
            <h3 className="text-center text-danger">عضويات</h3>
          </div>

          <div className="col-md-12 text-justify my-4 text-dark p-3">
            <h5 className="lh-lg">
              <ul>
                {certs?.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </h5>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default WhoAmISection;
