//variable
const siteName = "Gloud Academy";

//function
function userName(name)  {
    return `Welcome ${name}!`;
}

//class 
class Course {
    constructor(courseName) {
        this.coursename = coursename;
}

show() {
    console.log(`Course:${this.cousename}`);
    
}
}

//export all
module.exports = {siteName, userName, Course};