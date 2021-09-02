// anyvar = new Promise((resolve, reject) => {
//     let a = 2;
//     if (a == 2) {
//         resolve(`Success`)
//     } else {
//         reject(`Failed`)
//     }
// })

// anyvar.then((message) => {
//     console.log(message)
// }).catch((message) => {
//     console.log(message)
// })





// creating a function





// let coding = false;

// function CodingPromiseFunction() {
//     return new Promise((resolve, reject) => {
//         if (coding) {
//             resolve({
//                 status: `Busy`,
//                 message: `I'm coding`
//             })
//         } else {
//             reject({
//                 status: `free`,
//                 message: `I'm free`
//             })
//         }
//     })
// }

// CodingPromiseFunction().then((message) => {
//     console.log(message)
// }).catch((message) => {
//     console.log(message)
// })





// Promise.all


// LearnedChapterOne = new Promise((resolve, reject) => {
//     resolve(`LearnedChapterOne`)
// })
// LearnedChapterTwo = new Promise((resolve, reject) => {
//     resolve(`LearnedChapterTwo`)
// })
// LearnedChapterThree = new Promise((resolve, reject) => {
//     resolve(`LearnedChapterThree`)
// })

// if you write .race instead of .all it will return only one promise which completed first


// Promise.all([
//     LearnedChapterOne,
//     LearnedChapterTwo,
//     LearnedChapterThree
// ]).then((message) => {
//     console.log(message)
// })