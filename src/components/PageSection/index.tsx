interface props {
  children: React.ReactNode;
  aboveTitle?: React.ReactNode;
  color?: string;
  title?: string;
  noMinHeight?: boolean;
  id?: string;
}

const PageSection = ({
  children = <></>,
  color = "white",
  title,
  aboveTitle,
  noMinHeight,
  id,
}: props) => {
  return (
    <div
      style={
        noMinHeight
          ? {
              padding: "15vh 15vw 10vh 15vw",
            }
          : {
              padding: "15vh 15vw 10vh 15vw",
              minHeight: "90vh",
            }
      }
      className={`row bg-${color} justify-content-center`}
      id={id}
    >
      {aboveTitle}

      {title && (
        <div className="col-12">
          <h1 className="mb-5 pb-5 text-center text-success">{title}</h1>
        </div>
      )}

      {children}
    </div>
  );
};

export default PageSection;
