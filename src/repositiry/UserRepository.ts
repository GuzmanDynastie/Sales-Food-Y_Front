import api from "@/lib/axios";
import type {
  NewUser,
  UpdateUser,
  GetAllUsers,
  GetUserById,
  DeleteUser,
} from "@/types/User";

const UserRepository = {
  getAll: async (): Promise<GetAllUsers> => {
    const res = await api.get("/users");
    return res.data;
  },

  getById: async (id: number): Promise<GetUserById> => {
    const res = await api.get(`/users/${id}`);
    return res.data;
  },

  create: async (user: NewUser): Promise<GetUserById> => {
    const res = await api.post("/users", user);
    return res.data;
  },

  update: async (id: number, user: UpdateUser): Promise<GetUserById> => {
    const res = await api.put(`/users/${id}`, user);
    return res.data;
  },

  remove: async ({ id }: DeleteUser): Promise<GetUserById> => {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  },
};

export default UserRepository;
