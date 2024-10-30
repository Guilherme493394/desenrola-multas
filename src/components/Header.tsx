import Navbar from "./Navbar";
function Header() {
  return (
    <header className="flex  shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[90px] tracking-wide sticky top-0 w-full">
      <div className="flex flex-wrap   items-center  gap-2 align-middle justify-center w-full md:mx-[14rem] md:justify-between">
        <a href="#home">
          <h1 className="font-serif font-extrabold text-4xl text-green-500">
            desenrola<span className="text-blue-700">multas</span>
          </h1>
        </a>{" "} 
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
