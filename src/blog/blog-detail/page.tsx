import BlogSinglePost from "./_components/blog-detail-post";
import BlogDetailRelatedArticles from "./_components/blog-detail-related-articles";
import BlogDetailRelatedArticlesCards from "./_components/blog-detail-related-articles-cards";

export default function BlogDetail() {
  return (
    <>
      <BlogSinglePost />
      <BlogDetailRelatedArticles />
      <BlogDetailRelatedArticlesCards />
    </>
  );
}
