
const students = [
{ name: "Alice", age: 20 },
{ name: "Bob", age: 21 },
{ name: "Charlie", age: 20 },
{ name: "David", age: 21 },
{ name: "Pandu", age: 29 },
{ name: "AJAY", age: 51 }
]

const property = "age";

const groupBy = (students, prop) => {
    let group = {}
    students.forEach((st) => {
        if(!group[st.age]){
            group[st.age] = [st]
        } else {
            group[st.age].push(st)
        }
    })
    return group;
}

console.log(groupBy (students, property));
