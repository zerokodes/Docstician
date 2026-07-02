import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

// Home is the entry point for the vast majority of visitors, so it's the only
// page bundled eagerly. Everything else is loaded on demand to keep the
// initial JS payload small for a marketing/waitlist page.
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-teal-400"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/how-it-works"
          element={
            <Suspense fallback={<RouteFallback />}>
              <HowItWorksPage />
            </Suspense>
          }
        />
        <Route
          path="/privacy"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Privacy />
            </Suspense>
          }
        />
        <Route
          path="/terms"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Terms />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
