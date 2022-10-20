import shortcut from "./assets/shortcuts.png";
import lantern from "./assets/Lantern.svg";
import Feature from "./feature";

function App() {
  return (
    <div class="flex-1 bg-gray-900">

      <header class="relative"></header>

      <main class="">
        <div class="flex-1 pt-10 h-screen bg-gray-900 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div class="px-4 mx-auto max-w-md sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div class="lg:py-24">
                  <a
                    href="https://reflect.ridvan.org/removeyoutube"
                    class="inline-flex items-center p-1 pr-2 text-white bg-black rounded-full hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                  >
                    <span class="rounded-full bg-yellow-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      3 second code
                    </span>
                    <span class="ml-4 text-sm">by Ridván.org</span>

                    <svg
                      class="ml-2 w-5 h-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <h1 class="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="block">A better way to</span>
                    <span class="block text-yellow-400">Watch Videos</span>
                  </h1>
                  <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Redirect youtube links with the share menu. No Ads. No tracking. Download video or audio. Autoplay off by default.
                  </p>
                  <div class="mt-10 sm:mt-12">
                    <form action="#" class="sm:mx-auto sm:max-w-xl lg:mx-0">
                      <div class="sm:flex">
                        <a href="https://www.icloud.com/shortcuts/24ee13ada44b48f78e0fe0186f50bb1a" class="inline-flex items-center py-2 px-4 rounded-lg space-x-2 text-white hover:shadow-2xl bg-[#1D1F57]">
                          <img class="w-9 h-9" src={shortcut} />
                          <div class="px-2 font-light leading-none">
                            Download the <br />
                            <b class="text-3xl font-semibold">Shortcut</b>
                          </div>
                        </a>
                       
                      </div>
                      <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                        Remove Youtube uses{" "}
                        <a href="https://invidious.io/" class="font-medium text-yellow-400">
                          Invidious
                        </a> and the particular server being used can be manually edited once the shortcut is downloaded.
                        
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt-12 -mb-16 bg-black-400 sm:-mb-48 lg:relative lg:m-0">
                <div class="px-4 mx-auto max-w-md sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <img
                    class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={lantern}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Feature />
      </main>
    </div>
  );
}

export default App;
