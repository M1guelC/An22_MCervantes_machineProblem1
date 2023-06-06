/*
Progam: Computation of Grades Using Function
Programmer : Miguel Angelo L. Cervantes
Section: AN22
Start Date: Jun 1, 2023
End Date: Jun 6, 2023
*/

class Student {
    constructor(names, classParticipation, summativeExam, majorGradeExam) {
        this.names = names
        this.enablingAssesment = classParticipation
        this.summativeExam = summativeExam
        this.majorGradeExam = majorGradeExam
    }
    calculateClassParticipation() {
        let total = 0;
        for (let i = 0; i < this.enablingAssesment.length; i++) {
            total += this.enablingAssesment[i];
        }
        return total / this.enablingAssesment.length;
    }

    calculateSummativeExam() {
        let total = 0;
        for (let i = 0; i < this.summativeExam.length; i++) {
            total += this.summativeExam[i];
        }
        return total / this.summativeExam.length;
    }
    calculateMajorGradeExam() {
        let score = this.majorGradeExam
        return score
    }
    //overall formula
    getGradeScore() {
        let total = (this.calculateClassParticipation() * .3) + (this.calculateSummativeExam() * .3) + (this.calculateMajorGradeExam() * .4)
        return total
    }
    //converts grade to Letter grade
    getLetterGrade() {
        const gradeScore = this.getGradeScore();
        if (gradeScore >= 90) {
            return 'A';
        } else if (gradeScore >= 80) {
            return 'B';
        } else if (gradeScore >= 70) {
            return 'C';
        } else if (gradeScore >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }
    //method to convert Objects into string
    toString() {
        const classParticipation = this.calculateClassParticipation()
        const summativeExam = this.calculateSummativeExam();
        const majorGradeExam = this.calculateMajorGradeExam();
        const gradeScore = this.getGradeScore();
        const letterGrade = this.getLetterGrade();
        return `| Name: ${this.names} | Class Participation: ${classParticipation} | Summative Exam: ${summativeExam} | Major Grade Exam: ${majorGradeExam} | Grade Score: ${gradeScore} | Letter Grade: ${letterGrade} |`;
    }

}
//array for storing student class
let studentArray = []
//For Loop for individual students
for (let i = 0; i < 5; i++) {
    let names = prompt("Enter the name of student")
    let classParticipation = []
    let summativeExam = []

    for (let i = 1; i <= 5; i++) {
        let enablingAssesmentInput = prompt("Enter enabling Assesment " + i + ":")
        classParticipation.push(parseFloat(enablingAssesmentInput))
    }
    for (let i = 1; i <= 3; i++) {
        let summativeExamInput = prompt("Enter Summative assesment " + i + ":")
        summativeExam.push(parseFloat(summativeExamInput))
    }
    let majorgradeExam = prompt("Enter Major Grade Exam")

    //initialize student object
    let student = new Student(names, classParticipation, summativeExam, majorgradeExam)
    //store classes to array
    studentArray.push(student)
}
//Output
for (let i = 0; i < studentArray.length; i++) {
    console.log(studentArray[i].toString())
    console.log("")
}

