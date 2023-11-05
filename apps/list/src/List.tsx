/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// FIXME: Remove eslint-disable
import { Card } from "@mf-kahve/ui";
import { useQuery, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@mf-kahve/core";

const { useCartStore } = await import("cart/store").then((mod) => mod.default);

function List() {
  const { data, isLoading } = useQuery({
    queryKey: ["list-products"],
    queryFn: () =>
      fetch("http://localhost:3030/products", {
        method: "GET",
      }).then((res) => res.json()),
  });

  const addItem = useCartStore((state) => state.addItem);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Card className="w-full p-4 ">
      <div className="grid grid-cols-4 gap-4">
        {data.map((product: any) => (
          <div
            onClick={() => {}}
            key={product.id}
            className="flex flex-row justify-between p-4 rounded-md cursor-pointer hover:bg-zinc-100"
          >
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function Entry() {
  return (
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>
  );
}
