import type { TelegramChannel } from "./types";

export const channels: TelegramChannel[] = [
    {
        "id": "waknoti",
        "name": "이세돌 방송",
        "description": "뱅온, 방제 변경, Just Chatting을 제외한 카테고리 변경",
        "category": "broadcast",
        "isPublic": true
    },
    {
        "id": "waknoti_chat",
        "name": "이세돌 채팅",
        "description": "이세돌, 우왁굳의 채팅",
        "category": "chat",
        "isPublic": true
    }
];
