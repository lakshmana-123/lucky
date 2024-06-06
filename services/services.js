const { studentDetails } = require('../dataDao/studentdao');
const { studentInfo} = require('../querys/studentQuery');


const getStudent = async (req, res) => {
   
    const {id} = req.params;
    let candidateInf = await studentDetails.studentInfo(id)
        .then((candidateInf) => {
             console.log(candidateInf)
            res.status(200).send({ candidateInf});
        }, (error) => {
            console.error('Error fetching studentInfo:', error);
            res.status(500).send({ error})
        })
}

const createStudent = async (req, res) => {
    try {
        const { student_name, description} = req.body;
        const insertData = await studentDetails.postStudentInfo(student_name, description);
        if (insertData) {
            return res.json({ status: true, insertData });
        } else {
            return res.status(400).json({ error: "Failed to insert data" });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: "An error occurred" });
    }
}

module.exports = {getStudent,createStudent}