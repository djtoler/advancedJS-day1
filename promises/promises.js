const apiPromise = fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
 .then(res => res.json())

apiPromise
.then((data) => {
    console.log(data);
})

apiPromise
.then((data) => {
    console.log(data.count);
})

const countPromise = apiPromise
    .then((data)  => {
        return data.count
})

countPromise
.then((data) => {
    console.log(data);
}) 
        
const top4Promise = apiPromise
    .then((data)  => {
        let topFour = []
        for (let i = 0; i <= 3; i++ ) {
            topFour.push(data.results[i])
        }
        return topFour
})

top4Promise
.then((data) => {
    console.log(data);
}) 

const namesPromise = apiPromise
    .then((data)  => {
        let names = []
        for (let i = 0; i <= data.results.length -1; i++ ) {
            names.push(data.results[i].name)
        }
        return names
})

namesPromise
.then((data) => {
    console.log(data);
}) 


const capNamesPromise = namesPromise
    .then((data)  => {
        let capNames = [];
        for (let i = 0; i <= data.length -1; i++ ) {
        capNames.push(data[i].toUpperCase())
        }
        return capNames
})
 
capNamesPromise
.then((data) => {
    console.log(data);
}) 

let badPromise = fetch("https://grandcircusco.github.io/demo-apis/wrong.json")
.then(res => res.json())
.then((data) => {
    console.log("hi")
})
.catch(error => {
    console.log("FAILED", error)
})


let badPromise1 = fetch("https://grandcircusco.github.io/demo-apis/wrong.json")
.then(res => res.json())
.then(data =>{
    console.log('hello');
})
.catch(error =>{
    console.log('FAIL' , error);
})


