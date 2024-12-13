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
      <div className="col-md-6 col-lg-5 my-auto p-5">
        <h5 className="mb-5 text-black">
          الصحة تبدأ من التغذية السليمة - اكتشف حياتك الصحية الآن! مع
        </h5>
        <h4 className="text-black fst-italic">أخصائية التغذية</h4>
        <h3 className="mt-4 display-4 fw-bold">فاطمة محمد</h3>

        <h4 className="text-black mt-5">
          احصل على خطة غذائية مخصصة تناسب احتياجاتك الصحية وأهدافك الشخصية
        </h4>

        <div className="btn-group my-4">
          <a className="btn btn-dark p-2 px-3" href="#contact">
            اجعل صحتك أولوية وتواصل معي الآن!
          </a>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 position-relative mt-5"></div>
    </div>
  );
};

export default HeaderSection;
