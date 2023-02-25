import type { TelegramChannel } from "./types";

export const channels: TelegramChannel[] = [
    {
        id: "waknoti",
        name: "이세돌 방송 (이세돌+우왁굳)",
        description: "뱅온, 방제 변경, 카테고리 변경 (Just Chatting 제외)",
        category: "broadcast",
        isPublic: true,
    },
    {
        id: "waknoti_chat",
        name: "이세돌 채팅 (이세돌+우왁굳)",
        description: "우왁굳, 이세돌의 채팅",
        category: "chat",
        isPublic: true,
    }
];
