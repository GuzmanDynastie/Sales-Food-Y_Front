import UserRepository from "@/repositiry/UserRepository";
import type {
  NewUser,
  UpdateUser,
  GetUserById,
  GetAllUsers,
  DeleteUser,
} from "@/types/User";

const userService = {
  getAllUsers: async (): Promise<GetAllUsers> => {
    return await UserRepository.getAll();
  },

  getUser: async (id: number): Promise<GetUserById> => {
    return await UserRepository.getById(id);
  },

  createUser: async (data: NewUser): Promise<GetUserById> => {
    return await UserRepository.create(data);
  },

  updateUser: async (id: number, data: UpdateUser): Promise<GetUserById> => {
    return await UserRepository.update(id, data);
  },

  deleteUser: async (data: DeleteUser): Promise<GetUserById> => {
    return await UserRepository.remove(data);
  },
};

export default userService;
