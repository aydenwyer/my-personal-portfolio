import SectionHeading from "@/components/SectionHeading";
import BlogPostCard from "./BlogPostCard";

export default function blog() {
  return (
    <section className="flex flex-col gap-44">
      <SectionHeading
        preheader="blog"
        header="Learn from me"
        paragraph="Here are a list of blog posts that I've written to capture my thoughts, and teach what I know."
      />
      <div></div>
    </section>
  );
}
