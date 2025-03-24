import { MainPage } from "../components/MainPage";
import { LoginPage } from "../components/LoginPage";
import { ProfilePage } from "../components/ProfilePage.js";
import { ErrorPage } from "../components/ErrorPage.js";

export const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

export const Router = {
  render: () => {
    const path = window.location.pathname;
    const page = routes[path] || ErrorPage;

    document.body.innerHTML = page.render();

    if (page.afterRender) {
      page.afterRender();
    }

    document.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const targetPath = a.getAttribute("href");
        history.pushState(null, "", targetPath);
        Router.render();
      });
    });
  },
  navigate: (path) => {
    history.pushState(null, "", path);
    Router.render();
  },
};
