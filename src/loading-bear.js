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
  const lBearContainer = document.createElement('div');
  lBearContainer.style.position = 'fixed';
  lBearContainer.style.top = '0';
  lBearContainer.style.right = '0';
  lBearContainer.style.bottom = '0';
  lBearContainer.style.left = '0';
  lBearContainer.style.backgroundColor = 'white';
  lBearContainer.style.width = '100%';
  lBearContainer.style.height = '100%';
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
  const lBear = document.createElement('div');
  lBear.style.width = '100%';
  lBear.style.height = options.height;
  lBear.style.backgroundColor = '#c8c8c8';
  lBear.className = options.lBearClass;
  return lBear;
}

/**
 * Creates bar's inner element.
 * @param {Object} options
 * @return {Element} lBearInner
 */
function generateLBearInner(options) {
  const lBearInner = document.createElement('div');
  lBearInner.style.height = '100%';
  lBearInner.style.backgroundColor = '#842';
  lBearInner.style.transition = 'width ' + options.duration + 'ms linear';
  lBearInner.style.width = '0%';
  lBearInner.className = options.lBearInnerClass;
  return lBearInner;
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

  setTimeout(() => { // wait 20ms to get the element in place
    lBearInner.style.width = '100%';
  }, 20);

  setTimeout(() => {
    document.body.removeChild(lBearContainer);
    document.body.style.overflow = startingBodyOverflow;
  }, options.duration);
}

module.exports = loadingBear;
