import { Button } from "@mf-kahve/ui";
import Search from "search/Search";
import Cart from "cart/Cart";
import List from "list/List";

function App() {
  return (
    <>
      <div className="bg-zinc-200 w-screen min-h-screen flex">
        <aside className="h-screen w-32 p-4">
          <div className="h-full w-full bg-white rounded-md shadow-sm flex flex-col items-center gap-6 py-4">
            <span className="font-bold text-2xl">MF</span>
            <Button>A</Button>
            <Button>B</Button>
          </div>
        </aside>
        <main className="w-full flex">
          <div className="w-3/4 flex flex-col gap-4 p-4">
            <section>
              <Search />
            </section>
            <section>
              <List />
            </section>
          </div>
          <div className="w-1/4">
            <section className="p-4">
              <Cart />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
