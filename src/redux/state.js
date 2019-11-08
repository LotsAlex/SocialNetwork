let state = {
    messagesPage: {
        dialogs: [
            {id: 1, name: "Vova"},
            {id: 2, name: "Sasha"},
            {id: 3, name: "Serega"},
            {id: 4, name: "Lesha"},
            {id: 5, name: "Petya"},
            {id: 6, name: "Kolya"},
            {id: 7, name: "Vasya"},
            {id: 8, name: "Zhora"}
        ],
        messages: [
            {id: 0, message: "Hi!"},
            {id: 1, message: "How are your it-kamasutra?"},
            {id: 2, message: "Yow!"},
            {id: 3, message: "WOW!"}
        ]
    },
    profilePage: {
        posts: [
            {id: 0, post: "Hi, how are you?", likesCount: 0},
            {id: 1, post: "It's my first post!", likesCount: 55}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: "Vova"},
            {id: 2, name: "Mila"},
            {id: 3, name: "Kesha"},
            {id: 4, name: "Raya"},
            {id: 5, name: "Olga"},
            {id: 5, name: "Vanya"},
            {id: 6, name: "Uliana"}
        ]
    }

}

export default state;