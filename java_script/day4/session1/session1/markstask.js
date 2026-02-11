const school = {
    student1: {
        name: "Afsar",
        marks: {
            englishmark: 90, tamilmark: 80, sciencemark: 92
        }
    },
    student2: {
        name: "Niyas",
        marks: {
            englishmark: 92, tamilmark: 88, sciencemark: 95
        }
    },
    student3: {
        name: "Senthil",
        marks: {
            englishmark: 80, tamilmark: 96, sciencemark: 82
        }
    }
};

//for student1
console.log("Studen1 Details:", school.student1);
console.log("Student1 marks details:", school.student1.marks);
console.log("Student1 Science mark:", school.student1.marks.sciencemark, "\n");


//for student 2
console.log("Studen2 Details:", school.student2);
console.log("Student2 marks details:", school.student2.marks);
console.log("Student2 Science mark:", school.student2.marks.sciencemark, "\n");

//for student 3
console.log("Studen3 Details:", school.student3);
console.log("Student3 marks details:", school.student3.marks);
console.log("Student3 Science mark:", school.student3.marks.sciencemark, "\n");
