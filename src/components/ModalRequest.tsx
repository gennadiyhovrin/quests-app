import { useState } from "react";
import Form from "./Form";

const ModalRequest = () => {
  const [isOpen, setIsOpen] = useState(false as boolean);

  const toggleModal: () => void = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button onClick={toggleModal} className="bg-orange-500 text-white font-bold py-2 px-8 rounded-3xl uppercase modal-open">
        Make a reservation{" "}
      </button>

      {isOpen && (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={toggleModal}></div>

          <div className="modal-container bg-transparent w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div
              className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
              onClick={toggleModal}
            >
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>

            <div className="modal-content py-4 text-left px-6 bg-neutral-900	">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Submit your request</p>
                <div className="modal-close cursor-pointer z-50" onClick={toggleModal}>
                  <svg
                    className="fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
                </div>
              </div>
              <Form toggleModal={toggleModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalRequest;
