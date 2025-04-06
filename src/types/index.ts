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
