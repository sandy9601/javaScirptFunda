// Write the function isEmpty(obj)
// which returns true if the object has no properties, false otherwise.

// Should work like that:

function isEmpty(obj) {
  if (Object.keys(obj).length == 0) {
    return false;
  } else {
    return true;
  }
}
let obj={}
obj["name"]="sandy"

console.log(isEmpty(obj))
