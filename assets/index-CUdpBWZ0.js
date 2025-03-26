(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const n=(t,...o)=>t.reduce((l,r,e)=>l+r+(o[e]||""),""),u=t=>{{const o=location.pathname,l=r=>r===o?"text-blue-600 font-bold":"text-gray-600";return n`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
      ${t!==null?n` <nav class="bg-white shadow-md p-2 sticky top-14">
            <ul class="flex justify-around">
              <li>
                <a href="/" class="${l("/")}">홈</a>
              </li>
              <li>
                <a href="/profile" class="${l("/profile")}">프로필</a>
              </li>
              <li>
                <a id="logout" href="#" class="text-gray-600">로그아웃</a>
              </li>
            </ul>
          </nav>`:n` <nav class="bg-white shadow-md p-2 sticky top-14">
            <ul class="flex justify-around">
              <li>
                <a href="/" class="${l("/")}">홈</a>
              </li>

              <li><a href="/login" class="text-gray-600">로그인</a></li>
            </ul>
          </nav>`}
    `}},m=n`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,d=()=>window.localStorage.getItem("user")||null,b=t=>{window.localStorage.setItem("user",JSON.stringify({username:t,email:"",bio:""}))},p=(t,o,l)=>{window.localStorage.setItem("user",JSON.stringify({username:t,email:o,bio:l}))},f=()=>{window.localStorage.removeItem("user")},g={render:()=>{const t=d();return n`
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${u(t)}
          <main class="p-4">
            <div class="mb-4 bg-white rounded-lg shadow p-4">
              <textarea
                class="w-full p-2 border rounded"
                placeholder="무슨 생각을 하고 계신가요?"
              ></textarea>
              <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
                게시
              </button>
            </div>

            <div class="space-y-4">
              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img
                    src="https://placehold.co/40"
                    alt="프로필"
                    class="rounded-full mr-2"
                  />
                  <div>
                    <p class="font-bold">홍길동</p>
                    <p class="text-sm text-gray-500">5분 전</p>
                  </div>
                </div>
                <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img
                    src="https://placehold.co/40"
                    alt="프로필"
                    class="rounded-full mr-2"
                  />
                  <div>
                    <p class="font-bold">김철수</p>
                    <p class="text-sm text-gray-500">15분 전</p>
                  </div>
                </div>
                <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img
                    src="https://placehold.co/40"
                    alt="프로필"
                    class="rounded-full mr-2"
                  />
                  <div>
                    <p class="font-bold">이영희</p>
                    <p class="text-sm text-gray-500">30분 전</p>
                  </div>
                </div>
                <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img
                    src="https://placehold.co/40"
                    alt="프로필"
                    class="rounded-full mr-2"
                  />
                  <div>
                    <p class="font-bold">박민수</p>
                    <p class="text-sm text-gray-500">1시간 전</p>
                  </div>
                </div>
                <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                  <img
                    src="https://placehold.co/40"
                    alt="프로필"
                    class="rounded-full mr-2"
                  />
                  <div>
                    <p class="font-bold">정수연</p>
                    <p class="text-sm text-gray-500">2시간 전</p>
                  </div>
                </div>
                <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
                <div class="mt-2 flex justify-between text-gray-500">
                  <button>좋아요</button>
                  <button>댓글</button>
                  <button>공유</button>
                </div>
              </div>
            </div>
          </main>
          ${m}
        </div>
      </div>
    `},afterRender:()=>{}},v={render:()=>n`
      <main class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">
            항해플러스
          </h1>
          <form id="login-form">
            <div class="mb-4">
              <input
                id="username"
                type="text"
                placeholder="사용자 이름"
                class="w-full p-2 border rounded"
              />
            </div>
            <div class="mb-6">
              <input
                id="pass"
                type="password"
                placeholder="비밀번호"
                class="w-full p-2 border rounded"
              />
            </div>
            <button
              id="login"
              type="submit"
              class="w-full bg-blue-600 text-white p-2 rounded font-bold"
            >
              로그인
            </button>
          </form>
          <div class="mt-4 text-center">
            <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
          </div>
          <hr class="my-6" />
          <div class="text-center">
            <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">
              새 계정 만들기
            </button>
          </div>
        </div>
      </main>
    `},x={render:()=>{const t=JSON.parse(d());return console.log(t),n`
      <div id="root">
        <div class="bg-gray-100 min-h-screen flex justify-center">
          <div class="max-w-md w-full">
            ${u(!0)}
            <main class="p-4">
              <div class="bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                  내 프로필
                </h2>
                <form id="profile-form">
                  <div class="mb-4">
                    <label
                      for="username"
                      class="block text-gray-700 text-sm font-bold mb-2"
                      >사용자 이름</label
                    >
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value="${(t==null?void 0:t.username)||""}"
                      class="w-full p-2 border rounded"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      for="email"
                      class="block text-gray-700 text-sm font-bold mb-2"
                      >이메일</label
                    >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value="${(t==null?void 0:t.email)||""}"
                      class="w-full p-2 border rounded"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="bio"
                      class="block text-gray-700 text-sm font-bold mb-2"
                      >자기소개</label
                    >
                    <textarea
                      id="bio"
                      name="bio"
                      rows="4"
                      class="w-full p-2 border rounded"
                    >
                    ${(t==null?void 0:t.bio)||""}</textarea
                    >
                  </div>
                  <button
                    type="submit"
                    class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                  >
                    프로필 업데이트
                  </button>
                </form>
              </div>
            </main>
            ${m}
          </div>
        </div>
      </div>
    `}},h={render:()=>n`
      <main class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div
          class="bg-white p-8 rounded-lg shadow-md w-full text-center"
          style="max-width: 480px"
        >
          <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
          <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
          <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
          <p class="text-gray-600 mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
          <a
            href="/"
            class="bg-blue-600 text-white px-4 py-2 rounded font-bold"
          >
            홈으로 돌아가기
          </a>
        </div>
      </main>
    `},y={"/":g,"/login":v,"/profile":x},a={render:()=>{document.body.innerHTML='<div id="root"></div>';const t=document.getElementById("root"),o=d();let l=window.location.pathname;const r=y[l]||h;t.innerHTML=r.render(),r.afterRender&&r.afterRender(),l==="/profile"&&!o&&(history.replaceState(null,"","/login"),a.render()),l==="/login"&&o&&(history.replaceState(null,"","/"),a.render()),t.addEventListener("click",e=>{if(e.target.matches("a")){if(e.preventDefault(),e.target&&e.target.id==="logout"){f(),a.navigate("/login");return}const s=e.target.getAttribute("href");history.pushState(null,"",s),a.render()}}),t.addEventListener("submit",e=>{if(e.target&&e.target.id==="login-form"){e.preventDefault();let s=document.getElementById("username").value;console.log(s),b(s),a.navigate("/login")}if(e.target&&e.target.id==="profile-form"){e.preventDefault();let s=document.getElementById("username").value,i=document.getElementById("email").value,c=document.getElementById("bio").value;console.log(i,c),p(s,i,c)}})},navigate:t=>{history.pushState(null,"",t),a.render()}},w={init:()=>{a.render(),window.addEventListener("popstate",()=>{a.render()})}};w.init();
