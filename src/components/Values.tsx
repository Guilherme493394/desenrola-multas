import { VALUES } from "../utils/constants";
import SRC from "../assets/Valores.webp";
function Values() {
  return (
    <section className="self-center  items-center justify-center md:flex md:flex-row min-h-[90vh] w-full">
      <img src={SRC} alt={"imagem valores"} className="md:w-2/5" />
      <div className="md:w-1/2">
        <h2 className="text-green-500 font-sans m-10 text-6xl font-bold mb-2">Valores</h2>
        <ul className="m-10 list-none list-inside text-pretty text-xl font-semibold md:w-full">
          {VALUES.description.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Values;
