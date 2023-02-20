export type TelegramChannelCategory = 'broadcast' | 'chat' | 'predictions';

export interface TelegramChannel {
    id: string;
    name: string;
    description: string;
    category: TelegramChannelCategory;
    isPublic: boolean;
}