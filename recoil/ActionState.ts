import { atom } from "recoil";

type PopupProps = {
  state: boolean;
  lastId: number | null;
};

export const popupState = atom<PopupProps>({
  key: "popup",
  default: { state: false, lastId: null },
});
