import Slider from "@/components/Slider";

const GallerySection = () => {
  const images = [
    {
      src: "1.jpeg",
      width: 9,
    },
    {
      src: "2.jpeg",
      width: 3,
    },
    {
      src: "3.jpg",
      width: 6,
    },
    {
      src: "1.jpeg",
      width: 6,
    },
    {
      src: "2.jpeg",
      width: 6,
    },
    {
      src: "3.jpg",
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
