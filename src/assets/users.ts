export interface User {
    id: string;
    name: string;
    isGroup: boolean;
}

export const users: User[] = [
    {
        id: "common",
        name: "공통",
        isGroup: true
    },
    {
        id: "ine",
        name: "아이네",
        isGroup: false
    },
    {
        id: "jingburger",
        name: "징버거",
        isGroup: false
    },
    {
        id: "lilpa",
        name: "릴파",
        isGroup: false
    },
    {
        id: "jururu",
        name: "주르르",
        isGroup: false
    },
    {
        id: "gosegu",
        name: "고세구",
        isGroup: false
    },
    {
        id: "viichan",
        name: "비챤",
        isGroup: false
    },
    {
        id: "woowakgood",
        name: "우왁굳",
        isGroup: false
    }
];
