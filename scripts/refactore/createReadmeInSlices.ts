import path from 'path';

import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');
project.addSourceFilesAtPaths('src/**/*.md');

const layers: Record<string, string> = {
    pages: 'Page',
    widgets: 'Widget',
    features: 'Feature',
    entities: 'Entity',
};

const files = project.getSourceFiles();

const createReadmeInSlices = (layer: string) => {
    if (!layer || !(layer in layers)) {
        return;
    }

    const pathToLayer = path.resolve(__dirname, '..', '..', 'src', `${layer}`);
    const layerDirs = project.getDirectory(pathToLayer);
    const slices = layerDirs?.getDirectories();

    slices?.forEach((slice) => {
        const pathToReadme = `${slice.getPath()}/README.md`;
        const readmeFile = slice?.getSourceFile(pathToReadme);

        if (!readmeFile) {
            const content = `## ${layers[layer]} ${slice.getBaseName()} is for .`;
            const file = slice.createSourceFile(pathToReadme, content, {
                overwrite: true,
            });
            file.save();
        }
    });
};

createReadmeInSlices('pages');
createReadmeInSlices('widgets');
createReadmeInSlices('features');
createReadmeInSlices('entities');

project.save();
