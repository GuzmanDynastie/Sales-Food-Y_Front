import TypeRepository from "@/repositiry/TypeRepository";
import type {
  NewType,
  UpdateType,
  GetTypeById,
  GetAllTypes,
  DeleteType,
} from "@/types/Type";

const typeService = {
  getAllTypes: async (): Promise<GetAllTypes> => {
    return await TypeRepository.getAll();
  },

  getType: async (id: number): Promise<GetTypeById> => {
    return await TypeRepository.getById(id);
  },

  createType: async (data: NewType): Promise<GetTypeById> => {
    return await TypeRepository.create(data);
  },

  updateType: async (id: number, data: UpdateType): Promise<GetTypeById> => {
    return await TypeRepository.update(id, data);
  },

  deleteUser: async (data: DeleteType): Promise<GetTypeById> => {
    return await TypeRepository.remove(data);
  },
};

export default typeService;
