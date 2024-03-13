export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type DeleteButtonProps = {
  todoId: number | string;
};

export type ToggleButtonProps = {
  todo: Todo;
};
