import type { TelegramChannel } from './types';

import {channels as commonChannels} from './common';
import {channels as ineChannels} from './ine';
import {channels as jingburgerChannels} from './jingburger';
import {channels as lilpaChannels} from './lilpa';
import {channels as jururuChannels} from './jururu';
import {channels as goseguChannels} from './gosegu';
import {channels as viichanChannels} from './viichan';
import {channels as woowakgoodChannels} from './woowakgood';


const telegramChannelLists = new Map<string, TelegramChannel[]>();

telegramChannelLists.set('common', commonChannels);
telegramChannelLists.set('ine', ineChannels);
telegramChannelLists.set('jingburger', jingburgerChannels);
telegramChannelLists.set('lilpa', lilpaChannels);
telegramChannelLists.set('jururu', jururuChannels);
telegramChannelLists.set('gosegu', goseguChannels);
telegramChannelLists.set('viichan', viichanChannels);
telegramChannelLists.set('woowakgood', woowakgoodChannels);

export {
    telegramChannelLists
};