import { useState } from "react";
import "./Icon.css";

const FlipIcon = ({ icon1, icon2 }) => {
  const [icon, setIcon] = useState(true);

  return (
    <i
      className={icon ? icon1 : icon2}
      onClick={() => {
        setIcon(!icon);
      }}
    ></i>
  );
};

export default FlipIcon;
