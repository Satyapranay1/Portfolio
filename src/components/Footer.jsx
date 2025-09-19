export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Gradient Circles */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full opacity-30 animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center space-y-4">
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()} Satya Pranay. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-gray-400">
          <a
            href="https://linkedin.com"
            className="hover:text-blue-500 transform hover:scale-110 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            className="hover:text-gray-100 transform hover:scale-110 transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-blue-400 transform hover:scale-110 transition duration-300"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
