import { html } from "./useHtml";
import { getUser } from "./store";

export const Header = (loggedIn) => {
  {
    let presentLink = location.pathname;
    return html`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    ${loggedIn !== null
        ? html` <nav class="bg-white shadow-md p-2 sticky top-14">
          <ul class="flex justify-around">
            <li>
              <a
                href="/"
                class=${presentLink === "/" ? "text-blue-600" : "text-gray-600"}
                >홈</a
              >
            </li>
            <li>
              <a
                href="/profile"
                class=${presentLink === "/profile"
            ? "text-blue-600"
            : "text-gray-600"}
                >프로필</a
              >
            </li>
            <li><a id="logout" href="/login" class="text-gray-600">로그아웃</a></li>
          </ul>
        </nav>`
        : html` <nav class="bg-white shadow-md p-2 sticky top-14">
          <ul class="flex justify-around">
            <li>
              <a
                href="/"
                class=${presentLink === "/" ? "text-blue-600" : "text-gray-600"}
                >홈</a
              >
            </li>

            <li><a href="/login" class="text-gray-600">로그인</a></li>
          </ul>
        </nav>`}
  `;
  }
};
