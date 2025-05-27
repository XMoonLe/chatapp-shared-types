export type Message = {
  withImage?: boolean;
  image?: {
    url: string;
    height: number;
    width: number;
  };
  withAudio?: boolean;
  audio?: {
    url: string;
  };
  userId: string;
  username: string;
  content: string;
};

export type User = {
  userId: string;
  username: string;
};

export interface AudioData {
  url: string;
  username: string;
  userId: string;
  timestamp: number;
}

export interface ClientToServerEvents {
  userConnected: (user: User) => void;
  typing: (username: string) => void;
  stopTyping: (username: string) => void;
  chatMessage: (message: Message) => void;
  "chat:sending-image": (username: string) => void;
  "chat:image-sended": (username: string) => void;
  "chat:recording-audio": (username: string) => void;
  "chat:stop-recording-audio": (username: string) => void;
}

export interface ServerToClientEvents {
  connectedUsers: (users: User[]) => void;
  typing: (username: string) => void;
  stopTyping: (username: string) => void;
  chatMessage: (message: Message) => void;
  "chat:sending-image": (username: string) => void;
  "chat:image-sended": (username: string) => void;
  "audio:available": (data: AudioData) => void;
  "chat:recording-audio": (username: string) => void;
  "chat:stop-recording-audio": (username: string) => void;
}
