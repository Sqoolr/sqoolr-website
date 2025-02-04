import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      title: "The Future of School Management",
      excerpt: "Discover how digital transformation is reshaping education administration.",
      date: "Coming Soon",
    },
    {
      title: "Streamlining Student Records",
      excerpt: "Best practices for managing student data efficiently and securely.",
      date: "Coming Soon",
    },
    {
      title: "Effective Staff Management",
      excerpt: "Tips for better staff coordination and performance tracking.",
      date: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sqoolr-navy mb-8 text-center">
            Sqoolr Blog
          </h1>
          <div className="grid gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-sqoolr-mint">{post.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;