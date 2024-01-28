import ContactLottie from "../../utils/Lotties/contact.json";

import { Player } from "@lottiefiles/react-lottie-player";

const ContactAnimation = () => {
  return (
    <div className=" hidden lg:flex ">
      <Player autoplay loop src={ContactLottie}></Player>
    </div>
  );
};

export default ContactAnimation;
