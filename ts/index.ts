const userLang = navigator.language || navigator.languages[0];
const lang = userLang.startsWith("es") ? "es" : "en";

const titleHeader = document.querySelector(".title-header h1");
const inputInteractDOM = document.getElementById("input-interact-DOM");
const bioContent = document.querySelector(".my-bio .paragraph");
const toolsHeader = document.querySelector(".tools-sub-section h2");
const cvHeader = document.querySelector(".cv-sub-section h2");
const cvLink = document.querySelector(".cv-sub-section a");
const paragraphProjectChatApp = document.querySelector(".project-chatapp p");
const paragraphProjectBlanke = document.querySelector(".project-blanke p");
const formContainer = document.querySelector(".form-container");
const formHeader = formContainer?.querySelector("h2");
const nameLabel = formContainer?.querySelector(".nameLabel");
const nameInput = formContainer?.querySelector("#name");
const emailLabel = formContainer?.querySelector(".emailLabel");
const emailInput = formContainer?.querySelector("#email");
const messageLabel = formContainer?.querySelector(".messageLabel");
const messageTextarea = formContainer?.querySelector("#message");
const submitButton = formContainer?.querySelector("button span");
const englishSkillsContainer = document.querySelector(".english-container");
const englishSkillsHeader = englishSkillsContainer?.querySelector("h2");
const englishSkillsContent = englishSkillsContainer?.querySelector("p");
const githubHeader = document.querySelector(".github-container h2");

if (
  titleHeader instanceof HTMLElement &&
  inputInteractDOM instanceof HTMLElement &&
  bioContent instanceof HTMLElement
) {
  document.title = lang === "es" ? "Mi portafolio" : "My Portfolio";

  titleHeader.textContent =
    lang === "es" ? "BIENVENIDO A MI PORTAFOLIO" : "WELCOME TO MY PORTFOLIO";

  inputInteractDOM.setAttribute(
    "placeholder",
    lang === "es" ? 'selecciona "portafolio"' : 'select "portfolio"'
  );

  if (bioContent instanceof HTMLElement) {
    document.title = lang === "es" ? "Mi portafolio" : "My Portfolio";
    bioContent.textContent =
      lang === "es"
        ? "Estudiante de ingeniería de software, Dedicado en contribuir a proyectos excepcionales."
        : "Software engineering student, committed to work on great projects.";
  }
  if (toolsHeader instanceof HTMLElement) {
    toolsHeader.textContent = lang === "es" ? "MI STACK" : "MY STACK";
  }
  if (cvHeader instanceof HTMLElement) {
    cvHeader.textContent = lang === "es" ? "CURRÍCULO?" : "NEED MY CV?";
  }
  if (cvLink instanceof HTMLElement) {
    cvLink.textContent = lang === "es" ? "descargar cv" : "download cv";
  }
  if (paragraphProjectChatApp instanceof HTMLElement) {
    paragraphProjectChatApp.textContent =
      lang === "es"
        ? "Aplicación para enviar y recibir mensajes que hice recientemente"
        : "A chat app I have made recently";
  }
  if (paragraphProjectBlanke instanceof HTMLElement) {
    paragraphProjectBlanke.textContent =
      lang === "es"
        ? "Tienda de perfumes online hecha con WordPress y WooCommerce"
        : "Perfume shop ecommerce made with WordPress and WooCommerce";
  }
  if (
    formHeader instanceof HTMLElement &&
    nameLabel instanceof HTMLElement &&
    nameInput instanceof HTMLElement &&
    emailLabel instanceof HTMLElement &&
    emailInput instanceof HTMLElement &&
    messageLabel instanceof HTMLElement &&
    messageTextarea instanceof HTMLElement &&
    submitButton instanceof HTMLElement
  ) {
    formHeader.textContent =
      lang === "es" ? "ENVIAME UN MENSAJE" : "SEND ME A MESSAGE";
    nameLabel.textContent = lang === "es" ? "Nombre" : "Name";
    nameInput.setAttribute(
      "placeholder",
      lang === "es" ? "tu nombre" : "your name"
    );
    emailLabel.textContent = lang === "es" ? "Correo electrónico" : "Email";
    emailInput.setAttribute(
      "placeholder",
      lang === "es" ? "tu correo electrónico" : "your email"
    );
    messageLabel.textContent = lang === "es" ? "Tu mensaje" : "Your message";
    messageTextarea.setAttribute(
      "placeholder",
      lang === "es" ? "tu mensaje" : "your message"
    );
    submitButton.textContent = lang === "es" ? "enviar" : "send";
  }
  if (
    englishSkillsHeader instanceof HTMLElement &&
    englishSkillsContent instanceof HTMLElement
  ) {
    englishSkillsHeader.textContent =
      lang === "es" ? "NIVEL DE INGLÉS" : "MY ENGLISH SKILLS";

    englishSkillsContent.textContent =
      lang === "es"
        ? "Tengo un nivel avanzado, estudié en el Colombo Americano."
        : "I have an advanced level, I studied at Colombo Americano.";
  }
  if (githubHeader instanceof HTMLElement) {
    githubHeader.textContent =
      lang === "es"
        ? "EL REPOSITORIO DE ESTE SITIO"
        : "THE REPOSITORY OF THIS SITE";
  }
}
let messageSent = false;

const s1 = document.querySelector(".section-1");
const section1 = s1?.cloneNode(true);
s1?.remove();
const s2 = document.querySelector(".section-2");
const section2 = s2?.cloneNode(true);
s2?.remove();
const s3 = document.querySelector(".section-3");
const section3 = s3?.cloneNode(true);
s3?.remove();
const s4 = document.querySelector(".section-4");
const section4 = s4?.cloneNode(true);
s4?.remove();
const sectionArr = [section1, section2, section3, section4];
sectionArr.forEach((section) => {
  if (section instanceof HTMLElement) {
    section.classList.remove("d-none");
  }
});

const inputInteract = document.querySelector<HTMLInputElement>(
  "#input-interact-DOM"
);
let i = 0;
const suggestionsArr =
  lang === "es"
    ? [
        'selecciona "portafolio"',
        'crea texto "hello world" color "red"',
        'selecciona "red" crea contenedor "este contenedor"',
        'selecciona "section-1"',
      ]
    : [
        'select "portfolio"',
        'create text "hello world" style "red"',
        'select "red" create container "this container"',
        'select "section1"',
      ];
if (inputInteract) {
  setTimeout(() => {
    let i = 0;
    let selectPortfolio =
      lang === "es" ? 'selecciona "portafolio"' : 'select "portfolio"';
    let interval = setInterval(() => {
      i++;
      inputInteract.value = selectPortfolio.slice(0, i);
      if (i > selectPortfolio.length) {
        clearInterval(interval);
        btnSubmitInput?.classList.remove("muted");
      }
    }, 10);
  }, 2000);
}

setInterval(() => {
  inputInteract?.setAttribute("placeholder", suggestionsArr[i]);
  i++;
  if (i >= suggestionsArr.length) i = 0;
}, 2000);

setTimeout(() => {
  const modal = document.createElement("div");
  modal.className = "modal fade-in";

  const span = document.createElement("span");
  span.classList.add("p-font");
  span.innerHTML =
    lang === "es"
      ? "presiona las teclas <bold>ctrl</bold> + <bold>Enter</bold> para autocompletar"
      : "press keys <bold>ctrl</bold> + <bold>Enter</bold> to auto-complete the input";

  const img = document.createElement("img");
  img.src = "img/close icon.svg";
  img.alt = "x";
  img.addEventListener("click", () => {
    modal.classList.add("fade-out");
    modal.addEventListener("animationend", () => {
      modal.remove();
    });
  });
  modal.appendChild(span);
  modal.appendChild(img);

  document.body.appendChild(modal);
}, 8000);
const btnSubmitInput = document.querySelector("#submit");
inputInteract?.addEventListener("keyup", (event) => {
  btnSubmitInput?.classList.remove("red");
  if (inputInteract.classList.contains("red")) {
    inputInteract.value = "";
  }
  if (
    inputInteract.value.length === 0 &&
    !inputInteract.classList.contains("red")
  ) {
    btnSubmitInput?.classList.add("muted");
  } else {
    btnSubmitInput?.classList.remove("muted");
  }
  inputInteract.classList.remove("red");
  if (!event.ctrlKey && event.key === "Enter") {
    createElementFromInput();
  }
  if (event.ctrlKey && event.key === "Enter") {
    inputInteract.value =
      inputInteract.getAttribute("placeholder") ?? "do portfolio";
    createElementFromInput();
    setTimeout(() => inputInteract.focus(), 50);
  }
});
btnSubmitInput?.addEventListener("click", createElementFromInput);

async function createElementFromInput() {
  const selectElementArr = [
    "select",
    "selecciona",
    "choose",
    "coge",
    "pick",
    "elige",
    "agarra",
  ];
  const deleteWordsArr = [
    "delete",
    "eliminar",
    "remove",
    "borrar",
    "quita",
    "elimina",
  ];
  const createWordsArr = [
    "create",
    "make",
    "do",
    "build",
    "construct",
    "produce",
    "fabricate",
    "craft",
    "crea",
    "haz",
    "construye",
    "produce",
    "fabrica",
    "forma",
    "elabora",
    "write",
    "escribe",
  ];
  const textElementsArr = [
    "title",
    "titulo",
    "text",
    "texto",
    "paragraph",
    "parrafo",
    "heading",
    "encabezado",
    "subtitle",
    "subtitulo",
    "palabra",
    "letras",
    "word",
    "letters",
    "letter",
    "palabras",
    "words",
    "h1",
    "p",
  ];
  const containersArr = ["container", "contenedor", "div", "envuelto"];
  if (typeof inputInteract?.value === "string") {
    handleInputErrors(
      inputInteract.value,
      selectElementArr,
      deleteWordsArr,
      createWordsArr,
      textElementsArr,
      containersArr
    );
  }
  let create = false;
  let select = false;
  let deleteElement = false;
  let textH1 = false;
  let h1Classname = "";
  let classContainer = false;
  let containerClassName = "";
  let awaitClassContainer = false;
  let awaitText = false;
  let awaitClassName = false;
  let awaitH1ClassName = false;
  let awaitDeleteSelectClass = false;
  let inputTextContent = "";
  let querySelectorClassName = "";
  let querySelectordeleteClassName = "";
  if (inputInteract) {
    let inputText = inputInteract.value;
    inputText = inputText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let inputWordArr = inputText.split(" ");
    for (let i = 0; i < inputWordArr.length; i++) {
      let word = inputWordArr[i].toLowerCase();
      if (word.endsWith(",") || word.endsWith(".")) {
        word = word.substring(0, word.length - 1);
      }
      if (
        deleteElement &&
        !select &&
        !create &&
        awaitDeleteSelectClass &&
        !awaitText &&
        !awaitClassContainer &&
        !awaitClassName &&
        !awaitH1ClassName
      ) {
        if (
          (word.startsWith('"') || word.startsWith("'")) &&
          (word.endsWith('"') || word.endsWith("'"))
        ) {
          querySelectordeleteClassName = [
            ".",
            word.slice(1, word.length - 1),
          ].join("");
          awaitDeleteSelectClass = false;
        } else if (word.startsWith('"') || word.startsWith("'")) {
          querySelectordeleteClassName = [
            querySelectordeleteClassName,
            ".",
            word.slice(1),
          ].join("");
        } else if (word.endsWith('"') || word.endsWith("'")) {
          querySelectordeleteClassName = [
            querySelectordeleteClassName,
            ".",
            word.slice(0, word.length - 1),
          ].join("");
          awaitDeleteSelectClass = false;
        }
      }
      if (
        select &&
        awaitClassName &&
        !awaitDeleteSelectClass &&
        !awaitText &&
        !awaitH1ClassName
      ) {
        if (
          (word.startsWith('"') || word.startsWith("'")) &&
          (word.endsWith('"') || word.endsWith("'"))
        ) {
          querySelectorClassName = [".", word.slice(1, word.length - 1)].join(
            ""
          );
          awaitClassName = false;
        } else if (word.startsWith('"') || word.startsWith("'")) {
          querySelectorClassName = [
            querySelectorClassName,
            ".",
            word.slice(1),
          ].join("");
        } else if (word.endsWith('"') || word.endsWith("'")) {
          querySelectorClassName = [
            querySelectorClassName,
            ".",
            word.slice(0, word.length - 1),
          ]
            .join("")
            .trim();
          awaitClassName = false;
        } else if (querySelectorClassName.length > 0) {
          querySelectorClassName = [querySelectorClassName, ".", word].join("");
        }
      }

      if (
        classContainer &&
        awaitClassContainer &&
        !textH1 &&
        !awaitClassName &&
        !awaitDeleteSelectClass &&
        !awaitText &&
        !awaitH1ClassName
      ) {
        if (
          (word.startsWith('"') && word.endsWith('"')) ||
          (word.startsWith("'") && word.endsWith("'"))
        ) {
          containerClassName = word.slice(1, word.length - 1).trim();
          awaitClassContainer = false;
        } else if (word.startsWith('"') || word.startsWith("'")) {
          containerClassName = [containerClassName, " ", word.slice(1)].join(
            ""
          );
        } else if (word.endsWith('"') || word.endsWith("'")) {
          containerClassName = [
            containerClassName,
            " ",
            word.slice(0, word.length - 1),
          ]
            .join("")
            .trim();
          awaitClassContainer = false;
        } else if (containerClassName.length > 0) {
          containerClassName = [containerClassName, " ", word].join("");
        }
      }
      if (
        textH1 &&
        inputTextContent.length > 0 &&
        h1Classname.length === 0 &&
        !awaitText &&
        !awaitClassContainer &&
        !awaitClassName &&
        !awaitDeleteSelectClass &&
        !awaitH1ClassName
      ) {
        awaitH1ClassName = true;
      }
      if (
        awaitH1ClassName &&
        !awaitText &&
        !awaitClassContainer &&
        !awaitClassName &&
        !awaitDeleteSelectClass
      ) {
        if (
          (word.startsWith('"') && word.endsWith('"')) ||
          (word.startsWith("'") && word.endsWith("'"))
        ) {
          h1Classname = word.slice(1, word.length - 1);
          awaitH1ClassName = false;
        } else if (word.startsWith('"') || word.startsWith("'")) {
          h1Classname = [h1Classname, " ", word.slice(1)].join("");
        } else if (word.endsWith('"') || word.endsWith("'")) {
          h1Classname = [h1Classname, " ", word.slice(0, word.length - 1)]
            .join("")
            .trim();
          awaitH1ClassName = false;
        } else if (h1Classname.length > 0) {
          h1Classname = [h1Classname, " ", word].join("");
        }
      }
      if (
        create &&
        awaitText &&
        !awaitClassContainer &&
        !awaitClassName &&
        !awaitDeleteSelectClass &&
        !awaitH1ClassName
      ) {
        if (
          !classContainer &&
          textH1 &&
          inputTextContent.length === 0 &&
          (word.startsWith('"') || word.startsWith("'")) &&
          (word.endsWith("'") || word.endsWith('"'))
        ) {
          inputTextContent = word.slice(1, word.length - 1);
          awaitText = false;
        } else if (word.endsWith("'") || word.endsWith('"')) {
          inputTextContent = [
            inputTextContent,
            " ",
            word.slice(0, word.length - 1),
          ]
            .join("")
            .trim();
          awaitText = false;
        } else if (
          !classContainer &&
          textH1 &&
          (word.startsWith('"') || word.startsWith("'"))
        ) {
          inputTextContent = [inputTextContent, " ", word.slice(1)].join("");
        } else if (inputTextContent.length > 0) {
          inputTextContent = [inputTextContent, " ", word].join("");
        }
      }
      if (!deleteElement) {
        deleteElement = deleteWordsArr.some((wordArr) => word === wordArr);
        deleteElement
          ? (awaitDeleteSelectClass = true)
          : (awaitDeleteSelectClass = false);
      }
      if (!select) {
        select = selectElementArr.some((wordArr) => word === wordArr);
        select ? (awaitClassName = true) : (awaitClassName = false);
      }
      if (!create) {
        create = createWordsArr.some((wordArr) => word === wordArr);
      }
      if (!textH1) {
        textH1 = textElementsArr.some((wordArr) => word === wordArr);
        textH1 ? (awaitText = true) : (awaitText = false);
      }
      if (!classContainer) {
        classContainer = containersArr.some((wordArr) => word === wordArr);
        classContainer
          ? (awaitClassContainer = true)
          : (awaitClassContainer = false);
      }
    }
    if (
      select &&
      create &&
      textH1 &&
      querySelectorClassName.length > 0 &&
      inputTextContent.length > 0
    ) {
      let mainContainer = document.querySelector(".fade-in");
      let childMain = mainContainer?.querySelector(querySelectorClassName);
      let elementSelected = document.querySelector(querySelectorClassName);
      let textElement = document.createElement("h1");
      if (h1Classname.length > 0) {
        textElement.className = h1Classname;
      } else {
        textElement.className = inputTextContent;
      }
      textElement.textContent = inputTextContent;
      elementSelected?.appendChild(textElement);
      if (
        elementSelected &&
        childMain &&
        mainContainer?.firstElementChild instanceof HTMLElement
      ) {
        mainContainer.remove();
        parseHtmlElements(mainContainer.firstElementChild, 0);
      } else if (elementSelected instanceof HTMLElement) {
        parseHtmlElements(elementSelected, 0);
      } else {
        btnSubmitInput?.classList.remove("white");
        btnSubmitInput?.classList.add("red");
      }
    } else if (
      select &&
      create &&
      !textH1 &&
      classContainer &&
      querySelectorClassName.length > 0 &&
      containerClassName.length > 0
    ) {
      let mainContainer = document.querySelector(".fade-in");
      let childMain = mainContainer?.querySelector(querySelectorClassName);
      let elementSelected = document.querySelector(querySelectorClassName);
      let container = document.createElement("div");
      container.className = containerClassName;
      elementSelected?.appendChild(container);
      if (
        elementSelected &&
        childMain &&
        mainContainer?.firstElementChild instanceof HTMLElement
      ) {
        mainContainer.remove();
        parseHtmlElements(mainContainer.firstElementChild, 0);
      } else if (elementSelected instanceof HTMLElement) {
        parseHtmlElements(elementSelected, 0);
      } else {
        btnSubmitInput?.classList.remove("white");
        btnSubmitInput?.classList.add("red");
      }
    } else if (
      create &&
      textH1 &&
      !classContainer &&
      inputTextContent.length > 0
    ) {
      let textElement = document.createElement("h1");
      if (h1Classname.length > 0) {
        textElement.className = h1Classname;
      } else {
        textElement.className = inputTextContent;
      }
      textElement.textContent = inputTextContent;
      document
        .querySelectorAll(".fade-in")
        ?.forEach((element) => element.remove());
      parseHtmlElements(textElement, 0);
    } else if (
      create &&
      !textH1 &&
      classContainer &&
      containerClassName.length > 0
    ) {
      let container = document.createElement("div");
      container.className = containerClassName;
      document
        .querySelectorAll(".fade-in")
        ?.forEach((element) => element.remove());
      parseHtmlElements(container, 0);
    } else if (
      deleteElement &&
      querySelectordeleteClassName.length > 0 &&
      !select &&
      !create
    ) {
      let elementSelected = document.querySelector(
        querySelectordeleteClassName
      );
      if (elementSelected instanceof HTMLElement) {
        elementSelected.classList.add("fade-out");
        elementSelected.addEventListener("animationend", () => {
          elementSelected.remove();
        });
      }
    } else if (select && querySelectorClassName.length > 0) {
      let mainContainer = document.querySelector(".fade-in");
      if (
        querySelectorClassName.slice(1) === "portfolio" ||
        querySelectorClassName.slice(1) === "portafolio"
      ) {
        if (mainContainer?.firstElementChild instanceof HTMLElement) {
          mainContainer.remove();
        }
        if (
          section1 instanceof HTMLElement &&
          section2 instanceof HTMLElement &&
          section3 instanceof HTMLElement &&
          section4 instanceof HTMLElement
        ) {
          await parseHtmlElements(section1, 0);
          await parseHtmlElements(section2, 0);
          await parseHtmlElements(section3, 0);
          await parseHtmlElements(section4, 0);
        }
      } else {
        let childMain = mainContainer?.querySelector(querySelectorClassName);
        let elementSelected = document.querySelector(querySelectorClassName);
        if (
          elementSelected instanceof HTMLElement &&
          childMain &&
          mainContainer?.firstElementChild instanceof HTMLElement
        ) {
          mainContainer.remove();
          parseHtmlElements(elementSelected, 0);
        } else {
          btnSubmitInput?.classList.remove("white");
          btnSubmitInput?.classList.add("red");
        }
      }
    } else {
      btnSubmitInput?.classList.remove("white");
      btnSubmitInput?.classList.add("red");
    }
  }
}
function handleInputErrors(
  inputText: string,
  selectElementArr: string[],
  deleteWordsArr: string[],
  createWordsArr: string[],
  textElementsArr: string[],
  containersArr: string[]
) {
  if (inputInteract) {
    const inputWordArr = inputText.split(" ");
    for (let i = 0; i < inputWordArr.length; i++) {
      let word = inputWordArr[i].toLowerCase();
      if (word.endsWith(",") || word.endsWith(".")) {
        word = word.substring(0, word.length - 1);
      }
      if (
        (textElementsArr.includes(word) || containersArr.includes(word)) &&
        selectElementArr.includes(inputWordArr[i - 1])
      ) {
        inputInteract?.classList.add("red");
        let errorMessage = "select can't have 'text' or 'container'";
        showErrorAndCorrect(inputInteract, errorMessage, inputWordArr, i);
      } else if (
        (textElementsArr.includes(word) || containersArr.includes(word)) &&
        deleteWordsArr.includes(inputWordArr[i - 1])
      ) {
        inputInteract?.classList.add("red");
        let errorMessage = "delete can't have 'text' or 'container'";
        showErrorAndCorrect(inputInteract, errorMessage, inputWordArr, i);
      }
    }
  }
}
function showErrorAndCorrect(
  inputInteract: HTMLInputElement,
  errorMessage: string,
  inputWordArr: string[],
  index: number
) {
  let iteration = 0;
  let interval = setInterval(() => {
    iteration++;
    inputInteract.value = errorMessage.slice(0, iteration);
    if (iteration > errorMessage.length) {
      clearInterval(interval);
      setTimeout(() => {
        let correctionInput = inputWordArr
          .filter((_, j) => index !== j)
          .join(" ");
        let iter = 0;
        let correctionInterval = setInterval(() => {
          iter++;
          inputInteract.value = correctionInput.slice(0, iter);
          if (iter > correctionInput.length) {
            clearInterval(correctionInterval);
            btnSubmitInput?.classList.remove("white");
            btnSubmitInput?.classList.add("red");
          }
        }, 10);
      }, 1000);
    }
  }, 10);
}
async function parseHtmlElements(
  element: HTMLElement,
  depth: number,
  parentElement?: HTMLElement
) {
  return new Promise<void>(async (resolve) => {
    const divElements = document.createElement("div");
    let elementTag = element.tagName.toLowerCase().toString();
    let elementTextContent = element.textContent;
    if (element.firstElementChild) {
      const span = document.createElement("span");
      span.style.marginLeft = `${16 * depth}px`;
      span.appendChild(document.createTextNode("<"));
      const spanTagStart = document.createElement("span");
      spanTagStart.className = "tagStart red";
      spanTagStart.textContent = elementTag;
      span.appendChild(spanTagStart);
      for (let attribute of element.attributes) {
        const attributeName = attribute.name;
        const attributeValue = attribute.value;
        span.appendChild(document.createTextNode(" "));
        const spanAttributeValue = document.createElement("span");
        spanAttributeValue.className = "yellow";
        spanAttributeValue.textContent = attributeName;
        span.appendChild(spanAttributeValue);
        span.appendChild(document.createTextNode("="));
        const spanAttribute = document.createElement("span");
        spanAttribute.className = "green";
        spanAttribute.textContent = `"${attributeValue}"`;
        span.appendChild(spanAttribute);
      }
      span.appendChild(document.createTextNode(">"));
      const br = document.createElement("br");
      span.appendChild(br);
      depth += 1;
      if (
        element.firstChild &&
        element.firstChild.textContent &&
        element.firstChild.nodeType === 3 &&
        element.firstChild.textContent.trim().length > 0
      ) {
        const spanTextNode = document.createElement("span");
        spanTextNode.style.marginLeft = `${16 * depth}px`;
        spanTextNode.textContent = `${
          element.firstChild.textContent.trim() ?? ""
        }`;
        span.appendChild(spanTextNode);
        const br = document.createElement("br");
        span.appendChild(br);
      }
      for (let i = 0; i < element.children.length; i++) {
        let child = element.children[i];
        let childTag = child.tagName.toLowerCase().toString();
        let childTextContent = child.textContent;
        if (child instanceof HTMLElement && child.firstElementChild) {
          parseHtmlElements(child, depth, span);
        } else {
          const spanChild = document.createElement("span");
          spanChild.style.marginLeft = `${16 * depth}px`;
          spanChild.appendChild(document.createTextNode("<"));
          const spanTagStart = document.createElement("span");
          spanTagStart.className = "tagStart red";
          spanTagStart.textContent = childTag;
          spanChild.appendChild(spanTagStart);
          for (let attribute of child.attributes) {
            const attributeName = attribute.name;
            const attributeValue = attribute.value;
            spanChild.appendChild(document.createTextNode(" "));
            const spanAttributeValue = document.createElement("span");
            spanAttributeValue.className = "yellow";
            spanAttributeValue.textContent = attributeName;
            spanChild.appendChild(spanAttributeValue);
            spanChild.appendChild(document.createTextNode("="));
            const spanAttribute = document.createElement("span");
            spanAttribute.className = "green";
            spanAttribute.textContent = `"${attributeValue}"`;
            spanChild.appendChild(spanAttribute);
          }
          spanChild.appendChild(
            document.createTextNode(`>${childTextContent ?? ""}</`)
          );
          const spanTagEnd = document.createElement("span");
          spanTagEnd.className = "tagEnd red";
          spanTagEnd.textContent = childTag;
          spanChild.appendChild(spanTagEnd);
          spanChild.appendChild(document.createTextNode(">"));
          const br = document.createElement("br");
          spanChild.appendChild(br);
          span.appendChild(spanChild);
        }
      }
      const spanTagEndParent = document.createElement("span");
      spanTagEndParent.className = "container-tagEnd";
      spanTagEndParent.appendChild(document.createTextNode("</"));
      const spanTagEnd = document.createElement("span");
      spanTagEndParent.style.marginLeft = `${16 * (depth - 1)}px`;
      spanTagEnd.className = "tagEnd red";
      spanTagEnd.textContent = elementTag;
      spanTagEndParent.appendChild(spanTagEnd);
      spanTagEndParent.appendChild(document.createTextNode(">"));
      span.appendChild(spanTagEndParent);
      if (parentElement) {
        const br = document.createElement("br");
        span.appendChild(br);
        parentElement.appendChild(span);
      } else {
        divElements.appendChild(span);
      }
    } else {
      const span = document.createElement("span");
      span.style.marginLeft = `${16 * depth}px`;
      span.appendChild(document.createTextNode("<"));
      const spanTagStart = document.createElement("span");
      spanTagStart.className = "tagStart red";
      spanTagStart.textContent = elementTag;
      span.appendChild(spanTagStart);
      for (let attribute of element.attributes) {
        const attributeName = attribute.name;
        const attributeValue = attribute.value;
        span.appendChild(document.createTextNode(" "));
        const spanAttributeValue = document.createElement("span");
        spanAttributeValue.className = "yellow";
        spanAttributeValue.textContent = attributeName;
        span.appendChild(spanAttributeValue);
        span.appendChild(document.createTextNode("="));
        const spanAttribute = document.createElement("span");
        spanAttribute.className = "green";
        spanAttribute.textContent = `"${attributeValue}"`;
        span.appendChild(spanAttribute);
      }
      span.appendChild(
        document.createTextNode(`>${elementTextContent ?? ""}</`)
      );
      const spanTagEnd = document.createElement("span");
      spanTagEnd.className = "tagEnd red";
      spanTagEnd.textContent = elementTag;
      span.appendChild(spanTagEnd);
      span.appendChild(document.createTextNode(">"));
      if (parentElement) {
        parentElement.appendChild(span);
      } else {
        divElements.appendChild(span);
      }
    }
    if (!parentElement) {
      document.body.appendChild(divElements);
    }
    if (divElements.firstElementChild instanceof HTMLElement) {
      await htmlAnimation(divElements.firstElementChild, true);

      setTimeout(async () => {
        const isSection =
          divElements.firstElementChild instanceof HTMLElement &&
          Array(sectionArr.length)
            .fill("")
            .some((_, i) => {
              return element.classList.contains(`section-${i + 1}`);
            });
        if (isSection) {
          await convertToHtml(element, divElements.firstElementChild);
          resolve();
        } else if (divElements.firstElementChild instanceof HTMLElement) {
          convertToHtml(element, divElements.firstElementChild);
        }
      }, 100);
    }
  });
}
async function htmlAnimation(
  elementContainer: HTMLElement,
  generateText: boolean
): Promise<void> {
  return new Promise<void>(async (resolve) => {
    const promises: Promise<void>[] = [];
    for (let i = 0; i < elementContainer.childNodes.length; i++) {
      let child = elementContainer.childNodes[i];
      if (
        child instanceof HTMLElement &&
        child.classList.contains("red") &&
        child.classList.contains("tagStart")
      ) {
        promises.push(randomLetterAnimation(child, generateText));
      }
      if (
        child instanceof HTMLElement &&
        child.classList.contains("red") &&
        child.classList.contains("tagEnd")
      ) {
        promises.push(randomLetterAnimation(child, generateText));
      }
      if (child instanceof HTMLElement && child.classList.contains("yellow")) {
        promises.push(randomLetterAnimation(child, generateText));
      }
      if (child instanceof HTMLElement && child.classList.contains("green")) {
        promises.push(randomLetterAnimation(child, generateText));
      }
      if (child.textContent && child.nodeType === 3) {
        promises.push(randomLetterAnimation(child, generateText));
      }
      if (
        child instanceof HTMLElement &&
        child.hasAttribute("style") &&
        child.textContent &&
        !child.firstElementChild &&
        child instanceof HTMLElement
      ) {
        promises.push(randomLetterAnimation(child, generateText));
      }
      if (
        child instanceof HTMLElement &&
        child.classList.contains("container-tagEnd") &&
        child.hasAttribute("style") &&
        child.firstElementChild &&
        child instanceof HTMLElement
      ) {
        for (let j = 0; j < child.childNodes.length; j++) {
          promises.push(
            randomLetterAnimation(child.childNodes[j], generateText)
          );
        }
      }
      if (child instanceof Text && child.textContent === "<") {
        promises.push(randomLetterAnimation(child, generateText));
      }
      if (
        child instanceof HTMLElement &&
        !child.classList.contains("container-tagEnd") &&
        child.hasAttribute("style") &&
        child.firstElementChild &&
        child instanceof HTMLElement
      ) {
        promises.push(htmlAnimation(child, generateText));
      }
    }
    await Promise.all(promises);
    resolve();
  });
}

async function convertToHtml(element: HTMLElement, HTMLInstance: HTMLElement) {
  return new Promise<void>(async (resolve) => {
    const divElements = document.createElement("div");

    if (element instanceof HTMLElement) {
      await htmlAnimation(HTMLInstance, false);
      divElements.appendChild(element);
      HTMLInstance.parentElement?.remove();
      HTMLInstance.remove();
      divElements.className = "fade-in";
      const isSection = Array(sectionArr.length)
        .fill("")
        .some((_, i) => {
          return (
            element.classList.contains(`section-${i + 1}`) &&
            document.querySelector(`.fade-in .section-${i}`)
          );
        });
      if (isSection) {
        element.classList.add("fade-in");
        document.querySelector(".fade-in")?.appendChild(element);
        resolve();
      } else if (document.querySelector(".fade-in")) {
        document.querySelector(".fade-in")?.replaceWith(divElements);
        if (document.querySelector(".fade-in .section-1")) {
          resolve();
        }
      } else {
        document.body.appendChild(divElements);
        if (document.querySelector(".fade-in .section-1")) {
          resolve();
        }
      }
    }
    if (element.classList.contains("section-1")) {
      const copySvg = document.querySelectorAll(".copy-paste-icon");
      copySvg.forEach((svg) => {
        svg.addEventListener("click", () => {
          const spanParent = svg.parentElement;
          if (
            spanParent &&
            spanParent.firstChild &&
            spanParent.firstChild.nodeType === 3
          ) {
            const text = spanParent.firstChild.textContent ?? "";
            navigator.clipboard.writeText(text);
          }
        });
      });
    }
    if (element.classList.contains("section-3")) {
      const btnSubmit = document.querySelector(".btn-submit");
      const formSendEmail = document.querySelector("#form-send-email");
      const inputName = formSendEmail?.querySelector<HTMLInputElement>("#name");
      const inputEmail =
        formSendEmail?.querySelector<HTMLInputElement>("#email");
      const textareaMessage =
        formSendEmail?.querySelector<HTMLTextAreaElement>("#message");

      function updateButtonState() {
        let allFilled =
          inputName &&
          inputEmail &&
          textareaMessage &&
          inputName.value.length > 0 &&
          inputEmail.value.length > 0 &&
          textareaMessage.value.length > 0;

        if (btnSubmit) {
          if (allFilled) {
            btnSubmit.className = "btn-submit bg-blue white";
          } else {
            btnSubmit.className = "btn-submit btn-muted-color";
          }
        }
      }
      inputName?.addEventListener("input", updateButtonState);
      inputEmail?.addEventListener("input", updateButtonState);
      textareaMessage?.addEventListener("input", updateButtonState);

      if (formSendEmail instanceof HTMLFormElement) {
        formSendEmail.removeEventListener("submit", submitForm);
        if (!messageSent) {
          formSendEmail.addEventListener("submit", submitForm);
        }
      }
      async function submitForm(event: Event) {
        if (formSendEmail instanceof HTMLFormElement && !messageSent) {
          const formData = new FormData(formSendEmail);
          event.preventDefault();
          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);
          if (btnSubmit) {
            btnSubmit.className = "btn-submit bg-blue-gray";
          }
          try {
            const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: json,
            });
            if (response.ok) {
              if (response.status === 200) {
                if (btnSubmit) {
                  btnSubmit.className = "btn-submit bg-green white";
                  messageSent = true;
                }
              } else {
                if (btnSubmit) {
                  btnSubmit.className = "btn-submit bg-red white";
                }
              }
            } else {
              if (btnSubmit) {
                btnSubmit.className = "btn-submit bg-red white";
              }
            }
          } catch (error) {
            console.log(error);
            if (btnSubmit) {
              btnSubmit.className = "btn-submit bg-red white";
            }
          }
        }
      }
    }
    if (element.classList.contains("section-2")) {
      const chatAppLinkSvg = document.querySelector("#chatapp-link");
      chatAppLinkSvg?.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "https://github.com/santedev";
      });
      const blankeLinkSvg = document.querySelector("#blanke-link");
      blankeLinkSvg?.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "https://github.com/santedev";
      });
    }
  });
}

async function randomLetterAnimation(
  element: ChildNode,
  generateText: boolean = true
): Promise<void> {
  return new Promise<void>((resolve) => {
    const letters = "abcdefghijklmnopqrstuvwxyz1234567890";

    let text = element.textContent ?? "";
    const textLength = text.length;
    const randomizedIndices = generateIndices(textLength);

    let iteration = 0;

    let interval = setInterval(() => {
      element.textContent = text
        .split("")
        .map((character, index) => {
          const randomizedIndex = randomizedIndices[index];
          if (randomizedIndex < iteration) {
            return generateText ? character : "";
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= textLength) {
        clearInterval(interval);
        resolve();
      }

      iteration += generateText
        ? iteration < 30
          ? 1
          : iteration / 15
        : (iteration + 5) / 5;
    }, 30);
  });
}
function generateIndices(length: number) {
  const indices = Array.from(Array(length).keys());
  //shuffleArray(indices);
  return indices;
}

function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
