import { error } from "@sveltejs/kit"
import type { LayoutLoad } from "./$types";
import { telegramChannelLists } from '../../../assets/telegramChannels';
import { users } from '../../../assets/users';
import type { Tab } from "./types";
import { categoryTabNames, type TelegramChannelCategoryTab } from "../../../assets/categories";
import { includesString } from "../../../utils/typePredicates";




export const load = (async({ fetch, params }) => {
    const currentUser = users.find((user) => user.id === params.userId);
    const channels = telegramChannelLists.get(currentUser?.id || '');

    if (!currentUser || !channels) error(404);

    const validCategoryTabs: TelegramChannelCategoryTab[] = [
        'all', 
        ...new Set(channels.map(channel => channel.category))
    ];
    const currentCategoryTab = params.category || 'all';

    if (!includesString(validCategoryTabs, currentCategoryTab)) error(404);

    const categoryTabs: Tab[] = [];
    validCategoryTabs.forEach(categoryTab => categoryTabs.push({ id: categoryTab, name: categoryTabNames[categoryTab] }));

    const getFilteredChannels = () => {
        if (currentCategoryTab === 'all') {
            return channels;
        }
        return channels.filter(channel => channel.category === currentCategoryTab);
    };

    return {
        currentUser,
        channels: getFilteredChannels(),
        currentCategoryTab,
        categoryTabs,
    };
}) satisfies LayoutLoad;