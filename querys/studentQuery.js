let studentQuery = {
    studentData : 'SELECT * FROM studentdetailes WHERE id = ?',
    postStudentInfo:'INSERT INTO studentdetailes (student_name,description) VALUES (?,?)',
   
}

module.exports = {studentQuery}