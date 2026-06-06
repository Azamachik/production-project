import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import Article from 'shared/assets/icons/article.svg';
import Avatar from 'shared/assets/icons/avatar.svg';
import Home from 'shared/assets/icons/home.svg';
import Info from 'shared/assets/icons/info.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userAuthData) => {
        const sidebarItems: SidebarItemType[] = [
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
        ];
        if (userAuthData) {
            sidebarItems.push(
                {
                    path: RoutePath.profile + userAuthData.id,
                    text: 'Профиль',
                    Icon: Avatar,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Статьи',
                    Icon: Article,
                    authOnly: true,
                },
            );
        }
        return sidebarItems;
    },
);
