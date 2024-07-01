import api from "../interceptor";

export const ArticleDetailsAPI = async (params) => {
  try {
    const result = await api.get(`/News/` + params.id);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const ArticleArchiveAPI = async (id) => {
  try {
    const result = await api.post(`/News/AddFavoriteNews?NewsId=${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const ArticleLikeAPI = async (id) => {
  try {
    const result = await api.post(`/News/NewsLike/${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const ArticleDissLikeAPI = async (id) => {
  try {
    const result = await api.post(`/News/NewsDissLike/${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const ArticleDeleteDissLikeAPI = async (obj) => {
  try {
    const result = await api.delete(`/News/DeleteLikeNews`, { data: obj });
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const ArticleDeleteArchiveAPI = async (obj) => {
  try {
    const result = await api.delete(`/News/DeleteFavoriteNews`, { data: obj });
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};
