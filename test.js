console.log("A")
setTimeout(()=>{
    console.log("D")
}, 0)
setTimeout(()=>{
    console.log("B")
}, 2000)
console.log("C")
function example(){
    console.log("HI")
}
const example1=()=>{
    console.log("Hello")
}

const promise = new Promise((resolve,reject)=>{
    setTimeout(example, 4500)
    setTimeout(example1, 0)
})
promise.then(res=>{console.log(res)})
.catch(err=>console.log(err))

