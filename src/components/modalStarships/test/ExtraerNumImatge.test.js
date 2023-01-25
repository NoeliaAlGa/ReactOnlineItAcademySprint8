import ExtraerNumImatge from "../hook/ExtraerNumImatge";

describe("Extraer numero imagen", () => {
  
    test("Extraer numero imagen", () => {
        const url = "https://swapi.dev/api/starships/10/";
        const result = ExtraerNumImatge(url);
      expect(result).toBe("10");
    });
  });
  