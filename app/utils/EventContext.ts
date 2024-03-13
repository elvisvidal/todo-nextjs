import React from "react";

const EventContext = React.createContext({
  onDelete: (todoId: number | string) => {},
  onCompleted: (todoId: number | string) => {},
});

export default EventContext;
