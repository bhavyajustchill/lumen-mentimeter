import { useState } from "react";

const Input = ({ className, ...x }) => {
  const default_class = "outline-none hover:outline-none ";
  const [size, setSize] = useState(0);
  return (
    <>
      <textarea
        {...x}
        rows={1}
        onLoad={(ele) => {
          setSize(ele.scrollHeight);
        }}
        onInput={
          (ele) => {
            ele.target.style.height = "0px";
            ele.target.style.height = (ele.target.scrollHeight + 3) + "px";
          }
        }
        className={default_class + " resize-none overflow-hidden w-full border-2 rounded-md border-gray-300 px-2 py-1 " + className} />
    </>
  )
}

export default Input