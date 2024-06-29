import { atom, atomFamily, selectorFamily } from "recoil";

export const TITLE_ID = 1;

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
  items: ItemProps[];
  focused: boolean;
};

const EmptyQuestion = {
  _id: 0,
  title: "",
  placeholder: "",
  items: [
    {
      parentId: 0,
      itemTitle: "",
      placeholder: "",
      focused: false,
      checked: false,
    },
  ],
  focused: false,
};

export const DefaultQuestion = [
  {
    _id: TITLE_ID,
    title: "제목 없는 설문지",
    placeholder: "설문지 제목",
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
    _id: 2,
    title: "제목없는 질문",
    placeholder: "설문지 제목",
    items: [
      {
        parentId: 2,
        itemTitle: "옵션 1",
        placeholder: "",
        focused: false,
        checked: false,
      },
    ],
    focused: false,
  },
];

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
