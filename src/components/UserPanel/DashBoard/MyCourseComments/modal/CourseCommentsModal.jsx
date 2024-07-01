import React from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../../../../common/Modal";
import ModalComment from "./Comment";
const CourseCommentsModal = ({ commentList, isOpen, setOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setOpen(false);
      }}
      width="700px"
      height="500px"
    >
      <div className="h-[440px] px-3 flex flex-col gap-5 overflow-hidden">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium">کامنت های دوره</h3>
          <p
            className="cursor-pointer "
            onClick={() => {
              setOpen(false);
            }}
          >
            بستن
          </p>
        </div>
        <div className="w-full h-[400px] bg-metricGray3/20 p-5 rounded-2xl flex flex-col gap-8 overflow-auto">
          {commentList.map((e, i) => {
            return <ModalComment comment={e} key={i} />;
          })}
        </div>
      </div>
    </Modal>
  );
};

export default CourseCommentsModal;
