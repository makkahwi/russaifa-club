import { getBlogPosts } from "@/api";
import PageSection from "@/components/PageSection";
import { Accordion, Col } from "react-bootstrap";
import BlogPosts from "../../components/Blog/BlogPosts";
import BlogSlider from "../../components/Blog/BlogSlider";

interface BlogPostProps {
  date: string;
  title: string;
  category: string;
  img: string;
  contents: { type: string; content: string; contents?: string[] }[];
}

const BlogSection = async () => {
  const posts: BlogPostProps[] = await getBlogPosts();

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
