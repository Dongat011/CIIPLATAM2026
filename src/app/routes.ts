import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import CoursePage from "./pages/CoursePage";
import MembershipsPage from "./pages/MembershipsPage";
import AffiliateDashboard from "./pages/AffiliateDashboard";
import AdminPanel from "./pages/AdminPanel";
import PostPurchase from "./pages/PostPurchase";
import NotFound from "./pages/NotFound";
import GeoMinaPage from "./pages/GeoMinaPage";
import BioMediPage from "./pages/BioMediPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "categoria/:slug", Component: CategoryPage },
      { path: "marca/ciif-latam", Component: CategoryPage },
      { path: "marca/geomina-latam", Component: GeoMinaPage },
      { path: "marca/biomedi", Component: BioMediPage },
      { path: "curso/:id", Component: CoursePage },
      { path: "membresias", Component: MembershipsPage },
      { path: "afiliado", Component: AffiliateDashboard },
      { path: "admin", Component: AdminPanel },
      { path: "compra-exitosa", Component: PostPurchase },
      { path: "*", Component: NotFound },
    ],
  },
]);
