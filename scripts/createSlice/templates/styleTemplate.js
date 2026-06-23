const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = (componentName) => {
    const component = firstCharToUpperCase(componentName);

    return `.${component} {
    }`;
};
