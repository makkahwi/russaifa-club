import Image from "next/image";

const HeaderSection = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url('/images/Pattern.png')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="row justify-content-center bg-warning"
    >
      <div className="col-md-6 col-lg-5 my-auto px-5">
        <h5 className="mb-5 text-black">
          الصحة تبدأ من التغذية السليمة - اكتشف حياتك الصحية الآن! مع
        </h5>
        <h4 className="text-black fst-italic">أخصائية التغذية</h4>
        <h3 className="mt-4 display-4 fw-bold">فاطمة محمد</h3>

        <h4 className="text-black mt-5">
          احصل على خطة غذائية مخصصة تناسب احتياجاتك الصحية وأهدافك الشخصية
        </h4>

        <div className="btn-group my-4" style={{ direction: "ltr" }}>
          <button className="btn btn-black">ابدأ رحلتك الصحية</button>
          <button className="btn btn-black">احجز استشارتك الآن</button>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 position-relative mt-5">
        <Image
          src="/images/05.png"
          className="position-absolute bottom-0 mx-5 mt-5 d-block d-md-none"
          alt="Noor Photo"
          style={{
            left: "50%",
            transform: "translate(-50%, 0%)",
          }}
          width={646 * 0.45}
          height={934 * 0.45}
          priority
        />

        <Image
          src="/images/05.png"
          className="position-absolute bottom-0 mt-5 d-none d-md-block"
          alt="Noor Photo"
          style={{
            left: "50%",
            transform: "translate(-50%, 0%)",
          }}
          width={646 * 0.65}
          height={934 * 0.65}
          priority
        />
      </div>
    </div>
  );
};

export default HeaderSection;
