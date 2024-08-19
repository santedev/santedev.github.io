(function main() {
  /** @type {HTMLElement[]} */
  const sectionArr = [
    $SectionBio(),
    $SectionProjects(),
    $SectionFormSendMessage(),
    $SectionLastPart(),
  ];

  (async function renderSections() {
    for (const $element of sectionArr) {
      await parseHtmlElements($element);
    }
  })();

  async function parseHtmlElements(element, depth = 0, parentElement = null) {
    return new Promise(async (resolve) => {
      const divElements = parentElement || document.createElement("div");
      const elementTag = element.tagName.toLowerCase();
      const margin = `${16 * depth}px`;

      const span = document.createElement("span");
      span.style.marginLeft = margin;
      span.innerHTML = `&lt;<span class="tagStart red">${elementTag}</span>`;

      Array.from(element.attributes).forEach((attr) => {
        span.innerHTML += ` <span class="yellow">${attr.name}</span>=<span class="green">"${attr.value}"</span>`;
      });

      span.innerHTML += "&gt;<br>";

      if (element.firstChild && element.firstChild.nodeType === 3) {
        const textContent = element.firstChild.textContent.trim();
        const textSpan = document.createElement("span");
        textSpan.style.marginLeft = `${16 * (depth + 1)}px`;
        textSpan.textContent = textContent;
        span.appendChild(textSpan);
        span.innerHTML += "<br>";
      }

      Array.from(element.children).forEach(async (child) => {
        await parseHtmlElements(child, depth + 1, span);
      });

      const closingSpan = document.createElement("span");
      closingSpan.style.marginLeft = margin;
      closingSpan.innerHTML = `&lt;/<span class="tagEnd red">${elementTag}</span>&gt;<br>`;
      span.appendChild(closingSpan);

      if (parentElement) {
        parentElement.appendChild(span);
        resolve();
        return;
      }
      divElements.appendChild(span);
      document.body.appendChild(divElements);
      await htmlAnimation(divElements.firstElementChild, true);
      setTimeout(async () => {
        await appendHTML(element, divElements.firstElementChild);
      }, 100);
      resolve();
    });
  }

  async function htmlAnimation(elementContainer, generateText) {
    return new Promise(async (resolve) => {
      const promises = [];
      for (let i = 0; i < elementContainer.childNodes.length; i++) {
        let child = elementContainer.childNodes[i];
        if (child instanceof HTMLElement) {
          if (!child.classList.contains("container-tagEnd")) {
            promises.push(htmlAnimation(child, generateText));
          }
          if (child.classList.contains("container-tagEnd")) {
            for (let j = 0; j < child.childNodes.length; j++) {
              promises.push(
                randomLetterAnimation(child.childNodes[j], generateText)
              );
            }
          }
        } else {
          promises.push(randomLetterAnimation(child, generateText));
        }
      }
      await Promise.all(promises);
      resolve();
    });
  }

  async function appendHTML(element, HTMLInstance) {
    return new Promise(async (resolve) => {
      if (element instanceof HTMLElement) {
        await htmlAnimation(HTMLInstance, false);
        $("div.container").append($(element).addClass("fade-in"));
        HTMLInstance.parentElement?.remove();
        resolve();
      }
    });
  }

  async function randomLetterAnimation(element, generateText = true) {
    return new Promise((resolve) => {
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

  function generateIndices(length) {
    const indices = Array.from(Array(length).keys());
    return indices;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
})();
