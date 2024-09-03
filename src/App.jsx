import Calculadora from "./components/Calculadora";

function App() {
  return (
    <div className="bg-gray-800 min-h-screen text-white flex flex-col justify-between font-semibold">
      <div className="flex-grow flex items-center justify-center">
        <Calculadora />
      </div>
      <footer className="bg-gray-800 ">
        <div className="text-gray-600 text-center">
          Savio Vianna - savioviannasilva@hotmail.com
        </div>
      </footer>
    </div>
  );
}

export default App;
