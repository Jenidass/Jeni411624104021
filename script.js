console.log("Hello world!")
const first=1;
const second=2;
console.log(first);
const str="Hashmitha"
console.log(str)
const fruits=["Apple","Banana","cherry","fig"]
console.log(fruits[0])
fruits[1]="Orange"
console.log(fruits[1])
const arr=[1,"name",false,2.4]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
const fourth= document.getElementById("ptag")
fourth.innerHTML="this is my fourth class"
function newFunction(){
console.log("I am writing ");
}
const input=document.getElementById("eventListener")
const output=document.getElementById("ptag")
input.addEventListener("input",()=>{
    output.textContent=input.value
})