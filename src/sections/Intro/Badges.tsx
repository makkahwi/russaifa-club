const BadgesSection = () => {
  const images = [
    {
      src: "AqAi.png",
    },
    {
      src: "Actee.png",
    },
    {
      src: "DG1.png",
    },
    {
      src: "DG2.png",
    },
    {
      src: "icf.png",
    },
    {
      src: "LND.png",
    },
    {
      src: "lego.png",
    },
    {
      src: "SA.png",
    },
  ];

  return (
    <div className="row bg-light">
      {images.map(({ src }, i) => (
        <img
          src={`/images/badges/${src}`}
          key={i}
          className="col-3 col-md-1 px-2 my-3 mx-auto"
        />
      ))}
    </div>
  );
};

export default BadgesSection;
