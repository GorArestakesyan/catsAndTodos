import { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AppContext from "../../../context/AppContext";
import TodoItem from "./TodoItem";
function TodoList() {
  const { todos, setTodos } = useContext(AppContext);

  const handleDragAndDrop = (results) => {
    const { source, destination } = results;

    if (!destination) return;

    const reorderedStores = [...todos];

    const storeSourceIndex = source.index;
    const storeDestinatonIndex = destination.index;

    const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
    reorderedStores.splice(storeDestinatonIndex, 0, removedStore);

    return setTodos(reorderedStores);
  };
  return (
    <DragDropContext onDragEnd={handleDragAndDrop}>
      <Droppable droppableId="droppable-1" type="group">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flexBox"
          >
            {todos?.map((todo, index) => (
              <Draggable
                draggableId={todo.id.toString()}
                index={index}
                key={todo.id}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <TodoItem todo={todo} />
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TodoList;
