
const MasterSlideContainer = ({ children }) => {
  return (
    <div className="flex-grow h-[calc(100vh-7em)] max-h-[calc(100vh-7em)]">
      <div className="flex flex-col flex-grow h-full">
        {children}
      </div>
    </div>
  );
};

export default MasterSlideContainer;
