import { WHATSAPP } from "../utils/constants";
import Logo from "./WhatsAppLogo";

function WhatsAppSticky() {
  return (
    <a
      className="sticky self-end bottom-4 right-8 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366]"
      href={WHATSAPP}
      target="_blank"
    >
      <div className="absolute  top-0 left-0 w-full h-full rounded-full bg-[#25d366] animate-ping">
        <Logo className="text-xl" />
      </div>
      <Logo className="text-3xl" />
    </a>
  );
}

export default WhatsAppSticky;
