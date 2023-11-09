import PageSection from "@/components/PageSection";
import { useState } from "react";
import { Button, ButtonGroup, Col } from "reactstrap";

const BlogSection = () => {
  const [pickedCategory, setPickedCategory] = useState("");

  const posts = [
    { date: "7 Oct 2023", title: "Do This n That", category: "Articles" },
    { date: "7 Oct 2023", title: "Do This n That", category: "Researches" },
  ];

  const categories = posts.reduce(
    (final: string[], { category }) =>
      final.includes(category) ? final : [...final, category],
    []
  );

  return (
    <PageSection title="Blog">
      <Col md={12} className="text-center p-0 m-0">
        <ButtonGroup>
          <Button
            onClick={() => setPickedCategory("")}
            color={pickedCategory === "" ? "primary" : "secondary"}
          >
            All
          </Button>

          {categories.map((category, i) => (
            <Button
              onClick={() => setPickedCategory(category)}
              key={i}
              color={pickedCategory === category ? "primary" : "secondary"}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Col>

      <Col md={12}></Col>
    </PageSection>
  );
};

export default BlogSection;
