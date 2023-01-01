
//*Create an array called colors where the value is a list of your five favorite colors.    
     const colors = ["Bleu", "Red", "Yellow", "White","Black"];
     const suffixe = ["st", "nd", "rd", "td", "th"]

//*Loop through the array and as you loop console.log a string like so:
// “My #1 choice is blue”, “My #2 choice is red” ect… .
      for(let i = 0; i< colors.length ; i++){

            console.log("My", "#"+(i+1), "choice is",colors[i]);
        }


//*Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”,
//  picking the correct suffix for each number.
      for(let i = 0; i< colors.length ; i++){

          console.log("My", (i+1)+suffixe[i], "choice is",colors[i]);
       }

  

