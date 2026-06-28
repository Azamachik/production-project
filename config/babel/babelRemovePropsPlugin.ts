import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const removeList = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (removeList.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
