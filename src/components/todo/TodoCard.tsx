import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import UpdateTodoModal from "./UpdateTodoModal";

type TTodoCardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: string;
};

const TodoCard = ({ title, description, _id, isCompleted, priority }: TTodoCardProps) => {
  const [updateTodo, { data, isLoading, isError, isSuccess }] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  //const dispatch = useAppDispatch();

  console.log({ data }, isLoading, isError, isSuccess);

  const toggleComplete = () => {
    //dispatch(todoComplete(id));
    const options = {
      id: _id,
      data: {
        title,
        description,
        priority,
        isCompleted: !isCompleted,
      },
    };

    updateTodo(options);
  };

  return (
    <div className='p-3 flex items-center justify-between rounded-md border shadow-md shadow-gray-200'>
      <Input
        onChange={toggleComplete}
        type='checkbox'
        name='complete'
        id='complete'
        className='w-fit'
        defaultChecked={isCompleted}
      />
      <p className='font-bold flex-1 ml-3'>{title}</p>
      <p
        className={` flex-1
      
      `}
      >
        <span
          className={`size-3 rounded-full inline-block mr-2
        ${priority === "High" ? "bg-red-500" : null}
        ${priority === "Medium" ? "bg-yellow-500" : null}
        ${priority === "Low" ? "bg-green-500" : null}`}
        ></span>
        {priority}
      </p>
      <div className='flex-1'>
        {isCompleted ? (
          <span className='text-green-500'>Done</span>
        ) : (
          <span className='text-red-500'>Pending</span>
        )}
      </div>
      <p className='flex-1'>{description.slice(0, 20)}</p>
      <div className='space-x-4'>
        <Button onClick={() => deleteTodo(_id)} size='icon'>
          <Trash2 />
        </Button>
        <UpdateTodoModal id={_id} />
      </div>
    </div>
  );
};

export default TodoCard;
