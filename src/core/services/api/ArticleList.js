import api from "../interceptor";

export const ArticleListAPI = async (
  RowsOfPage,
  SortingCol,
  SortType,
  Query,
  NewsCategoryId
) => {
  try {
    const result = await api.get(
      `/News?PageNumber=1${RowsOfPage ? `&RowsOfPage=${RowsOfPage}` : ""}${
        SortingCol ? `&SortingCol=${SortingCol}` : ""
      }${SortType ? `&SortType=${SortType}` : ""}${
        Query ? `&Query=${Query}` : ""
      }${NewsCategoryId ? `&NewsCategoryId=${NewsCategoryId}` : ""}`
    );
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const NewsCategoryAPI = async () => {
  try {
    const result = await api.get("/News/GetListNewsCategory");
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};
