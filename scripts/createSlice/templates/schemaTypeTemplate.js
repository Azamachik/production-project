const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = (componentName) => {
    const component = firstCharToUpperCase(componentName);

    return `export interface ${component}Schema {
    data?: [];
    isLoading: boolean;
    error?: string;
}`;
};
