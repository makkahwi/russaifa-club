const HeaderSection = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url('/images/BG.jpg')`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="row justify-content-center bg-warning py-5"
    >
      <div className="col-md-6 col-lg-5 my-auto py-5 px-5 px-md-2">
        <h5 className="mb-5 text-white">
          الصحة تبدأ من التغذية السليمة - اكتشف حياتك الصحية الآن! مع
        </h5>

        <h4 className="text-white">أخصائية التغذية</h4>
        <h3 className="mt-4 display-4 fw-bold text-white">فاطمة محمد</h3>

        <h4 className="text-white mt-5">
          احصل على خطة غذائية مخصصة تناسب احتياجاتك الصحية وأهدافك الشخصية
        </h4>

        <div className="btn-group my-4">
          <a
            className="btn btn-white text-success fw-bold p-2 px-3"
            href="#contact"
          >
            اجعل صحتك أولوية وتواصل معي الآن!
          </a>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 position-relative mt-5"></div>
    </div>
  );
};

export default HeaderSection;
