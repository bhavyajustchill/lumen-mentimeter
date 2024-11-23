import { AiOutlineClose } from "react-icons/ai";

const Modal = ({
  id = `${Date.now()}_${Math.floor(Math.random() * 1000)}`,
  title = "Hey",
  body = "Are you sure?",
  footer = [
    { text: "Close", action: "dismiss" },
    {
      text: "Delete Data",
      action: "function",
      function: () => alert("Data deleted!"),
      type: "danger",
    },
  ],
}) => {
  const btn_types = {
    danger: "bg-red-400 text-white active:bg-red-500",
    warning: "bg-yellow-400 text-white active:bg-yellow-500",
    success: "bg-green-400 text-white active:bg-green-500",
    info: "bg-blue-400 text-white active:bg-blue-500",
    primary: "bg-blue-400 text-white active:bg-blue-500",
    secondary: "bg-gray-400 text-white active:bg-gray-500",
    light: "bg-gray-200 text-black active:bg-gray-300",
    dark: "bg-gray-800 text-white active:bg-gray-900",
  };

  return (
    <>
      <input type="checkbox" className="hidden peer" id={id} />
      <label
        htmlFor={id}
        className="fixed bg-black bg-opacity-20 h-full w-full top-0 left-0 z-[9999] hidden peer-checked:block"
      ></label>
      <div className="z-[9999] hidden peer-checked:block fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex h-full w-full">
          <div className="m-auto bg-white rounded-xl border-2 border-gray-300">
            {/* Header */}
            <div className="h-12 flex justify-between items-center p-3 border-b border-gray-300">
              <h1 className="text-lg font-medium" id="ResetModalLabel">
                {title}
              </h1>
              <label
                htmlFor={id}
                className="cursor-pointer rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-all"
              >
                <AiOutlineClose size="1.8em" className="m-auto" />
              </label>
            </div>
            {/* Body */}
            <div className="p-3 border-b border-gray-300">{body}</div>
            {/* Footer */}
            <div className="flex gap-3 p-3">
              <div className="ml-auto"></div>
              {footer.map((item, index) => {
                if (item.action === "dismiss")
                  return (
                    <label
                      key={index}
                      htmlFor={id}
                      className="p-2 cursor-pointer transition-all rounded-lg bg-gray-200 hover:bg-gray-400 active:bg-gray-300"
                    >
                      {item.text}
                    </label>
                  );
                else if (item.action === "function")
                  return (
                    <button
                      key={index}
                      className={`p-2 cursor-pointer transition-all rounded-lg ${
                        btn_types[item.type]
                      }`}
                      onClick={item.function}
                    >
                      {item.text}
                    </button>
                  );
                else
                  return (
                    <button key={index} className="btn btn-danger">
                      {item.text}
                    </button>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
