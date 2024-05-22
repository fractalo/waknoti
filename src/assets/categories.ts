import type { TelegramChannelCategory } from "./telegramChannels/types";

export type TelegramChannelCategoryTab = TelegramChannelCategory | 'all';

export const categoryTabNames: Record<TelegramChannelCategoryTab, string> = {
    'all': '전체',
    'broadcast': '방송',
    'chat': '채팅',
    'predictions': '토토',
    'cafe': '카페',
    'comprehensive': '종합',
};