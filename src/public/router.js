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
        const currentUser = getUser();
        let path = window.location.pathname;
        const page = routes[path] || ErrorPage;
        document.body.innerHTML = page.render();

        if (page.afterRender) {
            page.afterRender();
        }
        if (path === "/profile" && !currentUser) {
            history.replaceState(null, "", "/login");
            Router.render();
        }

        document.querySelectorAll("a").forEach((a) => {
            a.addEventListener("click", (e) => {
                e.preventDefault();
                console.log(e.target.id);
                if (e.target.id === "logout") {
                    removeUser();
                };
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
