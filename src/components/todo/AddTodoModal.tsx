import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddTodoMutation } from "@/redux/api/api";
import { FormEvent, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const AddTodoModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  //const dispatch = useAppDispatch();

  const [addTodo, { data, isLoading, isError, isSuccess }] = useAddTodoMutation();
  console.log({ data }, isLoading, isError, isSuccess);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    //const id = Math.random().toString(36).substring(2, 7);

    const todoData = {
      title,
      description,
      priority,
      isCompleted: false,
    };
    console.log(todoData);
    //! for local
    //dispatch(addTodo(todoData));
    addTodo(todoData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Todo</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Tasks</DialogTitle>
            <DialogDescription>Add a tasks that you want to finish</DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='task' className='text-right'>
                Task
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id='task'
                placeholder='Task'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'>
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id='description'
                placeholder='Description'
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right'>Priority</Label>
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className='col-span-full'>
                  <SelectValue placeholder='Select a fruit' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='High'>High</SelectItem>
                    <SelectItem value='Medium'>Medium</SelectItem>
                    <SelectItem value='Low'>Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type='submit'>Add Task</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default AddTodoModal;
