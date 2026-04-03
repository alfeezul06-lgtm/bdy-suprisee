const CONFIG = {

    name: "Damia !!",
    photo: "./img/bdycat.jpeg",
    music: "./music/audio.mp3", 

    colors: {
        primary: "#f472b6",
        accent: "#60a5fa",
        dark: {
            background: "#0f172a",
            text: "#f1f5f9",
        },
        light: {
            background: "#fafaf9",
            text: "#1e293b",
        },
    },

    defaultMode: "dark",

    sections: [
        {
            type: "greeting",
            title: "Hi",
            subtitle: "I really like your name btw!",
        },
        {
            type: "countdown",
            from: 3,
            goText: "🎉"
        },
        {
            type: "announcement",
            text: "It's your birthday!! :D",
        },
        {
            type: "chatbox",
            message: "Happy birthday to youu!! Wishing you a wonderful year ahead filled with joy, love, and endless happiness!",
            buttonText: "Send",
        },
        {
            type: "ideas",
            lines: [
                "That's what I was going to do.",
                "But then I stopped.",
                "I realised, I wanted to do something <strong>special</strong>.",
            ],
            bigLetters: "SO",
        },
        {
            type: "quote",
            text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
            author: "Oprah Winfrey",
        },
        {
            type: "stars",
            count: 40,
        },
        {
            type: "balloons",
            count: 25,
        },
        {
            type: "profile",
            wishTitle: "Happy Birthday Damia!!",
            wishText: "Wishing you a day filled with love, laughter, and unforgettable moments. Happy birthday!!",
        },
        {
            type: "ideas",
            lines: [
                "Gudluck for your exams!!",
                "Dont put too much pressure on yourself, just do your best and everything will be fine!!",
                "I know you will do great!!",
            ],
             bigLetters: "GOOD LUCK",
        },
        {
            type: "fireworks",
            count: 24,
        },
        {
            type: "confetti",
            count: 9,
        },
        {
            type: "closing",
            text: "Okay, now come back and tell me if you liked it!!",
            replayText: "Or click, if you want to watch it again.",
        },
    ],
};