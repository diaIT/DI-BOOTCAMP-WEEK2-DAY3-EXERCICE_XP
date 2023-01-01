



const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
 
//*The society’s name will be the first letter of each of their names sorted in alphabetical order.
  const namesSort = names.sort();
  let strg = ""

   for ( i of namesSort){
        console.log(i)
        strg = strg + i[0]
}
//*Console.log the name of their secret society. The output should be “ABJKPS”
    console.log(strg)
