function App() {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-5 gap-4">
        <div className="row-span-5">1</div>
        <div className="col-span-8">4</div>
        <div className="col-span-3 row-span-5 col-start-10">5</div>
        <div className="col-span-8 row-span-4 col-start-2 row-start-2">7</div>
      </div>
    </>
  );
}

export default App;
