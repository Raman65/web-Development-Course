use("CrudDb")

db.createCollection("courses")

// db.courses.insertOne({
//     name: "Ramans web dev course",
//     price: 0,
//     assignments: 12,
//     projects: 40
// })
// db.courses.insertMany([
//     {
//         "name": "Ramans web dev course",
//         "price": 0,
//         "assignments": 12,
//         "projects": 40
//     },
//     {
//         "name": "Jane's Python Bootcamp",
//         "price": 50,
//         "assignments": 8,
//         "projects": 25
//     },
//     {
//         "name": "Data Science with Alex",
//         "price": 100,
//         "assignments": 15,
//         "projects": 30
//     },
//     {
//         "name": "UI/UX Design by Mike",
//         "price": 75,
//         "assignments": 10,
//         "projects": 20
//     },
//     {
//         "name": "Sara's Full-Stack Development",
//         "price": 120,
//         "assignments": 20,
//         "projects": 35
//     },
//     {
//         "name": "Java Programming with Ravi",
//         "price": 90,
//         "assignments": 18,
//         "projects": 28
//     },
//     {
//         "name": "Cybersecurity Basics with Linda",
//         "price": 60,
//         "assignments": 12,
//         "projects": 15
//     },
//     {
//         "name": "AI and Machine Learning by Ethan",
//         "price": 150,
//         "assignments": 25,
//         "projects": 40
//     },
//     {
//         "name": "Blockchain Development by Zoe",
//         "price": 200,
//         "assignments": 22,
//         "projects": 38
//     },
//     {
//         "name": "DevOps Masterclass by Luke",
//         "price": 130,
//         "assignments": 16,
//         "projects": 30
//     },
//     {
//         "name": "React and Redux with Chloe",
//         "price": 85,
//         "assignments": 14,
//         "projects": 22
//     }
// ]
// )

// let a= db.courses.find({price: 0})
// console.log(a.toArray())
let b= db.courses.findOne({price: 0})
console.log(b);

db.courses.updateOne({price: 0}, {$set:{price: 1000}})

db.courses.updateMany({price: 0}, {$set:{price: 1000}})

db.courses.deleteOne({price: 120})

db.courses.deleteMany({price: 1000})