const getStudentIdsSum = (students) => {
  const idSum = students.reduce(
    (acc, value) => acc + value.id.toString(), ''
  );
  return idSum;
};

export default getStudentIdsSum;
