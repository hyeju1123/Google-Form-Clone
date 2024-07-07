import { atom, atomFamily, selectorFamily } from "recoil";

export type ItemProps = {
  itemId: number;
  checked: boolean;
};

export type AnswerProps = {
  _id: number;
  items: boolean[];
};

export const EmptyAnswer: AnswerProps = {
  _id: 0,
  items: [false],
};

export const answersState = atom<AnswerProps[]>({
  key: "answers",
  default: [EmptyAnswer],
});

export const answerState = atomFamily<AnswerProps, number>({
  key: "answer",
  default: selectorFamily({
    key: "answerSelector",
    get:
      id =>
      ({ get }) => {
        const itemList = get(answersState);
        const item = itemList.find(({ _id }) => _id === id) || EmptyAnswer;
        return item;
      },
  }),
});
