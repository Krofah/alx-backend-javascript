const getListStudentIds = (arr) => Array.isArray(arr) ? arr.map(({ id }) => id) : [];

export default getListStudentIds;
