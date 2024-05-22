import type { TelegramChannel } from "./types";

export const channels: TelegramChannel[] = [
    {
        id: "waknoti",
        name: "이세돌 알림 (이세돌+우왁굳)",
        descriptions: [
            "방송: 뱅온, 방제 변경 알림",
            "카페: 왁물원 공지사항, 왁스코드 새 글 알림"
        ],
        category: "comprehensive",
        isPublic: true,
    },
    {
        id: "waknoti_all",
        name: "이세돌 전체 알림 (이세돌+우왁굳)",
        descriptions: [
            "방송: 뱅온, 방제 변경, 카테고리 변경, 뱅종 알림",
            "카페: 왁물원 공지사항, 왁스코드 새 글 알림"
        ],
        category: "comprehensive",
        isPublic: true,
    },
    {
        id: "waknoti_broadcast",
        name: "이세돌 방송 (이세돌+우왁굳)",
        descriptions: [
            "뱅온, 방제 변경, 뱅종 알림",
        ],
        category: "broadcast",
        isPublic: true,
    },
    {
        id: "waknoti_cafe",
        name: "이세돌 카페 (이세돌+우왁굳)",
        descriptions: [
            "왁물원 공지사항, 왁스코드 새 글 알림"
        ],
        category: "cafe",
        isPublic: true,
    },
];
