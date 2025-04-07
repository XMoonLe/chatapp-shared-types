export type Message = {
  userId: string;
  username: string;
  content: string;
};

export type User = {
  userId: string;
  username: string;
  isTyping: boolean;
};

export interface ClientToServerEvents {
  userConnected: (username: string, userId: string) => void;
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
