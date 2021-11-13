import Element from './element.js';

const tagNames = ['div', 'i', 'li', 'ol'];
const entries = tagNames.map(
    (key) => [key, (...args) => Element(key, ...args)],
);

const Tags = Object.fromEntries(entries);

const Fragment = Element()

export { Tags as default, Element };
