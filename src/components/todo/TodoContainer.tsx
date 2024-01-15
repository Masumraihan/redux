import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useState } from "react";

type TTodo = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: string;
};

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  //const { todos } = useAppSelector((state) => state.todos);
  const { data: tasks, isLoading, isError } = useGetTodosQuery(priority);

  if (isLoading) {
    return <div>Loading .....</div>;
  }
  if (isError) {
    return "Error how geya 😌";
  }
  return (
    <div>
      <div className='flex items-center justify-between my-5'>
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className='bg-pri w-full h-full p-[4px] rounded-xl '>
        {!tasks.data.length ? (
          <div className='flex items-center justify-center p-5 rounded-md border shadow-md shadow-gray-200'>
            <p className='text-xl font-semibold'>There is no tasks pending</p>
          </div>
        ) : (
          <div className='rounded-lg space-y-3 p-5 bg-white'>
            {tasks?.data?.map((todo: TTodo, i: number) => (
              <TodoCard key={i} {...todo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
