import Slider from "@/components/Slider";

const GallerySection = () => {
  const images = [
    {
      src: "Food.jpg",
      width: 9,
    },
    {
      src: "Food.jpg",
      width: 3,
    },
    {
      src: "Food.jpg",
      width: 6,
    },
    {
      src: "Food.jpg",
      width: 6,
    },
    {
      src: "Food.jpg",
      width: 6,
    },
    {
      src: "Food.jpg",
      width: 6,
    },
    {
      src: "Food.jpg",
      width: 6,
    },
  ];

  return (
    <Slider
      duration={2500}
      slides={images.map(({ src, width }, i) => (
        <div
          style={{
            height: "75vh",
            backgroundImage: `url('/images/gallery/${src}')`,
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

export default GallerySection;
