export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type DeleteButtonProps = {
  todoId: number | string;
  onDeleteSuccess: (todoId: number | string) => void;
};
