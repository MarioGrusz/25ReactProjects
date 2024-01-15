import { useState } from "react";
import "./index.scss";

//build full checkbox experience

const Checkbox = ({ checked, onClick }) => {
  return (
    <div onClick={onClick}>
      <input type="checkbox" checked={checked} />
    </div>
  );
};

export default Checkbox;
