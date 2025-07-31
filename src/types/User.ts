export type Status = "active" | "inactive" | "";

export interface User {
  readonly id: number;
  name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  status: Status;
  cancelled_at: string | null;
}

export type NewUser = Omit<User, "id" | "status" | "cancelled_at">;

export type UpdateUser = Partial<Omit<User, "id" | "cancelled_at">>;
export type GetAllUsers = Omit<User, "password">[];
export type GetUserById = Omit<User, "password">;
export type DeleteUser = Pick<User, "id">;
