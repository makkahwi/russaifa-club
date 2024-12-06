"use client";

import Slider from "@/components/Slider";
import { capitalizeSentenceFirstLetters } from "@/functions/utils";
import CustomToggle from "./Toggle";

interface BlogPostProps {
  date: string;
  title: string;
  category: string;
  img: string;
  contents: { type: string; content: string; contents?: string[] }[];
}

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
                <div className="btn btn-dark m-3 p-2 float-end">{category}</div>
              </div>

              <div className="card-body">
                <small className="text-start text-dark">{date}</small>
                <h5 className="text-justify text-dark">
                  {capitalizeSentenceFirstLetters(title.toLowerCase())}
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
