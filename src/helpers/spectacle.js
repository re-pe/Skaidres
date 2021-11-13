import Element from './element.js';

const entries = Object.entries(Spectacle).map((element)=>(
    [element[0], (...args) => Element(element[1], ...args)]
));

const Helpers = Object.fromEntries(entries);

export default Helpers;
