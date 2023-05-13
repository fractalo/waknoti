import { error } from "@sveltejs/kit"
import type { LayoutLoad } from "./$types";
import { telegramChannelLists } from '../../../assets/telegramChannels';
import { users } from '../../../assets/users';
import type { Tab } from "./types";
import { categoryNames } from "../../../assets/categories";




export const load = (async({ fetch, params }) => {
    const currentUser = users.find((user) => user.id === params.userId);
    const channels = telegramChannelLists.get(currentUser?.id || '');

    if (!currentUser || !channels) throw error(404);

    const validCategories = new Set<string>(['all', ...channels.map(channel => channel.category)]);
    const currentCategory = params.category || 'all';

    if (!validCategories.has(currentCategory)) throw error(404);


    const categoryTabs: Tab[] = [];
    validCategories.forEach(category => categoryTabs.push({ id: category, name: categoryNames[category] }));

    const getFilteredChannels = () => {
        if (currentCategory === 'all') {
            return channels;
        }
        return channels.filter(channel => channel.category === currentCategory);
    };

    const profileImageUrls = await fetch(`/api/twitch/profile-images`)
        .then(res => res.json())
        .catch(() => ({}));

    return {
        currentUser,
        channels: getFilteredChannels(),
        currentCategory,
        categoryTabs,
        profileImageUrls
    };
}) satisfies LayoutLoad;