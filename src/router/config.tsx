import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Projects from "../pages/projects/page";
import ResidentialProjects from "../pages/projects/residential/page";
import InteriorProjects from "../pages/projects/interior/page";
import RenovationProjects from "../pages/projects/renovation/page";
import ConventionHallsProjects from "../pages/projects/convention-halls/page";
import CommercialProjects from "../pages/projects/commercial/page";
import IndustrialProjects from "../pages/projects/industrial/page";
import Credentials from "../pages/credentials/page";
import Contact from "../pages/contact/page";
import Reviews from "../pages/reviews/page";

// Placeholder components for other pages - will be implemented in Phase 2
function Services() {
  return (
    <div className="min-h-screen bg-archin-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl text-archin-cream mb-4">Services</h1>
        <p className="text-archin-gray">Coming Soon</p>
        <a href="/" className="text-archin-gold mt-4 inline-block">← Back to Home</a>
      </div>
    </div>
  );
}

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/residential",
    element: <ResidentialProjects />,
  },
  {
    path: "/projects/interior",
    element: <InteriorProjects />,
  },
  {
    path: "/projects/renovation",
    element: <RenovationProjects />,
  },
  {
    path: "/projects/convention-halls",
    element: <ConventionHallsProjects />,
  },
  {
    path: "/projects/commercial",
    element: <CommercialProjects />,
  },
  {
    path: "/projects/industrial",
    element: <IndustrialProjects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/credentials",
    element: <Credentials />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;