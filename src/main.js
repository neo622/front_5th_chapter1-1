import { MainPage } from "./components/MainPage";
import { LoginPage } from "./components/LoginPage";
import { ErrorPage } from "./components/ErrorPage";
import { ProfilePage } from "./components/ProfilePage";

const state = {
  loggedIn: false,
};

const App = () => {
  let target = window.location.pathname;
  if (target === "/") {
    return MainPage(state.loggedIn);
  } else if (target === "/login") {
    return LoginPage();
  } else if (target === "/profile") {
    return ProfilePage(state.loggedIn);
  } else {
    return ErrorPage();
  }
};

const render = () => {
  document.body.innerHTML = App();
  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.href.replace(location.origin, "");
      history.pushState(null, "", target);
      render();
    });
  });
};

render();

window.addEventListener("popstate", () => {
  render();
});
