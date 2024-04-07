const accountId = 234567
let accountEmail = "anjaly@microsoft.com"
var accountPassword ="678564"
accountCity ="Kochi"
 

// accountId = 2 // not allowed

accountEmail ="heeryu.com"
accountPassword ="bdfjfgk"
accountCity ="bangalore"


console.log(accountId);

/*
preffer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])