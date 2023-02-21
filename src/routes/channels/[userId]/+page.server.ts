import { error, type Load } from "@sveltejs/kit"
import { telegramChannelLists } from '../../../assets/telegramChannels';
import { users } from '../../../assets/users';

export const load: Load = ({params}) => {
    const user = users.find((user) => user.id === params.userId);
    const channels = telegramChannelLists.get(user?.id || '');

    if (!user || !channels) throw error(404);

    return {
        user,
        channels
    };
};