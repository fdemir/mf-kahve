import { Button, Card } from "@mf-kahve/ui";
import Search from "search/Search";
import Cart from "cart/Cart";
import List from "list/List";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="flex w-screen min-h-screen bg-zinc-200">
        <aside className="w-32 h-screen p-4">
          <Card className="flex flex-col items-center w-full h-full gap-6 py-4 bg-white rounded-md shadow-sm">
            <span className="text-2xl font-bold">MF</span>
            <Button>
              <AiOutlineHome />
            </Button>
            <Button>
              <AiOutlineSetting />
            </Button>
          </Card>
        </aside>
        <main className="flex w-full">
          <div className="flex flex-col w-3/4 gap-4 p-4">
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
