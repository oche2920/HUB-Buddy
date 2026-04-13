export interface Community {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  memberCount: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  walletAddress?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
