
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className="min-h-screen bg-sqoolr-navy text-sqoolr-mint">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Join Our Community
          </h1>

          <div className="bg-white/10 rounded-xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Connect with Like-minded Educators
                </h2>
                <p className="text-gray-300 mb-6">
                  Welcome to the Sqoolr community! Join discussions, share experiences, and collaborate with other education professionals.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-sqoolr-mint text-sqoolr-navy px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Join Now
                </Link>
              </div>
              <div className="relative">
                <img
                  src="/meeting-room.jpg"
                  alt="Community Meeting"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-sqoolr-mint rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sqoolr-mint rounded-full opacity-20 animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
