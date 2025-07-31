import { useState, useEffect } from "react";
import typeService from "@/services/typeService";
import type {
  NewType,
  UpdateType,
  GetTypeById,
  GetAllTypes,
  DeleteType,
} from "@/types/Type";

export function useTypes() {
  const [types, setTypes] = useState<GetAllTypes>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    typeService
      .getAllTypes()
      .then(setTypes)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { types, loading, error };
}

export function useCreateType() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createType = async (type: NewType): Promise<GetTypeById | null> => {
    setLoading(true);
    setError(null);
    try {
      const fetchedType = await typeService.createType(type);
      return fetchedType;
    } catch (err: any) {
      setError(err.message || "Error to create type");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, createType };
}

export function useGetTypeById() {
  const [type, setType] = useState<GetTypeById | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getTypeById = async (id: number): Promise<GetTypeById | null> => {
    setLoading(true);
    setError(null);
    try {
      const fetchedType = await typeService.getType(id);
      setType(fetchedType);
      return fetchedType;
    } catch (err: any) {
      setError(err.message || "Error to fetching type");
      setType(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { type, loading, error, getTypeById };
}

export function useUpdateType() {
  const [type, setType] = useState<GetTypeById | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateType = async (
    id: number,
    data: UpdateType
  ): Promise<GetTypeById | null> => {
    setLoading(true);
    setError(null);
    try {
      const updatedType = await typeService.updateType(id, data);
      setType(updatedType);
      return updatedType;
    } catch (err: any) {
      setError(err.message || "Error updating type");
      setType(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { type, loading, error, updateType };
}

export function useDeleteType() {
  const [type, setType] = useState<GetTypeById | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteType = async (id: number): Promise<DeleteType | null> => {
    setLoading(true);
    setError(null);
    try {
      const deletedType = await typeService.deleteUser({ id });
      setType(deletedType);
      return deletedType;
    } catch (err: any) {
      setError(err.message || "Error deleting type");
      setType(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { type, loading, error, deleteType };
}
