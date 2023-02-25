import { error } from "@sveltejs/kit"
import type { LayoutLoad } from "./$types";
import { telegramChannelLists } from '../../../assets/telegramChannels';
import { users } from '../../../assets/users';
import type { Tab } from "./types";


const categoryName: Record<string, string> = {
    'all': '전체',
    'broadcast': '방송',
    'chat': '채팅',
    'predictions': '토토'
};

export const load: LayoutLoad = ({params}) => {
    const currentUser = users.find((user) => user.id === params.userId);
    const channels = telegramChannelLists.get(currentUser?.id || '');

    if (!currentUser || !channels) throw error(404);

    const validCategories = new Set<string>(['all', ...channels.map(channel => channel.category)]);
    const currentCategory = params.category || 'all';

    if (!validCategories.has(currentCategory)) throw error(404);


    const categoryTabs: Tab[] = [];
    validCategories.forEach(category => categoryTabs.push({ id: category, name: categoryName[category] }));

    const getFilteredChannels = () => {
        if (currentCategory === 'all') {
            return channels;
        }
        return channels.filter(channel => channel.category === currentCategory);
    };

    return {
        currentUser,
        channels: getFilteredChannels(),
        currentCategory,
        categoryTabs,
    };
};