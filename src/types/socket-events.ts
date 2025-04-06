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
