import { LayoutDashboard } from "@/components/animate-ui/icons/layout-dashboard";
import { Trash } from "@/components/animate-ui/icons/trash";
import { Search } from "./search";
import { useUsers } from "@/hooks/useUser";

export const TabsDemo = () => {
  const { users, loading, error } = useUsers();

  return (
    <>
      <Search />

      {/* Contenedor con scroll horizontal en pantallas pequeñas */}
      <div className="w-full overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-[700px] w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Nombre completo</th>
              <th className="px-6 py-3">Celular</th>
              <th className="px-6 py-3">Correo electrónico</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Acción</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {`${user.name} ${user.last_name}`}
                  </th>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.status}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button
                        title="Editar"
                        onClick={() => alert("Botón para editar")}
                        className="flex items-center justify-center size-10 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition"
                      >
                        <LayoutDashboard className="size-5 text-blue-500" />
                      </button>
                      <button
                        title="Eliminar"
                        onClick={() => alert("Botón para eliminar")}
                        className="flex items-center justify-center size-10 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition"
                      >
                        <Trash className="size-5 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
