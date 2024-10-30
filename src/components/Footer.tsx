import {
  CHAVETASOFT_URL,
  CHAVETASOFT,
  FACEBOOK,
  INSTAGRAM,
  CNPJ,
} from "../utils/constants";
import FacebookLogo from "./FacebookLogo";
import InstagramLogo from "./InstagramLogo";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-950 mt-0  bottom-0 w-full ">
      <div className="w-full max-w-screen-xl mx-auto mt-0 p-4 ">
        <div className="flex items-center justify-between">
          <a
            href={FACEBOOK}
            className="flex flex-col items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            target="_blank"
          >
            <span className="font-sans self-center text-xl font-semibold whitespace-nowrap text-white">
              DESENROLA MULTAS
            </span>
            <span className="inline-block text-xs font-semibold text-white">
              ASSESSORIA DE TRÂNSITO
            </span>{" "}
            <span className="inline-block text-xs font-semibold text-white">
              {CNPJ}
            </span>
          </a>
          <ul className="flex flex-col justify-center items-center mb-2 text-l font-medium text-white  dark:text-white">
          <li className="inline-flex">
            <FacebookLogo className="size-4 m-1" />
              <a
                href={FACEBOOK}
                className="hover:underline me-5 md:me-6"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li className="inline-flex">
              {" "}
              <InstagramLogo className="size-4 m-1" />
              <a
                href={INSTAGRAM}
                className="hover:underline me-4 md:me-6"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-xs text-gray-500 text-center dark:text-gray-400">
          © {currentYear}
          <a
            href={CHAVETASOFT_URL}
            className="hover:underline mx-1"
            target="_blank"
          >
            {CHAVETASOFT}
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
