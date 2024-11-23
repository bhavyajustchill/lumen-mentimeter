import { memo, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";

const App = ({ propertiesWindow, activeSlide, slides, setSlides }) => {
  const TitlePointsContent = useCallback(() => {
    return (
      <>
        <div className="flex px-3 scrollbar-style-1 flex-col gap-2 w-full h-full overflow-auto">
          <div className="w-full">
            <h6>Heading</h6>
            <input
              key={slides[activeSlide].id}
              className="form-input"
              placeholder="Title"
              defaultValue={slides[activeSlide]?.content?.title?.data}
              onChange={(e) => {
                setSlides((prv) => {
                  const newSlides = [...prv];
                  newSlides[activeSlide].content.title.data = e.target.value;
                  return newSlides;
                });
              }}
            />
          </div>
          <div className="w-full h-full">
            <h6>Points</h6>
            <ul
              key={slides[activeSlide]?.content?.points?.data?.length}
              className="list-unstyled flex flex-col gap-2"
            >
              {slides[activeSlide]?.content?.points?.data?.map((text, i) => {
                return (
                  <li className="flex" key={i}>
                    <input
                      className="form-input"
                      placeholder="Point"
                      defaultValue={text}
                      onChange={(e) => {
                        setSlides((prv) => {
                          const newSlides = [...prv];
                          newSlides[activeSlide].content.points.data[i] =
                            e.target.value;
                          return newSlides;
                        });
                      }}
                    />
                    <div className="flex ps-1">
                      <div className="grid">
                        <button
                          className="btn btn-light w-auto h-auto p-0"
                          onClick={() => {
                            setSlides((prv) => {
                              const newSlides = [...prv];
                              newSlides[activeSlide].content.points.data =
                                newSlides[
                                  activeSlide
                                ].content.points.data.filter(
                                  (_, index) => index !== i
                                );
                              newSlides[activeSlide].content.id =
                                Math.random() * 9999;
                              return newSlides;
                            });
                          }}
                        >
                          <AiOutlineClose className="m-auto" size="2em" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="bottom-0 p-3 bg-white w-full">
          <button
            className="btn btn-outline-primary w-full"
            onClick={() => {
              setSlides((prv) => {
                let newSlides = [...prv];
                newSlides[activeSlide].content.points.data = [
                  ...newSlides[activeSlide].content.points.data,
                  ...[""],
                ];
                newSlides[activeSlide].content.id = Math.random() * 999;
                return newSlides;
              });
            }}
          >
            Add Point
          </button>
        </div>
      </>
    );
  }, [activeSlide, slides, setSlides]);

  const TitlePointsDesign = useCallback(() => {
    return (
      <div className="px-3">
        <h6>Slide style</h6>
        <div className="flex flex-col gap-2">
          <div className="w-full">
            <label className="flex justify-between">
              Background
              <input
                type="color"
                key={slides[activeSlide].id}
                className="form-input w-25"
                placeholder="Background"
                defaultValue={slides[activeSlide].style.background}
                onChange={(e) => {
                  setSlides((prv) => {
                    const newSlides = [...prv];
                    newSlides[activeSlide].style.background = e.target.value;
                    return newSlides;
                  });
                }}
              />
            </label>
          </div>
          <div className="w-full">
            <label className="flex justify-between">
              Text color
              <input
                type="color"
                key={slides[activeSlide].id}
                className="form-input w-25"
                placeholder="Color"
                defaultValue={slides[activeSlide].style.color}
                onChange={(e) => {
                  setSlides((prv) => {
                    const newSlides = [...prv];
                    newSlides[activeSlide].style.color = e.target.value;
                    return newSlides;
                  });
                }}
              />
            </label>
          </div>
        </div>
      </div>
    );
  }, [activeSlide, slides, setSlides]);

  return (
    <>
      {propertiesWindow === "content" ? (
        <TitlePointsContent />
      ) : (
        <TitlePointsDesign />
      )}
    </>
  );
};

export default memo(App);
