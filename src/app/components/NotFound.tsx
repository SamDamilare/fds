import { Link } from "react-router";
import { Home, Search, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-neutral-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-[#e63946] mb-4">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Page Not Found</h1>
          <p className="text-lg text-neutral-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#e63946] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d62828] transition-all"
          >
            <Home className="size-5" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white border-2 border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-all"
          >
            <Search className="size-5" />
            Contact Us
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/about"
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
          >
            <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-[#1e3a5f] transition-colors">
              About
            </h3>
            <p className="text-sm text-neutral-600">Learn about Fisayo and his approach</p>
          </Link>
          <Link
            to="/blog"
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
          >
            <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-[#e63946] transition-colors">
              Blog
            </h3>
            <p className="text-sm text-neutral-600">Read insights on conflict resolution</p>
          </Link>
          <Link
            to="/assessment"
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
          >
            <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-[#1e3a5f] transition-colors">
              Assessment
            </h3>
            <p className="text-sm text-neutral-600">Take a free skills assessment</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
