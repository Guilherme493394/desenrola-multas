import { HERO } from "../utils/constants.ts";
import WhatsApp from "./WhatsApp.tsx";

function Hero() {
  return (
    <section
      className={
        "min-h-[90vh] w-full bg-green-500   flex flex-col justify-center items-center text-white"
      }
      id="home"
    >
      <h2 className="m-5  md:text-6xl text-4xl font-semibold md:w-10/12">
        {HERO.title}
      </h2>
      <p className="m-5 text-xl md:text-4xl font-semibold md:w-10/12">
        {HERO.p1}
      </p>
      <p className="m-5 text-xl md:text-4xl font-semibold md:w-10/12">
        {HERO.p2}
      </p>
      <p className="m-5 text-xl md:text-4xl font-semibold md:w-10/12">
        {HERO.p3}
      </p>
      <div className="self-end m-5">
        <WhatsApp />
      </div>
    </section>
  );
}

export default Hero;
