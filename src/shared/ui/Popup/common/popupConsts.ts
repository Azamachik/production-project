import popupCls from './popup.module.scss';

export type DropdownDirection =
    | 'bottom left'
    | 'bottom right'
    | 'top right'
    | 'top left';

export const mapDirectionClasses: Record<DropdownDirection, string> = {
    'bottom left': popupCls.bottomLeft,
    'bottom right': popupCls.bottomRight,
    'top left': popupCls.topLeft,
    'top right': popupCls.topRight,
};
