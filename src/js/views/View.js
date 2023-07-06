import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  /**
   * Render the recieved object to the DOM
   * @param {Object | Object[] } data The data to be rendered (e.g recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned  if render=false
   * @this {Object } View instance
   * @author Tolu_Jacob
   * @todo Finish implementation
   */

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    // console.log(this._generateMarkup());
    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();

    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElement = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parentElement.querySelectorAll("*"));
    console.log();

    newElement.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // Update changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        // console.log(newEl.firstChild.nodeValue.trim(), " 🛑🛑🛑");
        curEl.textContent = newEl.textContent;
      }

      // Update changed ATTRIBUTE
      if (!newEl.isEqualNode(curEl))
        // console.log(Array.from(newEl.attributes));
        Array.from(newEl.attributes).forEach((attr) => {
          curEl.setAttribute(attr.name, attr.value);
        });
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner = function () {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
      `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  };

  renderError(message = this._errorMessage) {
    const markup = `
          <div class="error"> 
              <div>
                  <svg>
                      <use href="${icons}#icon-alert-triangle"></use>
                  </svg>
              </div>
              <div>
                  <p>${message}</p>
              </div>
          </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this._message) {
    const markup = `
          <div class="message"> 
              <div>
                  <svg>
                      <use href="${icons}#icon-smile"></use>
                  </svg>
              </div>
              <div>
                  <p>${message}</p>
              </div>
          </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
