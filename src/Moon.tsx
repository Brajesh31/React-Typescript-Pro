import { WiMoonNew } from "react-icons/wi";
import { WiMoonFull } from "react-icons/wi";
import { useState } from "react";

interface props {
  onClick: () => void;
}

function Moon({ onClick }: props) {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <WiMoonFull size="50" color="red" onClick={toggle} />;
  return <WiMoonNew size="50" onClick={toggle} />;
}

export default Moon;
