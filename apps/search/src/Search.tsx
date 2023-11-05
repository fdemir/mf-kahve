import { Button, Card, Input } from "@mf-kahve/ui";
import { AiOutlineSearch } from "react-icons/ai";
export default function Search() {
  return (
    <Card className="flex items-center justify-center w-full p-4">
      <Button
        variant="ghost"
        className="p-0 px-2 text-xl hover:bg-transparent "
      >
        <AiOutlineSearch />
      </Button>
      <Input
        placeholder="Drink something?"
        className="border-0 shadow-none text-md focus-visible:ring-0"
      />
    </Card>
  );
}
