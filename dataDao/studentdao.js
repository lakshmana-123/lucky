
const db = require('../configs/db');
const {studentQuery} = require('../querys/studentQuery');


const studentDetails ={
    studentInfo: (id) => {
        return new Promise((resolve, reject) => {
            db.query(studentQuery.studentData, [id],(err,results) => {
                if (err) {
                    reject(err);
                    return err;
                } else {
                    resolve({ status:true,message:"Student data fetched successfully",results});
                }
            });
        });
    },
    
  postStudentInfo: (student_name, description) => {
    return new Promise((resolve, reject) => {
        db.query(studentQuery.postStudentInfo, [student_name,description], (err,results) => {
            if (err) {
                reject(err);
                return err;
            } else {
                resolve({ status: true, message:"Data inserted successfully", results });
            }
        });
    });
}
}

  module.exports = {studentDetails};