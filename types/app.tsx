export interface StateType {
  todo: string[];
  loading?: boolean;
}

export type ActionType =
  | { type: "STORAGE"; value: StateType }
  | { type: "ADD"; value: string }
  | { type: "REMOVE"; value: number };

export interface ContextType {
  state: StateType;
  dispatch?: React.Dispatch<ActionType>;
}
