import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import GlowOrb from "../components/ui/GlowOrb";

export function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-32">
      <GlowOrb className="left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2" color="teal" />
      <div className="container-page relative text-center">
        <p className="font-display text-7xl font-semibold text-gradient-accent sm:text-8xl">404</p>
        <h1 className="mt-6 font-display text-2xl font-semibold text-mist-50 sm:text-3xl">
          This page couldn't be found.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-mist-400">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
