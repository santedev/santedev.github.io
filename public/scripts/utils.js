/**
 * @param {Event} event
 * @param {SVGElement} svgElem
 */
function copyCLipboard(event, svgElem) {
 event.preventDefault();
 if (!(svgElem instanceof SVGElement)) {
   throw new Error("svgElem is not instance of SVGElement");
 }
 const elem = $(svgElem).closest("span").text();
 navigator.clipboard.writeText(elem.trim());
}

/**
* @param {Event} event
* @param {string} projectName
*/
const redirectToGithubRepo = function (event, projectName) {
 event.preventDefault();
 window.location.href = GithubProfilePath() + projectName;
};

/**
* @param {Function} fn
* @returns {void}
* @description function `onCall` allows only one call, in case of more calls it will
* make an early return until the first call is done and returns the promise
*/
const onCall = function (fn) {
 let onCall = false;
 if (onCall) return;
 return async function (...args) {
   onCall = true;
   await fn(...args);
   onCall = false;
 };
};

/**
* @param {Event} event
* @param {HTMLFormElement} formElement
* @returns {void}
*/
async function _sendMessage(event, formElement) {
 return new Promise(async (res, rej) => {
   try {
     event.preventDefault();

     if (!(formElement instanceof HTMLFormElement)) {
       throw new Error("formElement is not an instance of HTMLFormElement");
     }

     const formData = new FormData(formElement);
     const object = Object.fromEntries(formData);
     const json = JSON.stringify(object);

     const $btnSubmit = $(formElement).find("button[type=submit]");
     if ($btnSubmit.length === 0) throw new Error("could not find button");

     $btnSubmit.removeClass("bg-green bg-red bg-muted").addClass("bg-blue-gray");

     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: json,
     });

     const resText = await response.text();

     if (!response.ok) {
       $btnSubmit.removeClass("bg-green").addClass("bg-red white");
       throw new Error(resText);
     }

     if (response.status === 200) {
       $btnSubmit.removeClass("bg-red").addClass("bg-green white");
       res();
       return;
     }

     $btnSubmit.removeClass("bg-green").addClass("bg-red white");
     rej();
   } catch (error) {
     console.error(error);
     const $btnSubmit = $(formElement).find("button[type=submit]");
     $btnSubmit.removeClass().addClass("btn-submit bg-red white");
     rej(error);
   }
 });
}
/**
* @param {Event} event
* @param {HTMLFormElement} formElement
* @returns {void}
* @description uses `onCall` which allows only one call while waits the promise to allow new calls
*/
const sendMessage = onCall(_sendMessage);
