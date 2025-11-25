import BlogSinglePost from "./_components/blog-detail-post";
import BlogDetailPostComment from "./_components/blog-detail-post-comment";
import BlogDetailRelatedArticles from "./_components/blog-detail-related-articles";
import BlogDetailRelatedArticlesCards from "./_components/blog-detail-related-articles-cards";

export default function BlogDetail() {
  return (
    <>
      <BlogSinglePost />
      <BlogDetailRelatedArticles />
      <BlogDetailRelatedArticlesCards />
      <BlogDetailPostComment />
    </>
  );
}
