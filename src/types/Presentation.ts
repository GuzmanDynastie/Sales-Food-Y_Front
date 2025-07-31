export type Status = "active" | "inactive" | "";

export interface Presentation {
  readonly id: number;
  description: string;
  status: Status;
  cancelled_at: string | null;
}

export type NewPresentation = Omit<
  Presentation,
  "id" | "status" | "cancelled_at"
>;

export type UpdatePresentation = Partial<
  Omit<Presentation, "id" | "cancelled_at">
>;
export type GetAllPresentations = Presentation[];
export type GetPresentationById = Presentation;
export type DeletePresentation = Pick<Presentation, "id">;
