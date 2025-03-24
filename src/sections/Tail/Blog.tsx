import PageSection from "@/components/PageSection";
import dynamic from "next/dynamic";

const BlogPosts = dynamic(() => import("@/components/Blog/BlogPosts"));
const BlogSlider = dynamic(() => import("@/components/Blog/BlogSlider"));

export interface BlogPostProps {
  date: string;
  title: string;
  category: string;
  img: string;
  contents: { type: string; content: string; contents?: string[] }[];
}

const BlogSection = async () => {
  const posts: BlogPostProps[] = [
    {
      date: "2025-01-01",
      title: "إقامة نهائيات كأس الاردن للغولف في مقر النادي",
      category: "انشطة",
      img: "/images/gallery/1.jpeg",
      contents: [
        { type: "title", content: "العنوان الأول", contents: ["كذا وكذا"] },
        { type: "subtitle", content: "العنوان الثاني", contents: ["كذا وكذا"] },
      ],
    },
    {
      date: "2025-03-01",
      title: "إطلاق أول بطولة في رصيفة في رياضة الكيك بوكسنغ",
      category: "انشطة",
      img: "/images/gallery/2.jpeg",
      contents: [
        { type: "title", content: "العنوان الأول", contents: ["كذا وكذا"] },
        { type: "subtitle", content: "العنوان الثاني", contents: ["كذا وكذا"] },
      ],
    },
    {
      date: "2025-04-01",
      title: "إقامة نهائيات بطولة تنس الطاولة بين النادي والنادي",
      category: "انشطة",
      img: "/images/gallery/3.jpg",
      contents: [
        { type: "title", content: "العنوان الأول", contents: ["كذا وكذا"] },
        { type: "subtitle", content: "العنوان الثاني", contents: ["كذا وكذا"] },
      ],
    },
    {
      date: "2025-04-04",
      title: "زيارة رئيس بلدية رصيفة للتهنئة بعيد الفطر 2025",
      category: "أخبار",
      img: "/images/gallery/3.jpg",
      contents: [
        { type: "title", content: "العنوان الأول", contents: ["كذا وكذا"] },
        { type: "subtitle", content: "العنوان الثاني", contents: ["كذا وكذا"] },
      ],
    },
  ];

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
