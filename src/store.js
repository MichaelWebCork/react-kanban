import { create } from "zustand";
import { v4 as uuid } from "uuid";

export const useListStore = create((set) => ({
  lists: {},
  addList: (title) => {
    const id = uuid();
    set((state) => ({
      lists: {
        ...state.lists,
        [id]: { id, title },
      },
    }));
  },
}));

export const useCardStore = create((set, get) => ({
  cards: {},
  addCard: (listId) => {
    const id = uuid();
    set((state) => ({
      cards: {
        ...state.cards,
        [listId]: [
          ...(state.cards?.[listId] || []),
          { id, title: "new card", text: "new card sample text" },
        ],
      },
    }));
  },

  cardsByListId: (listId) => get((state) => state.cards[listId] || []),
}));
