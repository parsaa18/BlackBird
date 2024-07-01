import api from "../interceptor";

export const CommentAPI = async (courseID) => {
  try {
    const result = await api.get(`/Course/GetCourseCommnets/${courseID}`);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const AddCourseCommentAPI = async (obj) => {
  try {
    const result = await api.post("/Course/AddCommentCourse", obj);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const AddReplyCourseCommentAPI = async (obj) => {
  try {
    const result = await api.post("/Course/AddReplyCourseComment", obj);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const CommentReplayAPI = async (courseID,commentId) => {
  try {
    const result = await api.get(`/Course/GetCourseReplyCommnets/${courseID}/${commentId}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const LikeCommentAPI = async (commentID) => {
  try {
    const result = await api.post(`/Course/AddCourseCommentLike?CourseCommandId=${commentID}`);
    console.log(result , "result");
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};


export const DissLikeCommentAPI = async (commentID) => {
  try {
    const result = await api.post(`/Course/AddCourseCommentDissLike?CourseCommandId=${commentID}`);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};