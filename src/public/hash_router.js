import { MainPage } from "../components/MainPage";
import { LoginPage } from "../components/LoginPage";
import { ProfilePage } from "../components/ProfilePage.js";
import { ErrorPage } from "../components/ErrorPage.js";
import { getUser, removeUser } from "../common/store.js";

export const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

export const Router = {
  render: () => {
    const root = document.getElementById("root");
    const currentUser = getUser();
    let path = location.hash.replace("#", "") || "/";
    const page = routes[path] || ErrorPage;
    root.innerHTML = page.render();

    if (page.afterRender) {
      page.afterRender();
    }
    if (path === "/profile" && !currentUser) {
      location.hash = "#/login";
      return;
    }

    document.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.id === "logout") {
          removeUser();
        }
        const targetPath = a.getAttribute("href");
        location.hash = `#${targetPath}`;
      });
    });
  },
  navigate: (path) => {
    location.hash = `#${path}`;
  },
};
