import BlogHeroSection from "./_components/blog-hero-section";
import BlogLatestBlogCards from "./_components/blog-latest-blog-cards";
import BlogLatestPosts from "./_components/blog-latest-posts";

export default function Blog() {
  return (
    <>
      <BlogHeroSection />
      <BlogLatestPosts />
      <BlogLatestBlogCards />
    </>
  );
}
