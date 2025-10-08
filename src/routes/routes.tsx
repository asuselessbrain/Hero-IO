import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import AppNotFound from "../components/shared/AppNotFound";
import pageNotFound from '../assets/images/error-404.png'
import InstalledApps from "../pages/InstalledApps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "/apps",
            element: <Apps />
        },
        {
            path: "/apps/:id",
            element: <AppDetails />
        },
        {
            path: "/installed-apps",
            element: <InstalledApps />
        }
    ]
  },
  {
    path: "*",
    element: <AppNotFound imag={pageNotFound} title="Oops, page not found!" subTitle="The page you are looking for is not available." btnText="Go Back!" link="/" minHight="min-h-screen" />
  }
]);