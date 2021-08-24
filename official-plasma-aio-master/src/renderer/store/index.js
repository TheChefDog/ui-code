import create from "zustand";

import genRandID from "../util/utils";

const useStore = create((set) => ({
  activeGroup: {
    id: "_kvwemd57w",
    name: "University Blue",
    taskCount: 6,
    storeName: "Footlocker",
    ItemSize: "10.5",
    ProfileName: "MasterCard",
  },
  taskGroups: [
    {
      id: "_kvwemd57w",
      name: "University Blue",
      taskCount: 8,
      storeName: "Footlocker",
      ItemSize: "10.5",
      ProfileName: "MasterCard",
    },
    {
      id: "_kvw356234w",
      name: "University Blue",
      taskCount: 16,
      storeName: "Footlocker",
      ItemSize: "10.5",
      ProfileName: "MasterCard",
    },
    {
      id: "_12324d57w",
      name: "University Blue",
      taskCount: 13,
      storeName: "Footlocker",
      ItemSize: "10.5",
      ProfileName: "MasterCard",
    },
  ],
  createTaskGroup: (group) =>
    set((state) => ({
      taskGroups: [...state.taskGroups, { id: genRandID(), ...group }],
    })),
  removeTaskGroup: (groupID) =>
    set((state) => ({
      taskGroups: state.taskGroups.filter((g) => g.id !== groupID),
    })),
  setActiveGroup: (groupID) =>
    set((state) => ({
      activeGroup: state.taskGroups.find((g) => g.id === groupID),
    })),
}));

export default useStore;
