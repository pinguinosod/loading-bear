/**
 * Creates a progress bar.
 * @param {int} duration The duration in milliseconds.
 */
function loadingBear(duration) {
  /**
   * Hides every element in document.body.
   */
  function hideEverything() {
    document.body.childNodes.forEach((node) => {
      if (node.nodeType !== Node.TEXT_NODE) {
        node.style.opacity = '0';
      }
    });

    document.body.style.visibility = 'hidden';
  }

  /**
   * Shows every element in document.body.
   */
  function showEverything() {
    document.body.childNodes.forEach((node) => {
      if (node.nodeType !== Node.TEXT_NODE) {
        node.style.opacity = '1';
      }
    });

    document.body.style.visibility = 'visible';
  }

  /**
   * Appends the progress bar to document.body.
   */
  function appendLoadingBar() {
    const lbear = document.createElement('div');
    lbear.id = 'l-bear';
    lbear.style.visibility = 'visible';
    lbear.style.width = '100%';
    lbear.style.height = '50px';
    lbear.style.backgroundColor = '#c8c8c8';

    const lbearInner = document.createElement('div');
    lbearInner.style.height = '100%';
    lbearInner.style.backgroundColor = '#842';
    lbearInner.style.transition = 'width ' + duration + 'ms linear';
    lbearInner.style.width = '0%';
    lbear.appendChild(lbearInner);
    document.body.insertBefore(lbear, document.body.firstChild);

    setTimeout(() => { // cheesy workaround
      document.getElementById('l-bear').childNodes[0].style.width = '100%';
    }, 1);
  }

  hideEverything();
  appendLoadingBar();

  setTimeout(() => {
    showEverything();
    document.body.removeChild(document.getElementById('l-bear'));
  }, duration);
}

module.exports = loadingBear;
