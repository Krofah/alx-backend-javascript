function getListStudentIds(myArray) {
  return Array.isArray(myArray) ? myArray.map(student => student.id) : [];
}

export default getListStudentIds;
