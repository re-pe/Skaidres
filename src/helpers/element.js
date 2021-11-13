const Element = (name, ...args) => {
    switch (true) {
        case args.length < 1:
        case React.isValidElement(args[0]):
        case typeof args[0] !== 'object':
        case args[0].constructor === undefined:
        case args[0].constructor.name !== 'Object':
            return React.createElement(name, {}, ...args);
        default:
            return React.createElement(name, ...args);
    }
};

export default Element;