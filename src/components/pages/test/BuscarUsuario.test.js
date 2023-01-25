import BuscarUsuario from "../hooks/BuscarUsuario";

describe("BuscarUsuario", () => {
    beforeEach(() => {
      // Inicializar el localStorage antes de cada test
      window.localStorage.setItem("usuarios", JSON.stringify([
        { nombre: "Noelia", contraseña: "123" },
        { nombre: "Ivan", contraseña: "456" }
      ]));
    });
  
    test("Encontrar un usuario existente", () => {
      const result = BuscarUsuario("Noelia", "123");
      expect(result).toBe(true);
    });
  
    test("No encontrar un usuario inexistente", () => {
      const result = BuscarUsuario("Anna", "789");
      expect(result).toBe(false);
    });
  });
  