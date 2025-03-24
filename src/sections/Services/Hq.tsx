import PageSection from "@/components/PageSection";

const HqSection = () => {
  return (
    <PageSection title="مقرنا وتجهيزاتنا" color="light" id="pedia">
      <div className="col-md-6 mb-4">
        <h5 className="text-block text-justify">
          يضم المقر الدائم للمركز مساحات مخصصة لممارسة الرياضات الخارجية، وساحات
          متعددة الاستخدامات. كما يمتلك المركز حافلة نقل مخصصة للأعضاء، ويجري
          العمل على تطوير بوابة إلكترونية حديثة تسهّل التسجيل، التواصل، والاطلاع
          على الفعاليات بسهولة.
        </h5>
      </div>

      <div className="col-md-6 mb-4">
        <img src="/images/gallery/1.jpeg" className="w-100" />
      </div>

      {/* <div className="col-md-12 text-primary">
        <ul className="list-group">
          {resources.map(({ link, text }, i) => (
            <li className="list-group-item" key={i}>
              <a href={link} target="_blank">
                <h5 className="my-3">{text}</h5>
              </a>
            </li>
          ))}
        </ul>
      </div> */}
    </PageSection>
  );
};

export default HqSection;
