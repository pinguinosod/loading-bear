/**
 * Fills options object with default values
 * @param {Object} options
 * @return {Object} options
 */
function fillOptions(options = {}) {
  if (isNaN(options.duration) || options.duration < 21) {
    options.duration = 3000;
  }
  if (!options.height) {
    options.height = '40px';
  }
  if (!options.lBearContainerClass) {
    options.lBearContainerClass = '';
  }
  if (!options.lBearClass) {
    options.lBearClass = '';
  }
  if (!options.lBearInnerClass) {
    options.lBearInnerClass = '';
  }

  return options;
}

/**
 * Creates bar's container element.
 * @param {Object} options
 * @return {Element} lBearContainer
 */
function generateLBearContainer(options) {
  const lBearContainer = document.createElement('DIV');
  lBearContainer.style.position = 'fixed';
  lBearContainer.style.top = '0px';
  lBearContainer.style.right = '0px';
  lBearContainer.style.bottom = '0px';
  lBearContainer.style.left = '0px';
  lBearContainer.style.width = '100%';
  lBearContainer.style.height = '100%';
  lBearContainer.style.backgroundColor = 'white';
  lBearContainer.style.zIndex = '9999';
  lBearContainer.className = options.lBearContainerClass;
  return lBearContainer;
}

/**
 * Creates bar element.
 * @param {Object} options
 * @return {Element} lBear
 */
function generateLBear(options) {
  const lBear = document.createElement('DIV');
  lBear.style.width = '100%';
  lBear.style.height = options.height;
  lBear.style.backgroundColor = 'rgb(200, 200, 200)';
  lBear.className = options.lBearClass;
  return lBear;
}

/**
 * Creates bar's inner element.
 * @param {Object} options
 * @return {Element} lBearInner
 */
function generateLBearInner(options) {
  const lBearInner = document.createElement('DIV');
  lBearInner.style.width = '0%';
  lBearInner.style.height = '100%';
  lBearInner.style.backgroundColor = 'rgb(136, 68, 34)';
  lBearInner.style.transition = 'width ' + options.duration + 'ms linear';
  lBearInner.className = options.lBearInnerClass;
  return lBearInner;
}

/**
 * Updates the width of the received element to 100%
 * @param {Element} elem
 */
function setFullWidthToElem(elem) {
  elem.style.width = '100%';
}

/**
 * Eliminates the progress bar
 * @param {Element} lBearContainer
 * @param {String} startingBodyOverflow
 */
function eliminateLBear(lBearContainer, startingBodyOverflow) {
  document.body.removeChild(lBearContainer);
  document.body.style.overflow = startingBodyOverflow;
}

/**
 * Creates a progress bar and appends it to document's body
 * @param {Object} options
 */
function loadingBear(options = {}) {
  options = fillOptions(options);
  const startingBodyOverflow = document.body.style.overflow;
  const lBearContainer = generateLBearContainer(options);
  const lBear = generateLBear(options);
  const lBearInner = generateLBearInner(options);

  lBear.appendChild(lBearInner);
  lBearContainer.appendChild(lBear);
  document.body.insertBefore(lBearContainer, document.body.firstChild);
  document.body.style.overflow = 'hidden';

  // wait 20ms to get the element in place and then update its width
  setTimeout(setFullWidthToElem.bind(null, lBearInner), 20);

  setTimeout(eliminateLBear.bind(null, lBearContainer, startingBodyOverflow),
      options.duration);
}

module.exports = loadingBear;
