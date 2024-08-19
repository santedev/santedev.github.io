const userLang = navigator.language || navigator.languages[0];
/**
 * @type {() => string}
 * @description Lang()uage from the browser can be either `es` or `en`
 * @default "es"
 */
const Lang = () => (userLang.startsWith("es") ? "es" : "en");

$(document).ready(function () {
  $(".title-header h1").text(
    Lang() === "es" ? "BIENVENIDO A MI PORTAFOLIO" : "WELCOME TO MY PORTFOLIO"
  );
  document.title = Lang() === "es" ? "Portafolio" : "Portfolio";
});

/**
 * @type {() => string}
 * @description Url that directs to my github profile
 * @default "https://github.com/santedev/"
 */
const GithubProfilePath = () => "https://github.com/santedev/";
const urlDrive = "https://drive.google.com/uc?export=download&id=";
const urlEN = "1x5GtkIgw1MO9L2c1kSELWanD7W5nXsyF";
const urlES = "1z32iG9ALR5B1dsKRDvT-5d8gRWsWIZKJ";

const $copyPasteSvg = `<svg
                       class="copy-paste-icon cursor-pointer"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                       tabindex="0"                       
                      ><path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" /> 
                       <path d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z" />
                      </svg>`;

const listIconsSvg = [
  "go",
  "linux",
  "javascript",
  "postgresql",
  "tailwind",
  "typescript",
  "docker",
  "jquery",
];

const $bio = `<span class="paragraph muted">${
  Lang() === "es"
    ? "Estudiante de ingeniería de software, Dedicado en contribuir a proyectos excepcionales."
    : "Software engineering student, committed to work on great projects."
}</span>`;

/** @returns {HTMLElement} */
const $SectionBio = function () {
  const $SectionBio =
    $(`<section class="section-1 w-fit flex flex-col lg:flex-row justify-center section-gap">
      <div
        class="bio w-fit px-3-sm flex flex-col items-center justify-center bg-blueSolid"
      >
        <div class="pfp-container mb-1-md">
          <img src="dist/img/me.webp" alt="me" />
        </div>

        <div class="text-bio-container flex flex-col items-center mb-2">
          <h2 class="mb-2 text-center font-semibold">SANTIAGO CORTES</h2>
          <p class="my-bio text-center">
            ${$bio}
            <br />
            <br />
            <span class="muted flex items-center gap-2">
             sanev.santiago@gmail.com
             ${$copyPasteSvg}
            </span>
            <span class="muted flex items-center gap-2">
             +57 3229016911
             ${$copyPasteSvg}
            </span>
            <a class="muted flex items-center gap-1" href="https://github.com/santedev">
              santedev
              <img
                class="github-icon ml-1"
                src="dist/img/github.svg"
                alt="icon github"
              />
            </a>
          </p>
        </div>
      </div>
      <div class="section-gap w-full md:w-fit flex flex-col">
        <div class="tools-sub-section w-full mx-auto">
          <h2 class="mb-2 text-center font-semibold">${
            Lang() === "es" ? "MI STACK" : "MY STACK"
          }</h2>
          <div class="icon-tools-container flex flex-wrap justify-center gap-2">
          ${listIconsSvg
            .map(
              (icon) => `
            <span>
             <img src="dist/img/${icon}-icon.svg" alt="${icon} icon" />
            </span>
           `
            )
            .join("")}
          </div>
        </div>
        <div
          class="cv-sub-section w-full bg-blueSolid flex flex-col items-center gap-4 p-4"
        >
          <h2 class="font-semibold">${
            Lang() === "es" ? "CURRÍCULO?" : "NEED MY CV?"
          }</h2>
          <a
            href="${
              Lang() === "es" ? `${urlDrive}${urlES}` : `${urlDrive}${urlEN}`
            }"
            download="cv_santiago_cortes.pdf"
            class="btn btn-primary"
            >${Lang() === "es" ? "descargar cv" : "download cv"}</a
          >
        </div>
      </div>
     </section>`)[0];
  $($SectionBio)
    .find(".copy-paste-icon")
    .on("click", function (event) {
      copyCLipboard(event, this);
    });
  return $SectionBio;
};

/** @param {string} projectName @return {string} */
const _githubSvg = function (projectName) {
  return `<svg
          viewBox="0 0 61 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="cursor-pointer"
          id="${projectName}-project">
          <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.5 2.39203C14.8686 2.39203 2.19312 15.0647 2.19312 30.6989C2.19312 43.2061 10.3039 53.8162 21.5511 57.5597C22.9653 57.8222 23.4847 56.9456 23.4847 56.198C23.4847 55.523 23.4584 53.2931 23.4462 50.9278C15.5712 52.6402 13.9095 47.588 13.9095 47.588C12.6219 44.3161 10.7666 43.4461 10.7666 43.4461C8.1978 41.6892 10.9601 41.7258 10.9601 41.7258C13.8022 41.925 15.2994 44.6428 15.2994 44.6428C17.8241 48.9694 21.9214 47.7188 23.5367 46.9959C23.7908 45.1664 24.5244 43.9172 25.3339 43.2103C19.0466 42.4955 12.4367 40.0678 12.4367 29.2214C12.4367 26.1309 13.543 23.6058 15.3537 21.623C15.0594 20.9105 14.0905 18.0314 15.6275 14.1323C15.6275 14.1323 18.0041 13.3716 23.4134 17.0339C25.6719 16.4062 28.0939 16.0908 30.5 16.08C32.9047 16.0908 35.3281 16.4053 37.5908 17.033C42.9936 13.3706 45.3673 14.1314 45.3673 14.1314C46.9081 18.03 45.9392 20.9095 45.6453 21.622C47.4603 23.6048 48.5586 26.13 48.5586 29.2205C48.5586 40.0927 41.9366 42.4861 35.6333 43.1873C36.6491 44.0658 37.5537 45.7889 37.5537 48.4294C37.5537 52.2169 37.5209 55.2652 37.5209 56.1975C37.5209 56.9508 38.0309 57.8334 39.4653 57.5555C50.7059 53.8083 58.8073 43.2014 58.8073 30.6989C58.8069 15.0656 46.1328 2.39203 30.5 2.39203Z"
          />
          <path
          d="M12.9144 43.034C12.852 43.1747 12.6308 43.2169 12.4292 43.1208C12.223 43.0289 12.1081 42.8372 12.1747 42.6961C12.2356 42.5508 12.4573 42.5109 12.6622 42.608C12.8684 42.7003 12.9856 42.8939 12.9139 43.0345L12.9144 43.034ZM14.0609 44.3133C13.9264 44.4384 13.6625 44.3803 13.4834 44.182C13.2978 43.9851 13.2631 43.7212 13.4005 43.5942C13.5401 43.4695 13.7961 43.5286 13.9817 43.7254C14.1664 43.9251 14.203 44.1867 14.0614 44.3137L14.0609 44.3133ZM15.1775 45.9431C15.0041 46.064 14.72 45.9511 14.5447 45.6994C14.3712 45.4472 14.3712 45.1448 14.5494 45.0244C14.7242 44.9034 15.0041 45.0126 15.1822 45.262C15.3547 45.5175 15.3547 45.8203 15.1775 45.9431ZM16.7061 47.5186C16.5514 47.6897 16.2205 47.6437 15.9786 47.4108C15.7316 47.1825 15.6626 46.8576 15.8178 46.687C15.9753 46.5155 16.3076 46.5633 16.5509 46.7948C16.798 47.0226 16.8725 47.348 16.707 47.5181L16.7061 47.5186ZM18.8155 48.4331C18.7466 48.6548 18.4287 48.7556 18.1076 48.6609C17.7875 48.5639 17.578 48.3047 17.6436 48.0806C17.7092 47.857 18.0294 47.7525 18.3523 47.8533C18.6725 47.9498 18.882 48.2076 18.8155 48.4331ZM21.1325 48.6023C21.1405 48.8358 20.8686 49.0289 20.5325 49.0336C20.1936 49.0415 19.9194 48.8522 19.9161 48.6225C19.9161 48.3867 20.1823 48.1959 20.5208 48.1894C20.8569 48.1833 21.133 48.3708 21.133 48.6019L21.1325 48.6023ZM23.2878 48.2358C23.3281 48.4631 23.0942 48.697 22.76 48.7594C22.4319 48.8203 22.1272 48.6787 22.085 48.4533C22.0447 48.2198 22.2828 47.9859 22.6109 47.9254C22.9456 47.8678 23.2456 48.0047 23.2878 48.2358Z"
          />
         </svg>`;
};

/** @type {Project[]} */
const projects = [
  {
    ProjectLink: GithubProfilePath() + "gothBase",
    ProjectName: "gothBase",
    Tools: ["Go", "Docker"],
    Description:
      Lang() === "es"
        ? "Creación automatizada de proyectos en Golang con una herramienta CLI. Incluye las herramientas de desarrollo Air y Makefile. Integra la biblioteca de autenticación Goth y el stack Gotth."
        : "Automated Golang project creation with a CLI tool. Includes Air and Makefile dev tools. It integrates the Goth auth library and the Gotth stack.",
  },
  {
    ProjectLink: "https://joblist-58dx.onrender.com",
    ProjectName: "jobList",
    Tools: [
      "Go",
      "JavaScript",
      "Postgresql",
      "Docker",
      "Jquery",
      "Htmx",
      "Templ",
    ],
    Description:
      Lang() === "es"
        ? "Aplicación web donde puedes encontrar empleos con una sola consulta, hecha con Golang y HTMX."
        : "WebApp where you can find jobs with one query, made with Golang and Htmx.",
  },
  {
    ProjectLink: "https://find-it-delta.vercel.app",
    ProjectName: "find-it",
    Tools: ["Go", "JavaScript", "Docker", "Vue"],
    Description:
      Lang() === "es"
        ? "Aplicación web para encontrar productos fácilmente en las siguientes tiendas: MercadoLibre, AliExpress, Amazon. Hecha con Golang (Colly para web scraping) en el backend y Nuxt (Vue) en el frontend."
        : "Web app to easily find products from the following stores: MercadoLibre, AliExpress, Amazon. Made with Golang (Colly for web scraping) for the backend and Nuxt (Vue) for the frontend.",
  },
  {
    ProjectLink: "https://santedev.github.io/gallery/",
    ProjectName: "gallery",
    Tools: ["JavaScript", "Firebase", "Python", "Vue"],
    Description:
      Lang() === "es"
        ? "Una galería de arte virtual que contiene muchas obras de diferentes artistas, utilizando Vue, Python (para web scraping) y Firebase Realtime Database."
        : "A virtual art gallery containing lot of works from different artists, using Vue, Python (for web scraping) and Firebase Realtime Database.",
  },
];

/**
 * @param {Project} project
 * @return {HTMLElement}
 */
const _generateProjectHTML = function (project) {
  const $project = $(`
 <a
   href="${project.ProjectLink}"
   class="project-container bg-blueSolid text-white rounded-lg shadow-lg flex flex-col"
 >
   <div>
     <div class="relative project-image-container w-fit">
       <div class="absolute top-0 right-0">
         <h3 class="font-semibold">${project.ProjectName}</h3>
         ${_githubSvg(project.ProjectName)}
       </div>
       <img src="dist/img/${project.ProjectName}-screenshot.png" alt="${
    project.ProjectName
  } image" class="w-full h-auto rounded-lg" />
     </div>
     <div class="mt-2 mb-1 flex flex-wrap container-tags">
       ${project.Tools.map(
         (tool) => `
          <span class="inline-flex items-center font-light gap-1 text-sm">
           <span class="bg-${tool} w-3 h-3 rounded-full"></span> 
           <span class="font-semibold">${tool}</span>
          </span>
        `
       ).join("")}
     </div>
   </div>
   <div>
     <p class="muted">
       ${project.Description}
     </p>
   </div>
 </a>`)[0];
  $($project)
    .find(`#${project.ProjectName}-project`)
    .on("click", function (event) {
      redirectToGithubRepo(event, project.ProjectName);
    });
  return $project;
};

/** @return {HTMLElement} */
const $SectionProjects = function () {
  const $sectionProjects =
    $(`<section class="section-2 w-fit flex flex-wrap justify-center gap-6">
  </section>`)[0];

  projects.forEach((p) => {
    const proj = _generateProjectHTML(p);

    $($sectionProjects).append(proj);
  });

  return $sectionProjects;
};

const $arrowSendSvg = `
 <svg
   width="25"
   height="24"
   viewBox="0 0 25 24"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
 >
   <path
     d="M22 12.2036L2 2L4.25 12.2036M22 12.2036L2 22L4.25 12.2036M22 12.2036H4.25"
     class="arrow-send-icon"
     stroke-width="2"
   />
 </svg>
`;

/** @return {HTMLElement} */
const $SectionFormSendMessage = function () {
  const $section = $(`
 <section class="section-3 w-fit flex flex-col gap-4">
  <div class="bg-blueSolid w-fit form-container">
    <h2 class="mb-4 text-xl font-semibold">
      ${Lang() === "es" ? "ENVIAME UN MENSAJE" : "SEND ME A MESSAGE"}
    </h2>
    <form
      method="POST"
      class="flex items-center w-full"
    >
      <input
        type="hidden"
        name="access_key"
        value="9c5661db-cc79-49fe-96dd-ce697e93bb96"
      />
      <div class="space-y-4 w-full">
        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-2 w-full">
            <label class="text-sm font-medium">${
              Lang() === "es" ? "Nombre" : "Name"
            }</label>
            <input
              type="text"
              name="name"
              placeholder="${Lang() === "es" ? "Tu nombre" : "Your name"}"
              required
              class="border text-gray-800 outline-none border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label class="text-sm font-medium">${
              Lang() === "es" ? "Correo electrónico" : "Email"
            }</label>
            <input
              type="email"
              name="email"
              placeholder="${
                Lang() === "es" ? "Tu correo electrónico" : "Your email"
              }"
              required
              class="border text-gray-800 outline-none border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2 mb-4">
            <label class="text-sm font-medium">${
              Lang() === "es" ? "Tu mensaje" : "Your message"
            }</label>
            <textarea
              name="message"
              placeholder="${Lang() === "es" ? "Tu mensaje" : "Your message"}"
              required
              class="border text-gray-800 outline-none border-gray-300 rounded px-3 py-2"
            ></textarea>
          </div>
          <button type="submit" class="btn-submit bg-muted mx-auto w-fit rounded px-4 py-2 flex items-center gap-2">
            <span>${Lang() === "es" ? "Enviar" : "Send"}</span>
            ${$arrowSendSvg}
          </button>
        </div>
      </div>
    </form>
  </div>
</section>
`)[0];
  $($section)
    .find("form")
    .on("submit", function (event) {
      sendMessage(event, this);
    });
  return $section;
};

/** @return {HTMLElement} */
const $SectionLastPart = function () {
  return $(`
 <section class="section-4 w-fit flex flex-col-reverse lg:flex-row section-gap">
   <div class="github-container w-fit font-semibold">
     <h2>${
       Lang() === "es"
         ? "EL REPOSITORIO DE ESTE SITIO"
         : "THE REPOSITORY OF THIS SITE"
     }</h2>
     <a
       href="https://github.com/santedev/santedev.github.io"
       class="github-btn mx-auto"
       ><span class="s-font">github</span>
       <svg
          viewBox="0 0 61 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="cursor-pointer">
          <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.5 2.39203C14.8686 2.39203 2.19312 15.0647 2.19312 30.6989C2.19312 43.2061 10.3039 53.8162 21.5511 57.5597C22.9653 57.8222 23.4847 56.9456 23.4847 56.198C23.4847 55.523 23.4584 53.2931 23.4462 50.9278C15.5712 52.6402 13.9095 47.588 13.9095 47.588C12.6219 44.3161 10.7666 43.4461 10.7666 43.4461C8.1978 41.6892 10.9601 41.7258 10.9601 41.7258C13.8022 41.925 15.2994 44.6428 15.2994 44.6428C17.8241 48.9694 21.9214 47.7188 23.5367 46.9959C23.7908 45.1664 24.5244 43.9172 25.3339 43.2103C19.0466 42.4955 12.4367 40.0678 12.4367 29.2214C12.4367 26.1309 13.543 23.6058 15.3537 21.623C15.0594 20.9105 14.0905 18.0314 15.6275 14.1323C15.6275 14.1323 18.0041 13.3716 23.4134 17.0339C25.6719 16.4062 28.0939 16.0908 30.5 16.08C32.9047 16.0908 35.3281 16.4053 37.5908 17.033C42.9936 13.3706 45.3673 14.1314 45.3673 14.1314C46.9081 18.03 45.9392 20.9095 45.6453 21.622C47.4603 23.6048 48.5586 26.13 48.5586 29.2205C48.5586 40.0927 41.9366 42.4861 35.6333 43.1873C36.6491 44.0658 37.5537 45.7889 37.5537 48.4294C37.5537 52.2169 37.5209 55.2652 37.5209 56.1975C37.5209 56.9508 38.0309 57.8334 39.4653 57.5555C50.7059 53.8083 58.8073 43.2014 58.8073 30.6989C58.8069 15.0656 46.1328 2.39203 30.5 2.39203Z"
          />
          <path
          d="M12.9144 43.034C12.852 43.1747 12.6308 43.2169 12.4292 43.1208C12.223 43.0289 12.1081 42.8372 12.1747 42.6961C12.2356 42.5508 12.4573 42.5109 12.6622 42.608C12.8684 42.7003 12.9856 42.8939 12.9139 43.0345L12.9144 43.034ZM14.0609 44.3133C13.9264 44.4384 13.6625 44.3803 13.4834 44.182C13.2978 43.9851 13.2631 43.7212 13.4005 43.5942C13.5401 43.4695 13.7961 43.5286 13.9817 43.7254C14.1664 43.9251 14.203 44.1867 14.0614 44.3137L14.0609 44.3133ZM15.1775 45.9431C15.0041 46.064 14.72 45.9511 14.5447 45.6994C14.3712 45.4472 14.3712 45.1448 14.5494 45.0244C14.7242 44.9034 15.0041 45.0126 15.1822 45.262C15.3547 45.5175 15.3547 45.8203 15.1775 45.9431ZM16.7061 47.5186C16.5514 47.6897 16.2205 47.6437 15.9786 47.4108C15.7316 47.1825 15.6626 46.8576 15.8178 46.687C15.9753 46.5155 16.3076 46.5633 16.5509 46.7948C16.798 47.0226 16.8725 47.348 16.707 47.5181L16.7061 47.5186ZM18.8155 48.4331C18.7466 48.6548 18.4287 48.7556 18.1076 48.6609C17.7875 48.5639 17.578 48.3047 17.6436 48.0806C17.7092 47.857 18.0294 47.7525 18.3523 47.8533C18.6725 47.9498 18.882 48.2076 18.8155 48.4331ZM21.1325 48.6023C21.1405 48.8358 20.8686 49.0289 20.5325 49.0336C20.1936 49.0415 19.9194 48.8522 19.9161 48.6225C19.9161 48.3867 20.1823 48.1959 20.5208 48.1894C20.8569 48.1833 21.133 48.3708 21.133 48.6019L21.1325 48.6023ZM23.2878 48.2358C23.3281 48.4631 23.0942 48.697 22.76 48.7594C22.4319 48.8203 22.1272 48.6787 22.085 48.4533C22.0447 48.2198 22.2828 47.9859 22.6109 47.9254C22.9456 47.8678 23.2456 48.0047 23.2878 48.2358Z"
          />
      </svg>
     </a>
   </div>
   <div class="bg-blueSolid w-fit english-container">
     <div class="flex flex-col sub-container lg:flex-row align-center mb-1">
       <h2 class="text-center-lg font-semibold">${
         Lang() === "es" ? "NIVEL DE INGLÉS" : "MY ENGLISH SKILLS"
       }</h2>
       <h1 class="B2 font-semibold my-auto">B2</h1>
     </div>
     <p class="text-center muted">
       ${
         Lang() === "es"
           ? "He desarrollado un nivel bueno en inglés además he estudiado en el Colombo Americano hasta el nivel B2."
           : "I have developed a good level of English and I studied at Colombo Americano, where I graduated at the B2 level."
       }
     </p>
   </div>
 </section>            
`)[0];
};

/**
 * @typedef {Object} Project
 * @property {string} ProjectLink
 * @property {string} ProjectName
 * @property {string} Description
 * @property {string[]} Tools
 */

/**
 * @typedef {JQuery<HTMLElement>} $Element
 * @description Represents a jQuery object containing HTML elements
 */

/**
 * @typedef {JQuery<HTMLElement[]>} $Elements
 * @description Represents a jQuery object containing multiple HTML elements
 */

/**
 * @typedef {JQuery} $
 * @description Represents any jQuery object
 */

/**
 * @typedef {JQuery.Deferred} $Deferred
 * @description Represents a jQuery Deferred object for managing asynchronous events
 */

/**
 * @typedef {JQuery.Promise} $Promise
 * @description Represents a jQuery Promise object, typically returned by deferred operations
 */

/**
 * @typedef {JQuery.Event} $Event
 * @description Represents a jQuery event object
 */
