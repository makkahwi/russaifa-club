import { getVlog } from "@/api";
import PageSection from "@/components/PageSection";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface VlogProps {
  link: string;
}

const VlogSection = async () => {
  const videos: VlogProps[] = await getVlog();

  return (
    <PageSection title="Vlog" id="vlog">
      {videos.map(({ link }, i) => (
        <div className="col-xl-3 col-md-6" key={i}>
          <iframe
            width="100%"
            height="250vh"
            src={`https://www.youtube.com/embed/${link}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      ))}

      <div className="col-xs-12 text-center">
        <a
          href="https://www.youtube.com/channel/UCdCODCOiHkQXfCGHGDQel4Q"
          target="_blank"
        >
          <div
            style={{ backgroundColor: "#FF0000" }}
            className="btn btn-transparent p-3 m-3"
          >
            <h5 className="text-white p-0 m-0">
              <FontAwesomeIcon icon={faYoutube} /> Find More On YouTube Channel
            </h5>
          </div>
        </a>
      </div>
    </PageSection>
  );
};

export default VlogSection;
