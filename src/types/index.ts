export type Message = {
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
  chatMessage: (content: string, username: string) => void;
}

export interface ServerToClientEvents {
  connectedUsers: (users: User[]) => void;
  typing: (username: string) => void;
  stopTyping: (username: string) => void;
  chatMessage: (content: string, username: string) => void;
}
