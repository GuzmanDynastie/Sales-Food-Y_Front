export type Status = "active" | "inactive" | "";

export interface Type {
  readonly id: number;
  name: string;
  status: Status;
  cancelled_at: string | null;
}

export type NewType = Omit<Type, "id" | "status" | "cancelled_at">;

export type UpdateType = Partial<Omit<Type, "id" | "cancellet_at">>;
export type GetAllTypes = Type[];
export type GetTypeById = Type;
export type DeleteType = Pick<Type, "id">;
