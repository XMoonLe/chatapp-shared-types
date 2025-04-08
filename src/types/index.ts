export type Message = {
  withImage?: boolean;
  imageUrl?: string;
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
}

export interface ServerToClientEvents {
  connectedUsers: (users: User[]) => void;
  typing: (username: string) => void;
  stopTyping: (username: string) => void;
  chatMessage: (message: Message) => void;
}
