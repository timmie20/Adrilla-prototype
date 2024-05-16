import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="space-y-3">
          <div className="flex justify-center gap-2">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="font-semibold">
            Vite + React + Tailwindcss + Shadcn/ui
          </h1>
          <p className="text-center">by Tech Read</p>
        </div>
      </div>
    </>
  );
}

export default App;
