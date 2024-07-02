import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { popupState } from "@/recoil/ActionState";

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
