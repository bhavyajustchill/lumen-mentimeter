import ButtonContainer from "../ButtonContainer";
import {
  AiOutlineArrowLeft,
  AiOutlinePlayCircle,
  AiOutlineShareAlt,
  AiOutlineQuestionCircle,
  AiOutlineCheck,
} from "react-icons/ai";

const BackIconComp = () => {
  return (
    <div
      className="h-full pl-2 flex items-center"
      onClick={() => console.log("Clear User")}
    >
      <ButtonContainer className="p-1 border-2 border-gray-400 rounded-md">
        <AiOutlineArrowLeft size="1.5em" color="black" />
      </ButtonContainer>
    </div>
  );
};

const NameAndAuthor = ({ title, author }) => {
  return (
    <div className="pl-2 flex flex-col leading-snug">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-gray-400" style={{ fontSize: "0.80em" }}>
        created by {author}
      </div>
    </div>
  );
};

const PresentButton = () => {
  return (
    <div
      className="h-fit px-3 flex justify-center align-items-center"
      role="group"
      aria-label="Button group with nested dropdown"
    >
      <ButtonContainer className="bg-blue-500 p-2 rounded-lg">
        <AiOutlinePlayCircle size="1.5em" color="white" />
        <div className="text-white ps-1 pe-2">Present</div>
      </ButtonContainer>
    </div>
  );
};

const ShareButton = () => {
  return (
    <ButtonContainer className="bg-gray-200 rounded-md p-2">
      <AiOutlineShareAlt size="1.2em" />
      <div className="pl-2">Share</div>
    </ButtonContainer>
  );
};

const UserImage = () => {
  return (
    <div
      className="rounded-full mr-3 flex justify-center items-center"
      style={{ background: "#B8FAD6", width: "2.5em", height: "2.5em" }}
    >
      B
    </div>
  );
};

const Divider = () => {
  return (
    <div
      className="mx-3"
      style={{ background: "#ddd", width: "1px", height: "70%" }}
    ></div>
  );
};

const SavedState = () => {
  return (
    <div className="text-secondary">
      Saved
      <AiOutlineCheck size="1.7em" color="#41d633" />
    </div>
  );
};

const EditHeader = (props) => {
  const { title = "Presentation title", author = "bhavyajustchill" } = props;

  return (
    <div
      className="flex border-b border-gray-300 d-flex bg-white"
      style={{ height: "3.5em" }}
    >
      <div className="flex items-center">
        <BackIconComp />
        <NameAndAuthor title={title} author={author} />
      </div>
      <div className="ms-auto flex flex-row-reverse justify-center items-center">
        <PresentButton />
        <ShareButton />
        <UserImage />
        <Divider />
        <AiOutlineQuestionCircle size="1.7em" color="#555" />
        <Divider />
        <SavedState />
      </div>
    </div>
  );
};

export default EditHeader;
