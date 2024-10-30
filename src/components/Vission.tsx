import { VISION } from "../utils/constants";
import SRC from "../assets/Vission.webp";
import SectionRightImage from "./SectionRightImage";
function Vission() {
  return (
    <SectionRightImage
      title={VISION.title}
      description={VISION.description}
      image_src={SRC}
      image_alt="Visión"
    />
  );
}

export default Vission;
