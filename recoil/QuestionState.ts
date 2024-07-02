import { atom, atomFamily, selectorFamily } from "recoil";

export const TITLE_ID = 1;
const FIRST_QUESTION_IDX = 2;

export type SurveyType = "desc" | "short" | "long" | "radio" | "checkbox";
export type ExcludeDescSurveyType = Exclude<SurveyType, "desc">;

export type ItemProps = {
  parentId: number;
  itemTitle: string;
  placeholder: string;
  focused: boolean;
  checked: boolean;
};

export type QuestionProps = {
  _id: number;
  title: string;
  placeholder: string;
  surveyType: SurveyType;
  items: ItemProps[];
  focused: boolean;
};

export const EmptyQuestion: QuestionProps = {
  _id: 0,
  title: "질문",
  placeholder: "질문",
  surveyType: "radio",
  items: [
    {
      parentId: 0,
      itemTitle: "옵션 1",
      placeholder: "",
      focused: false,
      checked: false,
    },
  ],
  focused: false,
};

export const DefaultQuestion: QuestionProps[] = [
  {
    _id: TITLE_ID,
    title: "제목 없는 설문지",
    placeholder: "설문지 제목",
    surveyType: "desc",
    items: [
      {
        parentId: TITLE_ID,
        itemTitle: "",
        placeholder: "설문지 설명",
        focused: false,
        checked: false,
      },
    ],
    focused: false,
  },
  {
    _id: FIRST_QUESTION_IDX,
    title: "제목없는 질문",
    placeholder: "설문지 제목",
    surveyType: "radio",
    items: [
      {
        parentId: FIRST_QUESTION_IDX,
        itemTitle: "옵션 1",
        placeholder: "",
        focused: false,
        checked: false,
      },
    ],
    focused: false,
  },
];

export const indexState = atom<number>({
  key: "index",
  default: FIRST_QUESTION_IDX + 1,
});

export const questionsState = atom<QuestionProps[]>({
  key: "questions",
  default: DefaultQuestion,
});

export const questionState = atomFamily<QuestionProps, number>({
  key: "question",
  default: selectorFamily({
    key: "questionSelector",
    get:
      id =>
      ({ get }) => {
        const itemList = get(questionsState);
        const item = itemList.find(i => i._id === id) || EmptyQuestion;
        return item;
      },
  }),
});
