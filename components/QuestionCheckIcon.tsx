import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SurveyType } from "@/recoil/QuestionState";
import { theme } from "@/styles/color";

export default function QuestionCheckIcon({
  surveyType,
}: {
  surveyType: SurveyType;
}) {
  const show = surveyType === "radio" || surveyType === "checkbox";
  const name = surveyType === "radio" ? "circle-thin" : "square-o";
  return (
    <>
      {show && <FontAwesome name={name} size={20} color={theme.deepShadow} />}
    </>
  );
}
