export interface Members {
  id: string;
  round: string;
  name: string;
  gender: string;
  birthday: string;
  address: string;
  cellular: string;
  email: string;
  transportation: string[];
  win: boolean;
}

export interface SearchFilter {
  [key: string]: string;
}
