import { StateType, ActionType } from "../types/app";

export const initialState = {
  todo: [],
  loading: true,
};

export const actionAppReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "STORAGE":
      return {
        ...state,
        todo: action.value.todo,
        loading: false,
      };
    case "ADD":
      if (!action.value) {
        return state;
      }
      if (state.todo.length === 7) {
        return state;
      }
      return {
        ...state,
        todo: [...state.todo, action.value],
      };
    case "REMOVE":
      return {
        ...state,
        todo: state.todo.filter((t, index: number) => index !== Number(action.value)),
      };
    default:
      return state;
  }
};
