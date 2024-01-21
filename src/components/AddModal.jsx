import { Drawer } from "vaul";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddForm from "./AddForm";

export default function AddModal() {
  return (
    <Drawer.Root className="z-50">
      <Drawer.Trigger className="bg-transparent px-2 py-2 fixed bottom-0 right-0 m-5">
          <IoIosAddCircleOutline size={32} />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content className="bg-zinc-800 flex flex-col rounded-t-[10px] h-[90%] mt-24 fixed bottom-0 left-0 right-0 z-50 p-5">
          <AddForm/>
        </Drawer.Content>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      </Drawer.Portal>
    </Drawer.Root>
  );
}
