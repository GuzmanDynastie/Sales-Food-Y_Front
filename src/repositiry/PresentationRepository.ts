import api from "@/lib/axios";
import type {
  NewPresentation,
  UpdatePresentation,
  GetAllPresentations,
  GetPresentationById,
  DeletePresentation,
} from "@/types/Presentation";

const PresentationRepository = {
  getAll: async (): Promise<GetAllPresentations> => {
    const res = await api.get(`/presentations`);
    return res.data;
  },

  getById: async (id: number): Promise<GetPresentationById> => {
    const res = await api.get(`/presentations/${id}`);
    return res.data;
  },

  create: async (presentation: NewPresentation): Promise<GetPresentationById> => {
    const res = await api.post("/presentations", presentation);
    return res.data;
  },

  update: async (
    id: number,
    presentation: UpdatePresentation
  ): Promise<GetPresentationById> => {
    const res = await api.put(`/presentations/${id}`, presentation);
    return res.data;
  },

  remove: async ({ id }: DeletePresentation): Promise<void> => {
    const res = await api.delete(`/presentations/${id}`);
    return res.data;
  },
};

export default PresentationRepository;
