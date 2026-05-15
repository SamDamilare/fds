import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Podcast } from "./components/Podcast";
import { Contact } from "./components/Contact";
import { Assessment } from "./components/Assessment";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },
      { path: "podcast", Component: Podcast },
      { path: "contact", Component: Contact },
      { path: "assessment", Component: Assessment },
      { path: "*", Component: NotFound },
    ],
  },
]);
