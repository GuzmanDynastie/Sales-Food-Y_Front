export type Status = "active" | "inactive" | "";

export interface Product {
  readonly id: number;
  name: string;
  type_id: number;
  presentation_id: number;
  price: number;
  status: Status;
  cancelled_at: string | null;
}

export type NewProduct = Omit<Product, "id" | "status" | "cancelled_at">;

export type UpdateProduct = Partial<Omit<Product, "id" | "cancelled_at">>;
export type GetAllProducts = Product[];
export type GetProductById = Product;
export type DeleteProduct = Pick<Product, "id">;
