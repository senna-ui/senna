import { addDecorator, addParameters } from "@storybook/html";

/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

addParameters({
  options: {
    enableShortcuts: false,
  },
});

addDecorator(
  (storyFn) => {
    const app = document.createElement('sen-app')
    let element = storyFn()
    if(typeof element === "string") {
      element = htmlToElement(element)
    }

    app.appendChild(element)

    const wrapper =document.createElement("div")
    wrapper.style.padding = '20px'
    wrapper.appendChild(app)

    return wrapper
  }
);
import { configureActions } from "@storybook/addon-actions";

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});
