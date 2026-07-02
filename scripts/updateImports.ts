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

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((importDecl) => {
        const value = importDecl.getModuleSpecifierValue();
        if (isAbsolutePath(value)) {
            importDecl.setModuleSpecifier(`@/${value}`);
        }
        console.log(importDecl.getModuleSpecifierValue());
    });
});

project.save();
