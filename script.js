// testing  team generator 

/*team = ["vijay" ,"kumar", "bharath", "varma", "lion", "hello", 
"joining", "kings"]

size = 2
let split = team.sort(function(){
    Math.random() - 0.5
})
 
function spiltArray(myArray, size){
    let tempArray = []
    for (let i=0; i < myArray.length; i+=size){
        let spiter = myArray.slice(i, i + size)
        tempArray.push(spiter)

    }
    return tempArray
}
let result = spiltArray(split, size)
console.log(result)
*/



const input  = document.getElementById("myInput")
const teamNumber = documnet.getElementById("number-team")
const output = documnet.getElementById("output")
const button = documnet.getElementById('button-click')

const getInputValue = function(){
    output.innerHTML = ""
    const members = input.value
    const total = teamNumber.value
    let person = members.split(",")

    let random = person.sort(() => Math.random() - 0.5)
    console.log(random)
    function split(array , size){
        if(array.lenth <= size){
            return [array]
        }
        return [array.slice(0, size), ...split(array.slice(size), size)]
    }
    let team = split(random , total)
    for(let i = 0; i < team.length; i++){
        output.innerHTML += `<p> Team-${i+1}: ${team[i]} </p>`
    }
}