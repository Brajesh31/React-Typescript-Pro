import { useState } from "react";

interface props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: props) => {
  const [show, setShow] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;

  const text = show ? children : children.substring(0, maxChar) + "...";

  return (
    <p className="border border-3px" >
      {text}
      <button
      style={{height: "25px", padding: 0, width: "50px"}}
        className="btn btn-outline-danger border-0"
        type="button"
        onClick={() => setShow(!show)}
      >
        {show ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
