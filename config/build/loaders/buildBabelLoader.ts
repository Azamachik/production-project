import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";

interface BabelLoaderProps {
    isDev: boolean;
    isTsx: boolean;
}

export function buildBabelLoader({isDev, isTsx} : BabelLoaderProps) {
    return {
        test: isTsx ? /\.(tsx|jsx)$/ : /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                targets: 'defaults',
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: false,
                            saveMissing: true,
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                        },
                    ],
                    // [             
                    //     "@babel/plugin-transform-typescript", 
                    //     {
                    //         isTSX: isTsx,
                    //     }
                    // ],
                    "@babel/plugin-transform-runtime",
                    isTsx && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid']
                        }
                    ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
