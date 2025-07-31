import api from "@/lib/axios";
import type {
  NewType,
  UpdateType,
  GetAllTypes,
  GetTypeById,
  DeleteType,
} from "@/types/Type";

const TypeRepository = {
  getAll: async (): Promise<GetAllTypes> => {
    const res = await api.get("/types");
    return res.data;
  },

  getById: async (id: number): Promise<GetTypeById> => {
    const res = await api.get(`/types/${id}`);
    return res.data;
  },

  create: async (type: NewType): Promise<GetTypeById> => {
    const res = await api.post("/types", type);
    return res.data;
  },

  update: async (id: number, type: UpdateType): Promise<GetTypeById> => {
    const res = await api.put(`/types/${id}`, type);
    return res.data;
  },

  remove: async ({ id }: DeleteType): Promise<GetTypeById> => {
    const res = await api.delete(`/types/${id}`);
    return res.data;
  },
};

export default TypeRepository;
