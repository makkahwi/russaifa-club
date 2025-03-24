import PageSection from "@/components/PageSection";

const BoardSection = async () => {
  const programGroups = [
    { img: "faBriefcase", name: "فلان الفلاني", position: "رئيس النادي" },
    { img: "faBriefcase", name: "فلان الفلاني", position: "نائب رئيس النادي" },
    { img: "faBriefcase", name: "فلان الفلاني", position: "نائب رئيس النادي" },
  ];

  return (
    <PageSection title="مجلس الإدارة" id="programs">
      <div className="col-12">
        <div className="card border border-primary border-2 rounded-5 py-4 w-100">
          <div className="card-body">
            <div className="row justify-content-center">
              <h5 className="text-justify mb-5 text-primary">
                يتم انتخاب مجلس الإدارة من قبل أعضاء المركز، ويضم نخبة من الشباب
                الفاعلين والمبادرين. أعضاء المجلس الحاليين
              </h5>

              {programGroups?.map(({ img, name, position }, i) => (
                <div
                  className={`col-lg-6 mb-5 col-xl-${i < 3 ? 4 : 3}`}
                  key={i}
                >
                  <h1 className="text-center mb-4 text-primary display-3">
                    <img src="/images/logo/logo-c.png" className="w-50" />
                  </h1>

                  <h3 className="text-center mb-4 text-primary">{name}</h3>

                  <div className="list-group list-group-flush">
                    <div className="list-group-item">
                      <h5 className="text-center my-1 text-primary">
                        {position}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default BoardSection;
