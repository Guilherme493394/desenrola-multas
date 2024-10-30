import { MISSION } from "../utils/constants"
import SRC from '../assets/Mision.webp'
import SectionLeftImage from "./SectionLeftImage"

function Mission() {
  return (
    <SectionLeftImage
      title={MISSION.title}
      description={MISSION.description}
      image_src={SRC}
      image_alt="Misión"
    />
  )
}

export default Mission