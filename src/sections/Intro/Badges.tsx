import Slider from "@/components/Slider";

const BadgesSection = () => {
  const images = [
    {
      src: "Actee.png",
      width: 6,
    },
    {
      src: "AqAi.png",
      width: 6,
    },
    {
      src: "DG1.png",
      width: 6,
    },
    {
      src: "DG2.png",
      width: 6,
    },
    {
      src: "icf.png",
      width: 6,
    },
    {
      src: "lego.png",
      width: 6,
    },
    {
      src: "LND.png",
      width: 6,
    },
    {
      src: "SA.png",
      width: 6,
    },
  ];

  return (
    <Slider
      duration={2500}
      slides={images.map(({ src }, i) => (
        <div
          style={{
            height: "25vh",
            backgroundImage: `url('/images/badges/${src}')`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          key={i}
          className="w-100 p-0 m-0"
        />
      ))}
    />
  );
};

export default BadgesSection;
