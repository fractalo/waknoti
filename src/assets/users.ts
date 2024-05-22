export interface User {
    id: string;
    name: string;
    twitchLoginName?: string;
    afreecatvUserId?: string;
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
        afreecatvUserId: "ecvhao",
    },
    {
        id: "ine",
        name: "아이네",
        twitchLoginName: "vo_ine",
        afreecatvUserId: "inehine",
    },
    {
        id: "jingburger",
        name: "징버거",
        twitchLoginName: "jingburger",
        afreecatvUserId: "jingburger1",
    },
    {
        id: "lilpa",
        name: "릴파",
        twitchLoginName: "lilpaaaaaa",
        afreecatvUserId: "lilpa0309",
    },
    {
        id: "jururu",
        name: "주르르",
        twitchLoginName: "cotton__123",
        afreecatvUserId: "cotton1217",
    },
    {
        id: "gosegu",
        name: "고세구",
        twitchLoginName: "gosegugosegu",
        afreecatvUserId: "gosegu2",
    },
    {
        id: "viichan",
        name: "비챤",
        twitchLoginName: "viichan6",
        afreecatvUserId: "viichan6",
    }
];
