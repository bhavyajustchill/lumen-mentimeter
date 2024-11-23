import ButtonContainer from "./../ButtonContainer/index";
import {
  AiOutlinePlus,
  AiOutlineCloudUpload,
  AiOutlineSetting,
  AiOutlineBulb,
} from "react-icons/ai";
import { MdOutlineWaterDrop } from "react-icons/md";

const NewSlideButton = () => {
  return (
    <ButtonContainer className="bg-blue-500 ms-2 px-2 rounded-md">
      <AiOutlinePlus size="1.2em" color="white" />
      <div className="pl-1 font-semibold text-white">New Slide</div>
    </ButtonContainer>
  );
};

const ImportButton = () => {
  return (
    <ButtonContainer className="bg-gray-200 ms-2 px-2 rounded-md">
      <AiOutlineCloudUpload size="1.2em" />
      <div className="pl-1 font-semibold">Import</div>
    </ButtonContainer>
  );
};

const SettingsButton = () => {
  return (
    <ButtonContainer className="bg-white ms-2 border px-2 rounded-md">
      <AiOutlineSetting size="1.2em" color="#555" />
      <div className="pl-1 font-semibold">Settings</div>
    </ButtonContainer>
  );
};

const ThemeButton = () => {
  return (
    <ButtonContainer className="bg-white ms-2 border px-2 rounded-md">
      <MdOutlineWaterDrop size="1.2em" color="#555" />
      <div className="pl-1 font-semibold">Theme</div>
    </ButtonContainer>
  );
};

const ExampleButton = () => {
  return (
    <ButtonContainer className="bg-white ms-2 border px-2 rounded-md">
      <AiOutlineBulb size="1.2em" color="#555" />
      <div className="pl-1 font-semibold">Example</div>
    </ButtonContainer>
  );
};

const EditHeaderSecondary = () => {
  return (
    <>
      <div
        style={{ height: "3.5em" }}
        className="flex justify-between bg-white p-2 border-b border-gray-300"
      >
        <div className="flex">
          <NewSlideButton />
          <ImportButton />
        </div>
        <div className="flex flex-row-reverse">
          <SettingsButton />
          <ThemeButton />
          <ExampleButton />
        </div>
      </div>
    </>
  );
};

export default EditHeaderSecondary;
