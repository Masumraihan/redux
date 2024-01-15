import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type TTodoFIlterProps = {
  priority: string;
  setPriority: (newPriority: string) => void;
};
const TodoFilter = ({ priority, setPriority }: TTodoFIlterProps) => {
  //const dispatch = useAppDispatch();
  //React.useEffect(() => {
  //  dispatch(todoFilterByPriority(position));
  //}, [position, dispatch]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
          <DropdownMenuRadioItem value='High'>High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='Medium'>Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='Low'>Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
