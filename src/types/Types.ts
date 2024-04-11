export interface CardItem {
  id: number;
  header: string;
  description: string;
  icon: React.ElementType;
  route: string;
}

// slices
export interface userInfo {
  username: string;
  email: string;
}
