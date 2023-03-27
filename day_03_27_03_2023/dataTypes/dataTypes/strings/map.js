let map=new Map()

map.set("name","sandy")
map.set("age",26)

//console.log(map)

let set=new Set("ssaandyyyy")

//console.log(set)


let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
let newUnique=[...new Set(values)]
//console.log(newUnique)

let valuesOfMap=Array.from(map.values())

valuesOfMap.push("hi")

console.log(valuesOfMap)