import { WHO_WE_ARE } from "../utils/constants";
import Hero from "../assets/Hero.webp";
function WhoWeAre() {
  return (
    <section className="self-center items-center md:grid md:grid-cols-2   min-h-[90vh] w-full md:h-3/4 md:w-5/6">
      <div className="flex flex-col items-center  mt-2 mb-2">
        <img
          src={Hero}
          alt="Quem somos"
          className=" object-cover w-10/12 md:w-10/12 md:h-3/5 rounded-3xl"
        />{" "}
        <p className="text-sm text-justify mx-6 w-10/12  text-wrap font-bold ">
          {WHO_WE_ARE.founder}
        </p>
      </div>
      <div className="flex flex-col mx-10 my-0 ">
        <h2 className="text-green-500 font-sans mt-10 text-5xl md:text-6xl font-bold mb-2">
          {WHO_WE_ARE.title}
        </h2>

        <p className=" mt-10 text-xl font-semibold">{WHO_WE_ARE.description}</p>
      </div>
    </section>
  );
}

export default WhoWeAre;
