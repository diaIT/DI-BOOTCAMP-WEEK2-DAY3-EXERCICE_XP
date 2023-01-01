
//*------------------------------------------- Exercise 1 : List Of People---------------------------------------------*//


      const people = ["Greg", "Mary", "Devon", "James"];
      
   //*Write code to remove “Greg” from the people array.
      people.shift();

   //*Write code to replace “James” to “Jason”.
      people.splice(2,1,"jason"); 

  //*Write code to add your name to the end of the people array.
      people.push("Diallo");  

  //*Write code that console.logs Mary’s index
      people.indexOf("Mary");  
      
   //*Write code to make a copy of the people array using the slice method.
      people.slice(1,3);

   //*Write code that gives the index of “Foo”. Why does it return -1 ?
      people.indexOf("Foo"); //*because foo is not in the array
 
   //*Create a variable called last which value is the last element of the array.
      const last = people.indexOf("Diallo");
            console.log(people.length)        //* 4 ;
            console.log(people)         //* ['Mary', 'Devon', 'jason', 'Diallo'];

                  //*the index of the last element of the array is less than the length of the array*//


//*----------------------Part II - Loops-------------------------------------------------------------*//
     
     //*Using a loop, iterate through the people array and console.log each person.
     
        for (let i=0; i<people.length; i++) {
              console.log(people[i]); //* Mary, Devon, Jason, Diallo
        }
         
    //*Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
        for (let i = 0 ; i<people.length; i++ ){
            if(i==2){
              break;
            }
            console.log(people[i])
        }
        