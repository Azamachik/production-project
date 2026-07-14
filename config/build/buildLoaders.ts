import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // const typescriptLoader: webpack.RuleSetRule = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const cssLoader: webpack.RuleSetRule = buildCssLoaders(isDev);

    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const codeBabelLoader = buildBabelLoader({isDev, isTsx: false});
    const tsxCodeBabelLoader = buildBabelLoader({isDev, isTsx: true});

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
    ];
}
