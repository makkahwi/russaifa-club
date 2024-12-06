import { getBlogPosts } from "@/api";
import PageSection from "@/components/PageSection";
import dynamic from "next/dynamic";

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
  const posts: BlogPostProps[] = await getBlogPosts();

  return (
    <PageSection title="المدونة" id="blog" color="light">
      <div className="accordion">
        <div className="col-md-12 text-center p-0 m-0">
          <BlogSlider posts={posts} />
        </div>

        <BlogPosts posts={posts} />
      </div>
    </PageSection>
  );
};

export default BlogSection;
