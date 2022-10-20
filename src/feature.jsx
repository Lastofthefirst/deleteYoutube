import step1 from "./assets/step1.png";
import step2 from "./assets/step2.png";


function Feature() {
  return (
    <div class="overflow-hidden relative pt-16 pb-32 text-gray-800 bg-yellow-500">
      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div class="px-4 mx-auto max-w-xl sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span class="flex justify-center items-center w-12 h-12 bg-orange-600 rounded-md">
                  <svg
                    class="w-6 h-6 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                    />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-gray-800">
                  Step 1: Download the shortcut and save it. It will then be added to your shortcuts app. <i class="p-1 bg-yellow-200 rounded-md">Halfway there</i>
                </h2>
                <p class="mt-4 text-lg text-gray-500">
                  Older operating systems may have to allow "untrusted shortcuts" from the settings menu.
                </p>
                <div class="mt-6">
                  <a
                    href="https://www.icloud.com/shortcuts/24ee13ada44b48f78e0fe0186f50bb1a"
                    class="inline-flex px-4 py-2 text-base font-medium text-orange-200 bg-orange-600 rounded-md border border-transparent shadow-sm hover:bg-orange-700"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
           
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                class="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={step1}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-24">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div class="px-4 mx-auto max-w-xl sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span class="flex justify-center items-center w-12 h-12 bg-orange-600 rounded-md">
                  <svg
                    class="w-6 h-6 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-gray-800">
                  Step 2: From the youtube video you want to watch open the share menu and find <i class="p-1 bg-yellow-200 rounded-md">Remove Youtube</i>.
                </h2>
                <p class="mt-4 text-lg text-gray-500">
                  Now enjoy your video from the ad-free, untracked comfort of Invidious.
                </p>
                <div class="mt-6">
                  <a
                    href="#https://www.youtube.com/watch?v=bvFybxTJq8g"
                    class="inline-flex px-4 py-2 text-base font-medium text-orange-200 bg-orange-600 rounded-md border border-transparent shadow-sm hover:bg-orange-700"
                  >
                    Give it a whirl
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
             <a href="https://www.youtube.com/watch?v=bvFybxTJq8g">

              <img
                class="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={step2}
                alt="Customer profile user interface"
                />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
