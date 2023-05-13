export interface User {
    id: string;
    name: string;
    twitchLoginName?: string;
}

export const users: User[] = [
    {
        id: "common",
        name: "공통",
    },
    {
        id: "woowakgood",
        name: "우왁굳",
        twitchLoginName: "woowakgood",
    },
    {
        id: "ine",
        name: "아이네",
        twitchLoginName: "vo_ine",
    },
    {
        id: "jingburger",
        name: "징버거",
        twitchLoginName: "jingburger",
    },
    {
        id: "lilpa",
        name: "릴파",
        twitchLoginName: "lilpaaaaaa",
    },
    {
        id: "jururu",
        name: "주르르",
        twitchLoginName: "cotton__123",
    },
    {
        id: "gosegu",
        name: "고세구",
        twitchLoginName: "gosegugosegu",
    },
    {
        id: "viichan",
        name: "비챤",
        twitchLoginName: "viichan6",
    }
];
