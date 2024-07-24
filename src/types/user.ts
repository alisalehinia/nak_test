export interface UserEntity {
  id?: string;
  name: string;
  userName: string;
  email: string;
  phone: string;
  status?: "active" | "not_active" | null;
}
