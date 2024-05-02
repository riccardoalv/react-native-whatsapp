const chatData = [
  { id: 1, name: "Thaun 💕", lastMessage: "whatsAppCall.png", silenced: false, pinned: true, unreadNotifications: 0, hour: "10:36", profileImage: require("./assets/images/whatsapp/profiles/thaun.png") },
  { id: 2, name: "Walace", lastMessage: "rlx", silenced: false, pinned: false, unreadNotifications: 2, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/walace.png") },
  { id: 3, name: "Joao Henrique", lastMessage: "Pensou muito", silenced: false, pinned: false, unreadNotifications: 3, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/no-profile.png") },
  { id: 4, name: "Volei Titanica", lastMessage: "Leonardo Nakayama changed group description. Click to view", silenced: true, pinned: true, unreadNotifications: 4, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/volei.png") },
  { id: 5, name: "Computacao 2023", lastMessage: "asdfadsfasdfdas", silenced: true, pinned: false, unreadNotifications: 5, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/computacao.jpg") },
  { id: 6, name: "Thaun 💕", lastMessage: "whatsAppCall.png", silenced: false, pinned: true, unreadNotifications: 6, hour: "10:36", profileImage: require("./assets/images/whatsapp/profiles/thaun.png") },
  { id: 7, name: "Walace", lastMessage: "rlx", silenced: false, pinned: false, unreadNotifications: 7, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/walace.png") },
  { id: 8, name: "Joao Henrique", lastMessage: "Pensou muito", silenced: false, pinned: false, unreadNotifications: 8, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/no-profile.png") },
  { id: 9, name: "Volei Titanica", lastMessage: "Leonardo Nakayama changed group description. Click to view", silenced: true, pinned: false, unreadNotifications: 9, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/volei.png") },
  { id: 10, name: "Computacao 2023", lastMessage: "asdfadsfasdfdas", silenced: true, pinned: false, unreadNotifications: 10, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/computacao.jpg") },
  { id: 11, name: "Thaun 💕", lastMessage: "whatsAppCall.png", silenced: false, pinned: true, unreadNotifications: 11, hour: "10:36", profileImage: require("./assets/images/whatsapp/profiles/thaun.png") },
  { id: 12, name: "Walace", lastMessage: "rlx", silenced: false, pinned: false, unreadNotifications: 12, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/walace.png") },
  { id: 13, name: "Joao Henrique", lastMessage: "Pensou muito", silenced: false, pinned: false, unreadNotifications: 13, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/no-profile.png") },
  { id: 14, name: "Volei Titanica", lastMessage: "Leonardo Nakayama changed group description. Click to view", silenced: true, pinned: false, unreadNotifications: 14, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/volei.png") },
  { id: 15, name: "Computacao 2023", lastMessage: "asdfadsfasdfdas", silenced: true, pinned: false, unreadNotifications: 102, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/computacao.jpg") },
]

const archivedMessages = [
  { id: 1, name: "Thaun 💕", lastMessage: "whatsAppCall.png", silenced: false, pinned: true, unreadNotifications: 0, hour: "10:36", profileImage: require("./assets/images/whatsapp/profiles/thaun.png") },
  { id: 2, name: "Walace", lastMessage: "rlx", silenced: false, pinned: false, unreadNotifications: 2, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/walace.png") },
  { id: 3, name: "Joao Henrique", lastMessage: "Pensou muito", silenced: false, pinned: false, unreadNotifications: 3, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/no-profile.png") },
  { id: 4, name: "Volei Titanica", lastMessage: "Leonardo Nakayama changed group description. Click to view", silenced: true, pinned: true, unreadNotifications: 4, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/volei.png") },
  { id: 5, name: "Computacao 2023", lastMessage: "asdfadsfasdfdas", silenced: true, pinned: false, unreadNotifications: 5, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/computacao.jpg") },
  { id: 6, name: "Thaun 💕", lastMessage: "whatsAppCall.png", silenced: false, pinned: true, unreadNotifications: 6, hour: "10:36", profileImage: require("./assets/images/whatsapp/profiles/thaun.png") },
  { id: 7, name: "Walace", lastMessage: "rlx", silenced: false, pinned: false, unreadNotifications: 7, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/walace.png") },
  { id: 8, name: "Joao Henrique", lastMessage: "Pensou muito", silenced: false, pinned: false, unreadNotifications: 8, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/no-profile.png") },
  { id: 9, name: "Volei Titanica", lastMessage: "Leonardo Nakayama changed group description. Click to view", silenced: true, pinned: false, unreadNotifications: 9, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/volei.png") },
  { id: 10, name: "Computacao 2023", lastMessage: "asdfadsfasdfdas", silenced: true, pinned: false, unreadNotifications: 10, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/computacao.jpg") },
  { id: 11, name: "Thaun 💕", lastMessage: "whatsAppCall.png", silenced: false, pinned: true, unreadNotifications: 11, hour: "10:36", profileImage: require("./assets/images/whatsapp/profiles/thaun.png") },
  { id: 12, name: "Walace", lastMessage: "rlx", silenced: false, pinned: false, unreadNotifications: 12, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/walace.png") },
  { id: 13, name: "Joao Henrique", lastMessage: "Pensou muito", silenced: false, pinned: false, unreadNotifications: 13, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/no-profile.png") },
  { id: 14, name: "Volei Titanica", lastMessage: "Leonardo Nakayama changed group description. Click to view", silenced: true, pinned: false, unreadNotifications: 14, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/volei.png") },
  { id: 15, name: "Computacao 2023", lastMessage: "asdfadsfasdfdas", silenced: true, pinned: false, unreadNotifications: 102, hour: "10:22", profileImage: require("./assets/images/whatsapp/profiles/computacao.jpg") },
]

const exampleChat = [
  { id: 1, hour: "10:32", system: true, fromMe: true, read: true, received: true, text: "Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more." },
  { id: 2, hour: "10:32", system: true, fromMe: false, read: true, received: true, text: "Today" },
  { id: 3, hour: "10:32", system: false, fromMe: true, read: true, received: true, text: "pensou no que eu falei?" },
  { id: 4, hour: "10:32", system: false, fromMe: false, read: true, received: true, text: "Sim" },
  { id: 5, hour: "10:32", system: false, fromMe: false, read: true, received: true, text: "Sim, eu vou largar a Giullia e ficar com voce" },
  { id: 6, hour: "10:32", system: false, fromMe: true, read: true, received: true, text: "eu te amo" },
  { id: 7, hour: "10:32", system: false, fromMe: false, read: true, received: true, text: "eu tbm" },
]


export { chatData, archivedMessages, exampleChat }
