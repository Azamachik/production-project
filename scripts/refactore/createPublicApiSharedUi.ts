import path from 'path';

import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];

const isAbsolutePath = (path: string) => {
    if (path.startsWith('.')) return false;
    return layers.some((layer) => path.startsWith(layer));
};

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDir = project.getDirectory(uiPath);
const componentsDirs = sharedUiDir?.getDirectories();

componentsDirs?.forEach((componentDirs) => {
    const indexFilePath = `${componentDirs.getPath()}/index.ts`;
    const indexFile = componentDirs.getSourceFile(indexFilePath);
    const moduleName = componentDirs.getBaseName();

    if (!indexFile) {
        const code = `export ${moduleName} from './${moduleName}'`;
        const file = componentDirs.createSourceFile(indexFilePath, code, {
            overwrite: true,
        });

        file.save();
    }
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((importDecl) => {
        const value = importDecl.getModuleSpecifierValue();
        const valueWithNoAlias = value.replace('@/', '');
        const segments = valueWithNoAlias.split('/');
        const isSharedLayer = segments[0] === 'shared';
        const isUiSlice = segments[1] === 'ui';

        if (isSharedLayer && isUiSlice) {
            const newModuleName = valueWithNoAlias
                .split('/')
                .slice(0, 3)
                .join('/');
            importDecl.setModuleSpecifier(`@/${newModuleName}`);
        }
    });
});

project.save();
