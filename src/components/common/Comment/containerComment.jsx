import { useEffect, useState } from "react";
import { dateModifier } from "../../../core/utils/dateModifier";
import {
  CommentReplayAPI,
  LikeCommentAPI,
  DissLikeCommentAPI,
  AddReplyCourseCommentAPI,
} from "../../../core/services/api/Comment";
import { motion } from "framer-motion";
import Modal from "../Modal";
import Plus from "../../../assets/Icons/CourseDetails/add.svg";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import MagneticButton from "../magneticButton";
import LikeAddImg from "../../../assets/Icons/CourseDetails/like-bold.svg";
import LikeImg from "../../../assets/Icons/CourseDetails/vuesax/linear/like.svg";
import DissLikeImg from "../../../assets/Icons/CourseDetails/vuesax/linear/dislike.svg";
import DisLikeAddImg from "../../../assets/Icons/CourseDetails/dislike-bold.svg";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addCommentValidation } from "../../../core/validation/Comment";
import { HiUser } from "react-icons/hi";

const ContainerComment = ({
  commentData,
  params,
  openModal,
  changeFlagHandle,
  id,
}) => {
  const [replay, setReplay] = useState([]);
  const [replayOpen, setReplayOpen] = useState(false);

  const [newReplay, setNewReplay] = useState("");
  const [isModalReply, setIsModalReply] = useState(false);

  const commentId = commentData.id;
  const courseID = params.id;

  const CallReplayApi = async () => {
    const res = await CommentReplayAPI(courseID, commentId);
    setReplay(res);
  };

  useEffect(() => {
    CallReplayApi();
  }, []);

  const replayOpenModal = () => {
    setIsModalReply(true);
  };

  const replayCloseModal = () => {
    setIsModalReply(false);
  };

  const likeCommentCourse = async () => {
    const res = await LikeCommentAPI(commentId);
    if (res.success) {
      toast.success("کامنت با موفقیت لایک شد");
      changeFlagHandle();
    } else {
      toast.error("ارور بدبخت");
    }
  };

  const dissLikeCommentCourse = async () => {
    const res = await DissLikeCommentAPI(commentId);
    if (res.success) {
      toast.success("کامنت با موفقیت دیس لایک شد");
      changeFlagHandle();
    } else {
      toast.error("ارور بدبخت");
    }
  };

  const addReplyCourseComment = async (values) => {
    const obj = new FormData();
    obj.append("CommentId", commentId);
    obj.append("CourseId", courseID);
    obj.append("Title", values.Title);
    obj.append("Describe", values.Describe);
    const result = await AddReplyCourseCommentAPI(obj);
    if (result.success) {
      toast.success("جواب شما با موفقیت اضافه شد");
      changeFlagHandle();
      replayCloseModal();
    } else {
      toast.error("ارور بدبخت");
    }
  };

  return (
    <div>
      <Toaster />
      <li className=" bg-metricWhite p-6  rounded-2xl flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row  items-start sm:items-center gap-2">
          {commentData.pictureAddress ? (
            <img
              src={commentData.pictureAddress}
              className="w-10 rounded-full"
            />
          ) : (
            <div className="p-2 rounded-full border border-metricGray3 text-metricGray3">
              <HiUser />
            </div>
          )}

          <h2>{commentData.author}</h2>
          <div className="w-2 h-2 rounded-full bg-metricGray2 sm:inline-block hidden"></div>
          <h4 className="text-metricGray3 text-sm">
            {dateModifier(commentData.insertDate)}
          </h4>
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <h2 className=" font-medium text-xl ">{commentData.title}</h2>
          <p className="text-metricGray3 text-[15px]">{commentData.describe}</p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row-reverse items-start gap-5 sm:items-center pt-3 justify-between">
          <div className="flex flex-row-reverse gap-3">
            <div
              className="flex gap-2 items-center text-lg"
              onClick={() => likeCommentCourse()}
            >
              <p>{commentData.likeCount}</p>
              <MagneticButton width="30px" height="30px">
                {commentData.currentUserEmotion === "LIKED" ? (
                  <img src={LikeAddImg} className="w-5" />
                ) : (
                  <img src={LikeImg} className="w-5" />
                )}
              </MagneticButton>
            </div>
            <div
              className="flex gap-2 items-center text-lg"
              onClick={() => dissLikeCommentCourse()}
            >
              <p>{commentData.disslikeCount}</p>
              <MagneticButton width="30px" height="30px">
                {commentData.currentUserEmotion === "DISSLIKED" ? (
                  <img src={DisLikeAddImg} className="w-5" />
                ) : (
                  <img src={DissLikeImg} className="w-5" />
                )}
              </MagneticButton>
            </div>
          </div>
          {replay.length !== 0 && (
            <div
              onClick={() => {
                setReplayOpen(!replayOpen);
              }}
              className="text-metricBlack cursor-pointer text-xs font-semibold"
            >
              {replayOpen ? (
                <>بستن پاسخ ها ({replay.length})</>
              ) : (
                <>مشاهده پاسخ ها ({replay.length})</>
              )}
            </div>
          )}

          <motion.button
            onClick={openModal}
            className="bg-metricYellow1 w-[120px] pl-4 pr-2 py-2 rounded-full font-medium flex items-center justify-center gap-1 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <img src={Plus} className="w-5" />
            جواب دادن
          </motion.button>
        </div>

        <ul className="ml-4">
          <div>
            {replay &&
              replayOpen &&
              replay.map((reply, i) => (
                <li key={i} className="relative flex gap-2 items-center">
                  <div className="absolute w-1 rounded-full h-3/4  bg-metricYellow1"></div>
                  <div className="mt-2 bg-metricWhite p-5 rounded-2xl flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      {reply.pictureAddress ? (
                        <img
                          src={reply.pictureAddress}
                          className="w-10 rounded-full"
                        />
                      ) : (
                        <div className="p-2 rounded-full border border-metricGray3 text-metricGray3">
                          <HiUser />
                        </div>
                      )}

                      <h2>{reply.author}</h2>
                      <div className="w-2 h-2 rounded-full bg-metricGray2"></div>
                      <h4 className="text-metricGray3 text-sm">
                        {dateModifier(reply.insertDate)}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2 mt-3">
                      <h2 className=" font-medium text-xl ">{reply.title}</h2>
                      <p className="text-metricGray3 text-[15px]">
                        {reply.describe}
                      </p>
                      <div className="flex gap-4 justify-end">
                        <div
                          onClick={() => likeCommentCourse()}
                          className="flex gap-2 items-center text-lg"
                        >
                          <p>{reply.likeCount}</p>
                          <MagneticButton width="30px" height="30px">
                            {<img src={LikeAddImg} className="w-5" /> && (
                              <img src={LikeImg} className="w-5" />
                            )}
                          </MagneticButton>
                        </div>
                        <div
                          className="flex gap-2 items-center text-lg"
                          onClick={() => dissLikeCommentCourse()}
                        >
                          <p>{reply.disslikeCount}</p>
                          <MagneticButton width="30px" height="30px">
                            {<img src={LikeAddImg} className="w-5" /> && (
                              <img src={DissLikeImg} className="w-5" />
                            )}
                          </MagneticButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}

            <Modal isOpen={isModalReply} onClose={replayCloseModal}>
              <button onClick={replayCloseModal}>انصراف</button>
              <Formik
                initialValues={{ Title: "", Describe: "" }}
                validationSchema={addCommentValidation}
                onSubmit={addReplyCourseComment}
                className="mt-4 font-medium"
              >
                <Form>
                  <div className="pt-4">
                    <label htmlFor="Title" className="font-medium">
                      عنوان نظر
                    </label>
                    <Field
                      type="text"
                      id="Title"
                      name="Title"
                      placeholder="عنوان نظر خود را وارد کنید ..."
                      className="w-full p-3 my-2 border border-gray-300 rounded-full outline-none placeholder-metricGray3 placeholder-opacity-50 font-normal px-4  "
                    />
                    <h2 className="text-red-400 text-xs font-medium mr-4">
                      <ErrorMessage name="Title" />
                    </h2>
                  </div>
                  <div className="pt-4">
                    <label htmlFor="Describe" className="font-medium">
                      توضیحات بیشتر
                    </label>
                    <Field
                      as="textarea"
                      id="Describe"
                      name="Describe"
                      placeholder="توضیحات بیشتر خود را وارد کنید ..."
                      className="w-full border h-28 my-2 resize-none border-gray-300 rounded-3xl outline-none placeholder-metricGray3 placeholder-opacity-50 font-normal px-4 py-2"
                    />
                    <h2 className="text-red-400 text-xs font-medium mr-4">
                      <ErrorMessage name="Describe" />
                    </h2>
                  </div>

                  <button
                    type="submit"
                    className="bg-metricPurple text-metricBlack px-4 py-2 rounded-full mt-2"
                  >
                    ثبت نظر
                  </button>
                </Form>
              </Formik>
            </Modal>
          </div>
        </ul>
      </li>
    </div>
  );
};

export default ContainerComment;
