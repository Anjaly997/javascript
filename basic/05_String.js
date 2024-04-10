 const name ="ann"
 const repoCount =50

//  console.log(name + repoCount +"500");

// console.log(`Hellp my name is ${name} and my repo count is ${repoCount}`);


 const gameName = new String('ann-ie-marie')

//  console.log(gameName[0])
//  console.log(gameName.__proto__)


//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(3));
//  console.log(gameName.indexOf("n"));



 const newString = gameName.substring(0,4)
 console.log(newString);

 const anotherString = gameName.slice(-4,4)
 console.log(anotherString);

 const newStringOne = "    annie     "
 console.log(newStringOne);
 console.log(newStringOne.trim());


 const url ="https://annie.com/annie%20marie"

 console.log(url.replace('%20','-'))


 console.log(url.includes('annio'))

 console.log(gameName.split('-'));