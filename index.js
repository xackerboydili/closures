
// const dilshod = {
//     name: 'Dilshod',
//     lastname: 'Isakov',
//     study: 'UzDJTU',
//     job: 'Frontend developer',
//     isInfo: function(study, job){
//         console.group(`${this.name} info:`)
//         console.log(`Name: ${this.name}`)
//         console.log( `lastname: ${this.lastname}`)
//         console.log('study:', this.study)
//         console.log('job:', this.job)
        
//         console.groupEnd()
//     }
// }

// const aziz = {
//     name: 'Aziz',
//     lastname: 'Azizov',
// }

// dilshod.isInfo.call(aziz, 'is not a student', 'web-developer')





// const arr = []

// Array.prototype.Multiply = function(num){
//     return this.map((e) => e * num)
// }
// console.log(arr.Multiply())


// function closures(num){
//     return function (n){
//         return num + n
//     }
// }

// const calc = closures(2)
// console.log(calc(20))


function site(url){
    return function(nextUrl){
        return `https//:${url}.${nextUrl}`
    }
}

const result = site('google')
console.group('Useful sites')
console.log(result('net'))
console.log(result('com'))
console.log(result('ru'))
console.log(result('uz'))
console.groupEnd()
