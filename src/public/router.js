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
    let path = window.location.pathname;
    const page = routes[path] || ErrorPage;
    root.innerHTML = page.render();

    if (page.afterRender) {
      page.afterRender();
    }
    if (path === "/profile" && !currentUser) {
      history.replaceState(null, "", "/login");
      Router.render();
    }
    if (path === "/login" && currentUser) {
      history.replaceState(null, "", "/");
      Router.render();
    }

    // document.querySelectorAll("a").forEach((a) => {
    //   a.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     console.log(e.target.id);
    //     if (e.target.id === "logout") {
    //       removeUser();
    //     }
    //     const targetPath = a.getAttribute("href");
    //     history.pushState(null, "", targetPath);
    //     Router.render();
    //   });
    // });

    // 이벤트 위임 방식으로 변경
    root.addEventListener("click", (e) => {
      if (e.target.matches("a")) {
        e.preventDefault();
        if (e.target.id === "logout") {
          removeUser();
        }
        const targetPath = a.getAttribute("href");
        history.pushState(null, "", targetPath);
        Router.render();
      }
    })
  },
  navigate: (path) => {
    history.pushState(null, "", path);
    Router.render();
  },
};
