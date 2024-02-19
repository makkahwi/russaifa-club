import Slider from "@/components/Slider";

const GallerySection = () => {
  const images = [
    {
      src: "a.jpg",
      width: 9,
    },
    {
      src: "b.jpg",
      width: 3,
    },
    {
      src: "d.jpg",
      width: 6,
    },
    {
      src: "f.jpg",
      width: 6,
    },
    {
      src: "e.jpg",
      width: 6,
    },
    {
      src: "g.jpg",
      width: 6,
    },
    {
      src: "h.jpg",
      width: 6,
    },
  ];

  return (
    <Slider
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
