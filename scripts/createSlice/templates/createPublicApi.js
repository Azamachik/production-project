const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = async (layer, sliceName) => {
    const componentName = firstCharToUpperCase(sliceName);
    const schemaName = `${sliceName}Schema`;

    try {
        await fs.writeFile(
            resolveRoot('src', layer, sliceName, 'index.ts'),
            `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${firstCharToUpperCase(schemaName)} } from './model/types/${schemaName}';`,
        );
    } catch (e) {
        console.log('Не удалось создать PUBLIC API');
    }
};
