import { useSocket } from "../../../context/SocketContext";
import shared_data from "../../../../../shared-data-client";
import { useRef } from "react";

const McqSlideClient = ({ title, options, type, id }) => {

  const { user, socket, userResult, setUserResult, activeSlide, slides } = useSocket();
  const submitRef = useRef();

  return (
    <>
      <div style={{ padding: "1em" }}>
        {/* Title */}
        <h1 className="mb-3 text-2xl">{title?.data}</h1>
        <form
          className="flex flex-col"
          onSubmit={e => {
            e.preventDefault();
            let data = {
              [user]: {
                [id]:
                  (type === "multiple")
                    ?
                    Array.from(new FormData(e.target).values())
                    :
                    new FormData(e.target).get(id)
              }
            };
            if (socket) socket.emit(shared_data.HANDLE_RESULT_DATA_USER, data);
            setUserResult(x => { return { ...x, ...data[user] } });
            document.querySelector('#liveToastBtn').click(); // Simulate click on the button
          }}>
          <ul key={activeSlide} name="ul-mcq-list" style={{ fontSize: "1.3em" }} className="list-none flex flex-col gap-3">
            {
              options?.data?.map((option, i) =>
                (option !== "")
                  &&
                  type === 'multiple' ?
                  // Multiple Type MCQ options
                  <>
                    <li key={option.id} className="relative">
                      <input id={option.id} type="checkbox" name={option.id}
                        defaultChecked={userResult?.[slides?.[activeSlide]?.id]?.includes(String(option?.id))}
                        className="peer absolute top-[50%] translate-y-[-50%] left-[14px] h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 rounded" value={option.id} />
                      <label htmlFor={option.id}
                        className="bg-gray-300 peer-checked:bg-blue-300 rounded-lg cursor-pointer py-2 px-3 ps-7 flex items-center justify-start space-x-4">
                        <div className=""></div>
                        <div className="font-semibold">
                          {String.fromCharCode(65 + i)}
                        </div>
                        <div>
                          {option.text}
                        </div>
                      </label>
                    </li>
                  </>
                  :
                  // Single Type MCQ options
                  <>
                    <li key={option.id} className="relative">
                      <input id={option.id} type="radio" value={option.id} name={id}
                        defaultChecked={userResult?.[slides?.[activeSlide]?.id] == option?.id}
                        className="peer absolute top-[50%] translate-y-[-50%] left-[14px] h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                      <label htmlFor={option.id}
                        className="bg-gray-300 peer-checked:bg-blue-300 rounded-lg cursor-pointer py-2 px-3 ps-7 flex items-center justify-start space-x-4">
                        <div className=""></div>
                        <div className="font-semibold">
                          {String.fromCharCode(65 + i)}.
                        </div>
                        <div>
                          {option.text}
                        </div>
                      </label>
                    </li>
                  </>
              )
            }
          </ul>
          <button id="liveToastBtn" className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-all rounded-lg text-white text-lg p-2 mt-4">Submit</button>
        </form>
      </div>
      {/* <div className="toast flex items-center text-white border-0 absolute top-0 mt-3 left-3" ref={submitRef} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="flex">
          <div className="toast-body">
            The response has been submitted successfully.
          </div>
          <button type="button" className="btn-close btn-close-white me-2 self-center" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div> */}
    </>
  );
}

export default McqSlideClient;
