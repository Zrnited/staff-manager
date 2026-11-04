export interface ApiResponse<T> {
  status: boolean;
  status_code: number;
  message: string;
  data: T;
}

export interface ApiListResponse<T> {
  status: boolean;
  status_code: number;
  message: string;
  data: T[];
}
