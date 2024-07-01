import api from "../../interceptor";

export const getMyCoursesApi = async (search) => {
	try {
		const result = await api.get(
			`/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=100&SortingCol=DESC&SortType=LastUpdate&Query=${
				search && search
			}`
		);
		return result;
	} catch (error) {
		return error;
	}
};
