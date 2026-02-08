import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?: ReactNode;
    domNode?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        domNode = document.body,
        children,
    } = props;
    
    return createPortal(children, domNode);
};
