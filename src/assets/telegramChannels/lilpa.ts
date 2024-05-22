import type { TelegramChannel } from "./types";

export const channels: TelegramChannel[] = [
    {
        id: "0pjMDlwiyOZmZjNl",
        name: "릴파 방송",
        descriptions: ["뱅온 알림"],
        category: "broadcast",
        isPublic: false
    },
    {
        id: "F0mWBWXRH184MjE1",
        name: "릴파 방송",
        descriptions: ["뱅온, 방제 변경 알림"],
        category: "broadcast",
        isPublic: false
    },
    {
        id: "KaqdB2U7zuAzZjI1",
        name: "릴파 방송",
        descriptions: ["뱅온, 뱅종, 방제 변경, 카테고리 변경 알림"],
        category: "broadcast",
        isPublic: false
    },
    {
        id: "zRQ2W3XbOSJmNmI1",
        name: "릴파 카페",
        descriptions: ["왁물원 공지사항, 왁스코드 새 글 알림"],
        category: "cafe",
        isPublic: false
    },
];