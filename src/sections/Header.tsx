const HeaderSection = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url('/images/BG.jpg')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="row"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          zIndex: 1,
        }}
      />

      <div
        style={{ position: "relative", zIndex: 2 }}
        className="row justify-content-center py-5"
      >
        <div className="col-md-6 col-lg-5 my-auto py-5 px-5 px-md-2">
          <h5 className="mb-5 text-white">مرحباً بكم في</h5>

          <h3 className="mt-4 display-4 fw-bold text-white">
            نادي شباب الرصيفة
          </h3>

          <h4 className="text-white mt-5">
            منذ عام 1989 ونحن نغيّر في حياة شبابنا
          </h4>

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
    </div>
  );
};

export default HeaderSection;
