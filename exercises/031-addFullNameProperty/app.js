function addFullNameProperty(obj) {


//  obj = {
//   firstName: " ",
//   lastName: " ",
//   fullName: obj.firstName +' '+ obj.lastName 
// }
obj.fullName = obj.firstName + ' ' + obj.lastName;
console.log(obj)
  return obj
}