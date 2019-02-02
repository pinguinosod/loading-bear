/**
 * Creates a progress bar and appends it to document's body
 * @param {int} duration The duration in milliseconds.
 */
function loadingBear(duration) {
  /**
   * Creates bar's container element.
   * @return {Element} lBearContainer
   */
  function generateLBearContainer() {
    const lBearContainer = document.createElement('div');
    lBearContainer.id = 'l-bear-container';
    lBearContainer.style.position = 'fixed';
    lBearContainer.style.top = '0';
    lBearContainer.style.right = '0';
    lBearContainer.style.bottom = '0';
    lBearContainer.style.left = '0';
    lBearContainer.style.backgroundColor = 'white';
    lBearContainer.style.width = '100%';
    lBearContainer.style.height = '100%';
    lBearContainer.style.zIndex = '9999';
    return lBearContainer;
  }

  /**
   * Creates bar element.
   * @return {Element} lBear
   */
  function generateLBear() {
    const lBear = document.createElement('div');
    lBear.id = 'l-bear';
    lBear.style.visibility = 'visible';
    lBear.style.width = '100%';
    lBear.style.height = '50px';
    lBear.style.backgroundColor = '#c8c8c8';
    return lBear;
  }

  /**
   * Creates bar's inner element.
   * @return {Element} lBearInner
   */
  function generateLBearInner() {
    const lBearInner = document.createElement('div');
    lBearInner.style.height = '100%';
    lBearInner.style.backgroundColor = '#842';
    lBearInner.style.transition = 'width ' + duration + 'ms linear';
    lBearInner.style.width = '0%';
    return lBearInner;
  }

  const startingBodyOverflow = document.body.style.overflow;
  const lBearContainer = generateLBearContainer();
  const lBear = generateLBear();
  const lBearInner = generateLBearInner();

  lBear.appendChild(lBearInner);
  lBearContainer.appendChild(lBear);
  document.body.insertBefore(lBearContainer, document.body.firstChild);
  document.body.style.overflow = 'hidden';

  setTimeout(() => { // cheesy workaround
    document.getElementById('l-bear').childNodes[0].style.width = '100%';
  }, 10);

  setTimeout(() => {
    document.body.removeChild(document.getElementById('l-bear-container'));
    document.body.style.overflow = startingBodyOverflow;
  }, duration);
}

module.exports = loadingBear;
