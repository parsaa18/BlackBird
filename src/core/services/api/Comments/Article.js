import api from "../../interceptor";

export const ArticleCommentAPI = async (newsID) => {
  try {
    const result = await api.get(`/News/GetNewsComments?NewsId=${newsID}`);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const AddArticleCommentAPI = async (obj) => {
  console.log(obj, "obj");
  try {
    const result = await api.post("/News/CreateNewsComment", obj);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const AddReplyArticleCommentAPI = async (obj) => {
  try {
    const result = await api.post("/News/CreateNewsReplyComment", obj);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const ArticleCommentReplayAPI = async (newsID) => {
  try {
    const result = await api.get(
      `/News/GetRepliesComments?Id=${newsID}`
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const ArticleLikeCommentAPI = async (CommentId) => {
  try {
    const result = await api.post(
      `/News/CommentLike/${CommentId}?LikeType=true`
    );
    console.log(result, "result");
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const ArticleDissLikeCommentAPI = async (CommentId) => {
  try {
    const result = await api.post(
      `/Course/AddCourseCommentDissLike?CourseCommandId=${CommentId}`
    );
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const DeleteArticleCommentLikeAPI = async (obj) => {
  try {
    const result = await api.delete("/Course/DeleteCourseLike", {
      data: obj,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

