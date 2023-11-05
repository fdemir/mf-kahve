import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import {
  Card,
  CardTitle,
  Button,
  CardContent,
  CardDescription,
  CardHeader,
} from "@mf-kahve/ui";

export default function Cart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cart</CardTitle>
        <CardDescription>
          We are the cart team, we are the best!
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between">
          <Button role="button" variant="ghost" className="p-0 text-2xl">
            <AiOutlineShoppingCart />
          </Button>
          <Button role="button" variant="ghost" className="p-0 text-2xl">
            <AiOutlineDelete />
          </Button>
        </div>

        <Button className="w-full">Submit</Button>
      </CardContent>
    </Card>
  );
}
