import { useState, useEffect } from "react";
import userService from "@/services/userService";
import type {
  NewUser,
  UpdateUser,
  GetUserById,
  GetAllUsers,
  DeleteUser,
} from "@/types/User";

export function useUsers() {
  const [users, setUsers] = useState<GetAllUsers>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    userService
      .getAllUsers()
      .then(setUsers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
}

export function useCreateUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = async (user: NewUser): Promise<GetUserById | null> => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await userService.createUser(user);
      return newUser;
    } catch (err: any) {
      setError(err.message || "Error");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, createUser };
}

export function useGetUserById() {
  const [user, setUser] = useState<GetUserById | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUserById = async (id: number): Promise<GetUserById | null> => {
    setLoading(true);
    setError(null);
    try {
      const fetchedUser = await userService.getUser(id);
      setUser(fetchedUser);
      return fetchedUser;
    } catch (err: any) {
      setError(err.message || "Error fetching user");
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, getUserById };
}

export function useUpdateUser() {
  const [user, setUser] = useState<GetUserById | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateUser = async (
    id: number,
    userData: UpdateUser
  ): Promise<GetUserById | null> => {
    setLoading(true);
    setError(null);
    try {
      const fetchedUser = await userService.updateUser(id, userData);
      setUser(fetchedUser);
      return fetchedUser;
    } catch (err: any) {
      setError(err.message || "Error updating user");
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, updateUser };
}

export function useDeleteUser() {
  const [user, setUser] = useState<GetUserById | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteUser = async (id: number): Promise<DeleteUser | null> => {
    setLoading(true);
    setError(null);
    try {
      const deletedUser = await userService.deleteUser({ id });
      setUser(deletedUser);
      return deletedUser;
    } catch (err: any) {
      setError(err.message || "Error deleting user");
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, deleteUser };
}
