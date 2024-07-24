import create from "zustand";
import { UserEntity } from "../types/user";

interface UserState {
  users: UserEntity[];
  addUser: (user: UserEntity) => void;
  updateUser: (id: string, updatedUser: UserEntity) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  updateUser: (id, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      ),
    })),
}));
