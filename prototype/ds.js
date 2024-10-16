const set = new Set()

set.add(23)
set.add(40)
set.add(80)
set.add(12)
set.add(80)


console.log(set)

let map = new Map()

map.set("name", "Chandan")
map.set("age", 22)
map.set(90, "Bahuarwa")

console.log(map);

const itMap = map.keys()

while(itMap.next()){
    console.log(itMap.return);
}
