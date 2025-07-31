import PresentationRepository from "@/repositiry/PresentationRepository";
import type {
  NewPresentation,
  UpdatePresentation,
  GetAllPresentations,
  GetPresentationById,
  DeletePresentation,
} from "@/types/Presentation";

const presentationService = {
  getAllPresentations: async (): Promise<GetAllPresentations> => {
    return await PresentationRepository.getAll();
  },

  getPresentation: async (id: number): Promise<GetPresentationById> => {
    return await PresentationRepository.getById(id);
  },

  createPresentation: async (
    data: NewPresentation
  ): Promise<GetPresentationById> => {
    return await PresentationRepository.create(data);
  },

  updatePresentation: async (
    id: number,
    data: UpdatePresentation
  ): Promise<GetPresentationById> => {
    return await PresentationRepository.update(id, data);
  },

  deletePresentation: async (id: DeletePresentation): Promise<void> => {
    return await PresentationRepository.remove(id);
  },
};

export default presentationService;
