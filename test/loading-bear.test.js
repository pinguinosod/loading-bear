const fillOptions = require('../src/loading-bear').
    __get__('fillOptions');
const generateLBearContainer = require('../src/loading-bear').
    __get__('generateLBearContainer');
const generateLBear = require('../src/loading-bear').
    __get__('generateLBear');
const generateLBearInner = require('../src/loading-bear').
    __get__('generateLBearInner');
const setFullWidthToElem = require('../src/loading-bear').
    __get__('setFullWidthToElem');
const eliminateLBear = require('../src/loading-bear').
    __get__('eliminateLBear');
const loadingBear = require('../src/loading-bear').
    __get__('loadingBear');

describe('function fillOptions', () => {
  let defaultOptions;
  beforeEach(() => {
    defaultOptions = fillOptions({});
  });

  test('Should fill with default duration 3000', () => {
    expect(defaultOptions.duration).toBe(3000);
  });

  test('Should fill with default height 40px', () => {
    expect(defaultOptions.height).toBe('40px');
  });

  test('Should fill with default lBearContainerClass empty', () => {
    expect(defaultOptions.lBearContainerClass).toBe('');
  });

  test('Should fill with default lBearClass empty', () => {
    expect(defaultOptions.lBearClass).toBe('');
  });

  test('Should fill with default lBearInnerClass empty', () => {
    expect(defaultOptions.lBearInnerClass).toBe('');
  });

  test('Empty object should not remain empty', () => {
    expect(defaultOptions).not.toEqual({});
  });

  test('Object with values should keep its initial values', () => {
    const initialOptions =
        {
          'duration': 5500,
          'height': '20px',
          'lBearContainerClass': 'container d-flex align-items-center',
          'lBearClass': 'progress',
          'lBearInnerClass': 'progress-bar progress-bar-striped bg-primary progress-bar-animated',
        };
    const filledOptions = fillOptions(initialOptions);

    expect(filledOptions.duration).
        toEqual(initialOptions.duration);

    expect(filledOptions.height).
        toEqual(initialOptions.height);

    expect(filledOptions.lBearContainerClass).
        toEqual(initialOptions.lBearContainerClass);

    expect(filledOptions.lBearClass).
        toEqual(initialOptions.lBearClass);

    expect(filledOptions.lBearInnerClass).
        toEqual(initialOptions.lBearInnerClass);
  });

  test('Should fill with default values even if no parameter object is sent',
      () => {
        const expectedDefaultOptions = {
          'duration': 3000,
          'height': '40px',
          'lBearClass': '',
          'lBearContainerClass': '',
          'lBearInnerClass': '',
        };
        const filledDefaultOptions = fillOptions();

        expect(filledDefaultOptions).toEqual(expectedDefaultOptions);
      });
});

describe('function generateLBearContainer', () => {
  let lBearContainer;
  beforeEach(() => {
    lBearContainer = generateLBearContainer({});
  });

  test('Happy Path', () => {
    expect(typeof lBearContainer === 'object').toBeTruthy();
  });

  test('Should have style.position fixed', () => {
    expect(lBearContainer.style.position).toBe('fixed');
  });

  test('Should have style.top 0px', () => {
    expect(lBearContainer.style.top).toBe('0px');
  });

  test('Should have style.right 0px', () => {
    expect(lBearContainer.style.right).toBe('0px');
  });

  test('Should have style.bottom 0px', () => {
    expect(lBearContainer.style.bottom).toBe('0px');
  });

  test('Should have style.left 0px', () => {
    expect(lBearContainer.style.left).toBe('0px');
  });

  test('Should have style.width 100%', () => {
    expect(lBearContainer.style.width).toBe('100%');
  });

  test('Should have style.height 100%', () => {
    expect(lBearContainer.style.height).toBe('100%');
  });

  test('Should have style.backgroundColor white', () => {
    expect(lBearContainer.style.backgroundColor).toBe('white');
  });

  test('Should have style.zIndex 9999', () => {
    expect(lBearContainer.style.zIndex).toBe('9999');
  });

  test('Should have class sent in options object', () => {
    const lBearContainerWithClass = generateLBearContainer(
        {'lBearContainerClass': 'uwu'});
    expect(lBearContainerWithClass.className).toBe('uwu');

    const lBearContainerWithDifferentClass = generateLBearContainer(
        {'lBearContainerClass': 'skdfjsdk ekisde'});
    expect(lBearContainerWithDifferentClass.className).toBe('skdfjsdk ekisde');
  });
});

describe('function generateLBear', () => {
  let lBear;
  beforeEach(() => {
    lBear = generateLBear({});
  });

  test('Happy Path', () => {
    expect(typeof lBear === 'object').toBeTruthy();
  });

  test('Should have style.width 100%', () => {
    expect(lBear.style.width).toBe('100%');
  });

  test('Should have style.height sent in options object', () => {
    const lBearWithHeight = generateLBear({'height': '66px'});
    expect(lBearWithHeight.style.height).toBe('66px');

    const lBearWithDifferentHeight = generateLBear({'height': '342px'});
    expect(lBearWithDifferentHeight.style.height).toBe('342px');
  });

  test('Should have style.backgroundColor rgb(200, 200, 200)', () => {
    expect(lBear.style.backgroundColor).toBe('rgb(200, 200, 200)');
  });

  test('Should have class sent in options object', () => {
    const lBearWithClass = generateLBear({'lBearClass': 'owo'});
    expect(lBearWithClass.className).toBe('owo');

    const lBearWithDifferentClass = generateLBear({'lBearClass': 'la pizza'});
    expect(lBearWithDifferentClass.className).toBe('la pizza');
  });
});

describe('function generateLBearInner', () => {
  let lBearInner;
  beforeEach(() => {
    lBearInner = generateLBearInner({});
  });

  test('Happy Path', () => {
    expect(typeof lBearInner === 'object').toBeTruthy();
  });

  test('Should have style.width 0%', () => {
    expect(lBearInner.style.width).toBe('0%');
  });

  test('Should have style.height 100%', () => {
    expect(lBearInner.style.height).toBe('100%');
  });

  test('Should have style.backgroundColor rgb(136, 68, 34)', () => {
    expect(lBearInner.style.backgroundColor).toBe('rgb(136, 68, 34)');
  });

  test('Should have style.transition width *something*ms linear', () => {
    expect(lBearInner.style.transition.match(/^width.*ms linear$/)).
        toBeTruthy();
  });

  test('Should have style.transition duration sent in options object', () => {
    const lBearInnerWithDuration = generateLBearInner({'duration': 4200});
    expect(lBearInnerWithDuration.style.transition.search(/4200ms/)).
        toBeTruthy();

    const lBearInnerWithDifferentDuration = generateLBearInner(
        {'duration': 925});
    expect(lBearInnerWithDifferentDuration.style.transition.search(/952ms/)).
        toBeTruthy();
  });

  test('Should have class sent in options object', () => {
    const lBearInnerWithClass = generateLBearInner({'lBearInnerClass': 'ewe'});
    expect(lBearInnerWithClass.className).toBe('ewe');

    const lBearInnerWithDifferentClass = generateLBearInner(
        {'lBearInnerClass': 'Spaghetti a la Bolognesa'});
    expect(lBearInnerWithDifferentClass.className).
        toBe('Spaghetti a la Bolognesa');
  });
});

describe('function setFullWidthToElem', () => {
  let dummyHeadding = document.createElement('H3');
  beforeEach(() => {
    dummyHeadding.style.width = '0%';
  });

  test('Smoke Test', () => {
    expect(dummyHeadding.style.width).toBe('0%');
  });

  test('Happy Path', () => {
    setFullWidthToElem(dummyHeadding);

    expect(dummyHeadding.style.width).toBe('100%');
  });
});

describe('function eliminateLBear', () => {
  let dummySpan = document.createElement('SPAN');
  beforeEach(() => {
    dummySpan.id = 'theDummySpan';
    document.body.insertBefore(dummySpan, document.body.firstChild);
    document.body.style.overflow = 'hidden';
  });

  test('Smoke Test', () => {
    expect(document.body.firstChild.nodeName).toBe('SPAN');
    expect(document.getElementById('theDummySpan')).toBeTruthy();
    expect(document.body.style.overflow).toBe('hidden');
  });

  test('Happy Path', () => {
    eliminateLBear(dummySpan, 'auto');

    expect(document.body.style.overflow).toBe('auto');
    expect(document.getElementById('theDummySpan')).toBeFalsy();
  });
});

describe('function loadingBear', () => {
  beforeEach(() => {
    const headingNode = document.createElement('H1');
    const textNode = document.createTextNode('SWAG');
    headingNode.appendChild(textNode);
    document.body.insertBefore(headingNode, document.body.firstChild);
  });

  test('Smoke Test', () => {
    expect(document.body.firstChild.nodeName).toBe('H1');
  });

  test('Happy Path', () => {
    loadingBear();

    expect(document.body.firstChild.nodeName).toBe('DIV');
  });

  test('Should call setTimeout two times', () => {
    jest.useFakeTimers();

    loadingBear();

    expect(setTimeout).toHaveBeenCalledTimes(2);
  });

  test('Should call setTimeout for the first time with 20ms', () => {
    jest.useFakeTimers();

    loadingBear();

    expect(setTimeout).toHaveBeenNthCalledWith(1, expect.any(Function), 20);
  });

  test('Should call setTimeout for the second time with 3000ms as default',
      () => {
        jest.useFakeTimers();

        loadingBear();

        expect(setTimeout).
            toHaveBeenNthCalledWith(2, expect.any(Function), 3000);
      });

  test(
      'Should call setTimeout for the second time with duration sent in options object',
      () => {
        jest.useFakeTimers();

        loadingBear({'duration': 8812});

        expect(setTimeout).
            toHaveBeenNthCalledWith(2, expect.any(Function), 8812);
      });
});
