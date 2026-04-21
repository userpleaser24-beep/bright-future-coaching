import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const HomePage = lazy(() => import("./pages/Home"));
const CoursesPage = lazy(() => import("./pages/Courses"));
const NeetPage = lazy(() => import("./pages/CourseNeet"));
const IitJeePage = lazy(() => import("./pages/CourseIitJee"));
const CeePage = lazy(() => import("./pages/CourseCee"));
const BoardPage = lazy(() => import("./pages/CourseBoard"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-4 border-primary border-t-accent rounded-full animate-spin" />
  </div>
);

const wrap = (Component: React.ComponentType) => () => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: wrap(HomePage),
});
const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses",
  component: wrap(CoursesPage),
});
const neetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses/neet",
  component: wrap(NeetPage),
});
const iitJeeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses/iit-jee",
  component: wrap(IitJeePage),
});
const ceeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses/cee",
  component: wrap(CeePage),
});
const boardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses/board",
  component: wrap(BoardPage),
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: wrap(AboutPage),
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: wrap(ContactPage),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  coursesRoute,
  neetRoute,
  iitJeeRoute,
  ceeRoute,
  boardRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
