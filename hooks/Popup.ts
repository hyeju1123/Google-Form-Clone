import { popupState } from "@/recoil/ActionState";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export default function Popup() {
  const [showPopup, setShowPopup] = useRecoilState(popupState);

  const handlePopup = useCallback(
    (state: boolean, lastId: number | null) => {
      setShowPopup({ state, lastId });
    },
    [setShowPopup]
  );

  return { showPopup, handlePopup };
}
