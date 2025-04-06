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
  userConnected: {
    username: string;
    userId: string;
  };
  typing: {
    userId: string;
    username: string;
  };
  stopTyping: {
    userId: string;
    username: string;
  };
  chatMessage: {
    username: string;
    content: string;
  };
}

export interface ServerToClientEvents {
  connectedUsers: {
    userId: string;
    username: string;
    ip: string;
  }[];
  typing: {
    userId: string;
    username: string;
  };
  stopTyping: {
    userId: string;
    username: string;
  };
  chatMessage: {
    username: string;
    content: string;
  };
}
