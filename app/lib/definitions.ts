export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type DeleteButtonProps = {
  todoId: number | string;
  onDeleteSuccess: (todoId: number | string) => void;
};

export type ToggleButtonProps = {
  todo: Todo;
  onCompleted: (todoId: number | string) => void;
};
