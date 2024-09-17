import { getBlogPosts } from "@/api";
import PageSection from "@/components/PageSection";
import dynamic from "next/dynamic";
import { Accordion, Col } from "react-bootstrap";

const BlogPosts = dynamic(() => import("@/components/Blog/BlogPosts"));
const BlogSlider = dynamic(() => import("@/components/Blog/BlogSlider"));

interface BlogPostProps {
  date: string;
  title: string;
  category: string;
  img: string;
  contents: { type: string; content: string; contents?: string[] }[];
}

const BlogSection = async () => {
  const posts: BlogPostProps[] = [];

  return (
    <PageSection title="Blog" id="blog" color="light">
      <Accordion>
        <Col md={12} className="text-center p-0 m-0">
          <BlogSlider posts={posts} />
        </Col>

        <BlogPosts posts={posts} />
      </Accordion>
    </PageSection>
  );
};

export default BlogSection;
