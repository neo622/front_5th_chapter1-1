import { MainPage } from "../components/MainPage";
import { LoginPage } from "../components/LoginPage";
import { ProfilePage } from "../components/ProfilePage.js";
import { ErrorPage } from "../components/ErrorPage.js";
import {
  getUser,
  setUser,
  removeUser,
  updateProfile,
} from "../common/store.js";

export const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

export const Router = {
  render: () => {
    document.body.innerHTML = '<div id="root"></div>';
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

    // 이벤트 위임 방식으로 변경
    root.addEventListener("click", (e) => {
      if (e.target.matches("a")) {
        e.preventDefault();
        if (e.target && e.target.id === "logout") {
          removeUser();
          Router.navigate("/login");
          return;
        }
        const targetPath = e.target.getAttribute("href");
        history.pushState(null, "", targetPath);
        Router.render();
      }
    });

    root.addEventListener("submit", (e) => {
      if (e.target && e.target.id === "login-form") {
        e.preventDefault();
        let userName = document.getElementById("username").value;
        console.log(userName); //ok
        // localStorage에 정보 저장
        setUser(userName);
        Router.navigate("/login");
      }
      if (e.target && e.target.id === "profile-form") {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let bio = document.getElementById("bio").value;
        console.log(email, bio);
        updateProfile(username, email, bio);
      }
    });
  },
  navigate: (path) => {
    history.pushState(null, "", path);
    Router.render();
  },
};
