const fillOptions = require('../src/loading-bear').
    __get__('fillOptions');
const generateLBearContainer = require('../src/loading-bear').
    __get__('generateLBearContainer');
const generateLBear = require('../src/loading-bear').
    __get__('generateLBear');
const generateLBearInner = require('../src/loading-bear').
    __get__('generateLBearInner');
const loadingBear = require('../src/loading-bear').
    __get__('loadingBear');

describe('function fillOptions', () => {
  test('Empty object should be filled with default values', () => {
    const defaultOptions = fillOptions({});

    expect(defaultOptions.duration).toBe(3000);
    expect(defaultOptions.height).toBe('40px');
    expect(defaultOptions.lBearContainerClass).toBe('');
    expect(defaultOptions.lBearClass).toBe('');
    expect(defaultOptions.lBearInnerClass).toBe('');
  });

  test('Empty object should not remain empty', () => {
    const defaultOptions = fillOptions({});

    expect(defaultOptions).not.toEqual({});
  });

  test('Object with values should keep its initial values', () => {
    const initialOptions =
        {
          'duration': 3000,
          'height': '20px',
          'lBearContainerClass': 'container d-flex align-items-center',
          'lBearClass': 'progress',
          'lBearInnerClass': 'progress-bar progress-bar-striped bg-primary progress-bar-animated',
        };
    let filledOptions = fillOptions({});

    expect(filledOptions.duration).toEqual(initialOptions.duration);
  });
});

describe('function generateLBearContainer', () => {
  test('Happy Path', () => {
    const options = {'lBearContainer': ''};
    const lBearContainer = generateLBearContainer(options);

    expect(typeof lBearContainer === 'object').toBeTruthy();
  });
});

describe('function generateLBear', () => {
  test('Happy Path', () => {
    const options = {'lBear': ''};
    const lBear = generateLBear(options);

    expect(typeof lBear === 'object').toBeTruthy();
  });
});

describe('function generateLBearInner', () => {
  test('Happy Path', () => {
    const options = {'lBearInner': ''};
    const lBearInner = generateLBearInner(options);

    expect(typeof lBearInner === 'object').toBeTruthy();
  });
});

describe('function loadingBear', () => {
  beforeEach(() => {
    const headingNode = document.createElement("h1");
    const textNode = document.createTextNode("SWAG");
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
});
