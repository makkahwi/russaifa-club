import ImageComp from "@/components/Image";
import PageSection from "@/components/PageSection";

const HeaderSection = () => {
  const list = [
    "تصميم خطط غذائية مخصصة: لتحسين الصحة العامة أو دعم حالات صحية مثل السكري والضغط.",
    "استشارات غذائية شخصية: جلسات فردية لتحليل احتياجاتك وتقديم التوجيه الغذائي.",
    "متابعة مستمرة: لدعمك وتحفيزك في رحلتك نحو صحة أفضل.",
    "برامج تخفيف الوزن: خطط غذائية مرنة للوصول إلى الوزن المثالي.",
    "تحليل العناصر الغذائية: دراسة عاداتك الغذائية وتقديم نصائح لتحسينها.",
  ];

  return (
    <PageSection title="خدماتنا المصممة لك" color="secondary" id="services">
      <div className="col-xl-6">
        <ul>
          {list.map((item, i) => (
            <li key={i}>
              <h5 className="text-justify text-dark lh-lg">{item}</h5>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-xl-6 px-3">
        <ImageComp
          alt="photo"
          src="/images/gallery/Food.jpg"
          className="rounded-5 soft-edges"
        />
      </div>
      {/* <Col lg={12} className="my-auto"></Col> */}
    </PageSection>
  );
};

export default HeaderSection;
