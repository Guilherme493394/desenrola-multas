import { WHATSAPP } from "../utils/constants";
import Logo from "./WhatsAppLogo";
function WhatsApp() {
  return (
    <a
      className="inline-flex text-center bg-blue-900 text-white rounded-full p-2 hover:bg-green-600 "
      href={WHATSAPP}
      target="_blank"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
      <Logo className="text-xl m-1" />
      <span className="self-center  text-xl text-nowrap">Fale agora com um especialista</span>
    </a>
  );
}

export default WhatsApp;
