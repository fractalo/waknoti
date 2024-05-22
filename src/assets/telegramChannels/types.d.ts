export type TelegramChannelCategory = 'broadcast' | 'chat' | 'predictions' | 'cafe' | 'comprehensive';

export interface TelegramChannel {
    id: string;
    name: string;
    descriptions: string[];
    category: TelegramChannelCategory;
    isPublic: boolean;
}