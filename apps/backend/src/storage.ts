import { createStorage } from "unstorage";
import memoryDriver from "unstorage/drivers/memory";

import { SaveData } from "@types";

const storage = createStorage({
  driver: memoryDriver(),
});

export const api = {
  love: {
    get: async () => {
      return storage.getItem<SaveData>("api:love");
    },
    set: async (item: SaveData) => {
      return storage.setItem("api:love", item);
    },
  },
};

export default storage;
