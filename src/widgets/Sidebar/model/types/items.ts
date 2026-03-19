import { RoutePath } from 'shared/config/rootConfig/rootConfig';
import Home from 'shared/assets/icons/home.svg';
import Info from 'shared/assets/icons/info.svg';
import Avatar from 'shared/assets/icons/avatar.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: Home,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: Info,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: Avatar,
    },
];
