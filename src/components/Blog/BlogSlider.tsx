"use client";

import Slider from "@/components/Slider";
import { BlogPostProps } from "@/sections/Tail/Blog";
import CustomToggle from "./Toggle";

const BlogSlider = ({ posts }: { posts: BlogPostProps[] }) => {
  return (
    <Slider
      navigation
      indicators
      slides={posts.map((post, i) => {
        const { date, title, img, category } = post;

        return (
          <CustomToggle eventKey={String(i)} key={i}>
            <div
              role="button"
              className="card w-100 h-100"
              style={{ display: "table-cell" }}
            >
              <div
                style={{
                  height: "30vh",
                  backgroundImage: `url('${img}')`,
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="w-100 p-0 m-0"
              >
                <div className="btn btn-primary m-3 p-2 float-end">
                  {category}
                </div>
              </div>

              <div className="card-body">
                <small className="text-start text-primary">{date}</small>
                <h5 className="text-justify text-primary">
                  {title
                    .split("")
                    .filter((_, i) => i < 35)
                    .join("") + (title.length > 35 ? "..." : "")}
                </h5>
              </div>
            </div>
          </CustomToggle>
        );
      })}
      slidesCount={3}
    />
  );
};

export default BlogSlider;
