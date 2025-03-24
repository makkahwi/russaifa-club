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
        <h5 className="mb-5 text-white">الشباب ثروتنا</h5>

        <h3 className="mt-4 display-4 fw-bold text-white">نادي شباب الرصيفة</h3>

        <h4 className="text-white mt-5">النادي الأمثل للشباب الأفضل</h4>

        <div className="btn-group my-4">
          <a
            className="btn btn-white text-primary fw-bold p-2 px-3"
            href="#contact"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 position-relative mt-5"></div>
    </div>
  );
};

export default HeaderSection;
