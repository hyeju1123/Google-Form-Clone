import { atom } from "recoil";

export type ActionProps = {
  state: boolean;
  lastId: number | null;
};

export const popupState = atom<ActionProps>({
  key: "popup",
  default: { state: false, lastId: null },
});

export const cardFocusState = atom<number | null>({
  key: "cardFocus",
  default: 2,
});

export const actionSheetState = atom<ActionProps>({
  key: "actionSheet",
  default: { state: false, lastId: null },
});
