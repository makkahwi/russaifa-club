import ImageComp from "@/components/Image";
import PageSection from "@/components/PageSection";
import { Col } from "react-bootstrap";

const CoachingHeaderSection = () => {
  return (
    <PageSection title="خدماتنا المصممة لك" color="secondary" id="coaching">
      <Col xl={6}>
        <h5 className="text-block text-dark mt-3">
          <ul>
            <li>
              تصميم خطط غذائية مخصصة: لتحسين الصحة العامة أو دعم حالات صحية مثل
              السكري والضغط.
            </li>

            <li>
              استشارات غذائية شخصية: جلسات فردية لتحليل احتياجاتك وتقديم التوجيه
              الغذائي.
            </li>

            <li>متابعة مستمرة: لدعمك وتحفيزك في رحلتك نحو صحة أفضل.</li>

            <li>
              برامج تخفيف الوزن: خطط غذائية مرنة للوصول إلى الوزن المثالي.
            </li>

            <li>
              تحليل العناصر الغذائية: دراسة عاداتك الغذائية وتقديم نصائح
              لتحسينها.
            </li>
          </ul>
        </h5>
      </Col>

      <Col xl={6} className="px-3">
        <ImageComp
          alt="coaching-photo"
          src="/images/gallery/Food.jpg"
          className="rounded-5 soft-edges"
        />
      </Col>
      {/* <Col lg={12} className="my-auto"></Col> */}
    </PageSection>
  );
};

export default CoachingHeaderSection;
