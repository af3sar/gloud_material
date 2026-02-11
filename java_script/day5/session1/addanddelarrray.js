// methods are push(), unshift(), pop(), shift()

//using push
{
    let courses = ["javascript", "java", "python"];
    console.log("Before add course:", courses);

    courses.push("C#");
    console.log("After add course", courses);
}

//using unshift
{
    let courses = ["javascript", "java", "python"];
    console.log("Before add course:", courses);

    courses.unshift("HTML", "CSS");
    console.log("After add course", courses);
}

//using pop for removing
{
    let courses = ["javascript", "java", "python"];
    console.log("Before remove course:", courses);
    let removedcourses = courses.pop();

    console.log("After remove courses:", courses);
    console.log("Removed course:", removedcourses);

}

//shift for remove the first value in array
{
    let courses = ["javascript", "java", "python"];
    console.log("Before remove course:", courses);
    let firstcourse = courses.shift();

    console.log("After remove courses:", courses);
    console.log("Removed course:", firstcourse);
}