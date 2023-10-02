import { useDrop } from "react-dnd";

const DropTarget = ({ onDrop, children }) => {
  const [, drop] = useDrop({
    accept: "TODO_ITEM",
    drop: (item) => {
      onDrop(item.id);
    },
  });

  return <div ref={drop}>{children}</div>;
};
export default DropTarget;
