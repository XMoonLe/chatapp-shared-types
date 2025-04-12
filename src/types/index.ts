export type Message = {
  withImage: boolean;
  image: {
    url: string;
    height: number;
    width: number;
  };
  userId: string;
  username: string;
  content: string;
};

export type User = {
  userId: string;
  username: string;
};

export interface ClientToServerEvents {
  userConnected: (user: User) => void;
  typing: (username: string) => void;
  stopTyping: (username: string) => void;
  chatMessage: (message: Message) => void;
  "chat:sending-image": (username: string) => void;
  "chat:image-sended": (username: string) => void;
}

export interface ServerToClientEvents {
  connectedUsers: (users: User[]) => void;
  typing: (username: string) => void;
  stopTyping: (username: string) => void;
  chatMessage: (message: Message) => void;
  "chat:sending-image": (username: string) => void;
  "chat:image-sended": (username: string) => void;
}
