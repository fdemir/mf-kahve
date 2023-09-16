import { Button } from "@mf-kahve/ui";
import Search from "search/Search";
import Cart from "cart/Cart";

function App() {
  return (
    <>
      <div className="flex w-screen min-h-screen bg-zinc-200">
        <aside className="w-32 h-screen p-4">
          <div className="flex flex-col items-center w-full h-full gap-6 py-4 bg-white rounded-md shadow-sm">
            <span className="text-2xl font-bold">MF</span>
            <Button>A</Button>
            <Button>B</Button>
          </div>
        </aside>
        <main className="flex w-full">
          <div className="flex flex-col w-3/4 gap-4 p-4">
            <section>
              <Search />
            </section>
            <section>
              <div className="w-full p-4 bg-white rounded-md shadow-sm h-14">
                Listing
              </div>
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
