import Image from "next/image";

interface Props {
  alt: string;
  src: string;
  className?: string;
  width?: string;
}

const ImageComp = ({ alt, src, className, width = "100%" }: Props) => {
  return (
    <Image
      alt={alt}
      src={src}
      width="0"
      height="0"
      sizes={`(max-width: 768px) ${width},
              (max-width: 1200px) ${width},
              ${width}`}
      className={"h-100 " + className}
      style={{ width: width }}
    />
  );
};

export default ImageComp;
