"use client";

import { capitalizeSentenceFirstLetters } from "@/functions/utils";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import ImageComp from "../Image";
import CustomToggle from "./Toggle";

interface BlogPostProps {
  date: string;
  title: string;
  category: string;
  img: string;
  contents: { type: string; content: string; contents?: string[] }[];
}

const BlogPosts = ({ posts }: { posts: BlogPostProps[] }) => {
  return posts.map(({ date, title, img, category, contents }, i) => (
    <div
      className="accordion-collapse collapse"
      data-bs-target={String(i)}
      key={i}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <CustomToggle eventKey={String(i)} className="m-0 float-end">
              <div className="btn btn-success">
                <FontAwesomeIcon icon={faX} />
              </div>
            </CustomToggle>
          </div>

          <div className="col-md-4">
            <ImageComp alt={`post-${i}-img`} src={img} />
          </div>

          <div className="col-md-8 py-5 px-3">
            <p>{date}</p>
            {/* <h4>{capitalizeSentenceFirstLetters(title?.toLowerCase())}</h4> */}
          </div>

          <div className="col-md-12 my-3">
            {contents?.map(({ type, content, contents: texts }, i) => (
              <Fragment key={i}>
                {type === "title" ? (
                  <h5 className="text-block fw-bold">{content}</h5>
                ) : type === "ol" ? (
                  <ol>
                    {texts?.map((point, y) => (
                      <li key={y}>{point}</li>
                    ))}
                  </ol>
                ) : type === "resources" ? (
                  <Fragment>
                    <h6>Resources:</h6>

                    <ul>
                      {texts?.map((resource, y) => (
                        <li key={y}>{resource}</li>
                      ))}
                    </ul>
                  </Fragment>
                ) : (
                  <h6
                    className={`text-block mb-5 ${
                      type === "boldText" ? "fw-bold" : ""
                    }`}
                  >
                    {content}
                  </h6>
                )}
              </Fragment>
            ))}
          </div>

          <div className="col-md-12">
            <CustomToggle eventKey={String(i)} className="m-0 float-end">
              <div className="btn btn-success">Close</div>
            </CustomToggle>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default BlogPosts;
