export const chatroom = [
  {
    roomId: "1",
    roomName: "싸피친구들",
    masterId: "8",
    status: "online",
    userCount: 3
  },
  {
    roomId: "2",
    roomName: "싸피노인들",
    masterId: "8",
    status: "online",
    userCount: 5
  }
];

export const user = [
  {
    id: "7863a6802ez0e277a0f98534",
    name: "John Doe",
    avatar: "@/assets/images/faces/1.jpg",
    status: "online",
    chatInfo: [
      {
        chatId: "89564a680b3249760ea21fe77",
        contactId: "323sa680b3249760ea21rt47",
        contactName: "Frank Powell",
        unread: 4,
        lastChatTime: "2017-06-12T02:10:18.931Z"
      },
      {
        chatId: "3289564a680b2134760ea21fe7753",
        contactId: "14663a3406eb47ffa63d4fec9429cb71",
        contactName: "Betty Diaz",
        unread: 0,
        lastChatTime: "2017-06-12T02:10:18.931Z"
      }
    ]
  }
];
export const contacts = [
  {
    id: "323sa680b3249760ea21rt47",
    name: "Frank Powell",
    avatar: require("@/assets/images/faces/13.jpg"),
    status: "online",
    mood: ""
  },
  {
    id: "14663a3406eb47ffa63d4fec9429cb71",
    name: "Betty Diaz",
    avatar: require("@/assets/images/faces/12.jpg"),
    status: "online",
    mood: ""
  },
  {
    id: "43bd9bc59d164b5aea498e3ae1c24c3c",
    name: "Brian Stephens",
    avatar: require("@/assets/images/faces/3.jpg"),
    status: "online",
    mood: ""
  },
];
export const chatCollection = [
  {
    id: "89564a680b3249760ea21fe77",
    chats: [
      {
        contactId: "323sa680b3249760ea21rt47",
        text: "Do you ever find yourself falling into the “discount trap?”",
        time: "2018-02-32T08:45:28.291Z"
      },
      {
        contactId: "7863a6802ez0e277a0f98534",
        text: "Giving away your knowledge or product just to gain clients?",
        time: "2018-02-32T08:45:28.291Z"
      },
      {
        contactId: "323sa680b3249760ea21rt47",
        text: "Yes",
        time: "2018-02-32T08:45:28.291Z"
      },
      {
        contactId: "7863a6802ez0e277a0f98534",
        text: "Don’t feel bad. It happens to a lot of us",
        time: "2018-02-32T08:45:28.291Z"
      },
      {
        contactId: "323sa680b3249760ea21rt47",
        text: "Do you ever find yourself falling into the “discount trap?”",
        time: "2018-02-32T08:45:28.291Z"
      },
      {
        contactId: "7863a6802ez0e277a0f98534",
        text: "Giving away your knowledge or product just to gain clients?",
        time: "2018-02-32T08:45:28.291Z"
      },
      {
        contactId: "323sa680b3249760ea21rt47",
        text: "Yes",
        time: "2018-02-32T08:45:28.291Z"
      },
      {
        contactId: "7863a6802ez0e277a0f98534",
        text: "Don’t feel bad. It happens to a lot of us",
        time: "2018-02-32T08:45:28.291Z"
      }
    ]
  },
  {
    id: "3289564a680b2134760ea21fe7753",
    chats: [
      {
        contactId: "14663a3406eb47ffa63d4fec9429cb71",
        text: "Do you ever find yourself falling into the “discount trap?”",
        time: "2018-03-32T08:45:28.291Z"
      },
      {
        contactId: "7863a6802ez0e277a0f98534",
        text: "Giving away your knowledge or product just to gain clients?",
        time: "2018-03-32T08:45:28.291Z"
      },
      {
        contactId: "14663a3406eb47ffa63d4fec9429cb71",
        text: "Yes",
        time: "2018-03-32T08:45:28.291Z"
      },
      {
        contactId: "7863a6802ez0e277a0f98534",
        text: "Don’t feel bad. It happens to a lot of us",
        time: "2018-03-32T08:45:28.291Z"
      }
    ]
  }
];
