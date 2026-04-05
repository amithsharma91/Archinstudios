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
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
