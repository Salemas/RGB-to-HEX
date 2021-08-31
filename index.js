//select html elements
const input = document.getElementById("input");
const output = document.getElementById('output');
const jsFunc = document.getElementById('jsFunc');
const alg = document.getElementById('alg');

//reset input fields values
input.value = "";
output.value = "";

// add event listener on button
jsFunc.addEventListener('click', conversion);


function conversion() {
  let rgbInput = input.value.split(','); //splits entered string into values array

  // assign each color values from array
  let redRGB = parseInt(rgbInput[0]);
  let greenRGB = parseInt(rgbInput[1]);
  let blueRGB = parseInt(rgbInput[2])


  //check if entered 3 values or format is correct
  if (rgbInput.length === 3) { 

      // check if values are numbers between 0 and 255
      if(redRGB <= 255 && redRGB >=0 && greenRGB >= 0 && greenRGB <= 255 && blueRGB <= 255 && blueRGB >= 0) { 

        // pass color values to hex function to convert to hex format
        let hexOutput = hexConstruct(redRGB, greenRGB, blueRGB); 
        
        // display conversion result
        output.value = hexOutput; 

      } else {alert("format d,d,d where d is a number between 0-255")};
   }  else   {alert("format d,d,d where d is a number between 0-255")}
 
}

function hexConstruct(r,g,b){

  //convert numbers to string and display as hex with 2 positions 
  let redHex = r.toString(16).padStart(2, '0').toUpperCase();
  let greenHex = g.toString(16).padStart(2, '0').toUpperCase();
  let blueHex = b.toString(16).padStart(2, '0').toUpperCase();
  
  return `#${redHex}${greenHex}${blueHex}`;
}

