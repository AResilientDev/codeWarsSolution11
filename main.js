function alphabetPosition(text) {
  //define the alphabet
  //define cleanStr which makes our code case insensitive
  //via the toLowerCase method,
  //we use the match method in conjunction with regex to find all values (g) that match letters a-z
  //i is what makes our search case insensitive
  //toString then makes sure our text is in fact a string
  //and replace will switch out any commas we may come across for spaces
  //define newString as an empty sting to be updated later on in our code
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var cleanStr = text.toLowerCase().match(/[a-z]/gi).toString().replace(/,/g,'');
  var newString = "";


  // nested for loops used in order to iterate over both the alphabet and the string
  for(var i =0; i<=cleanStr.length; i++){

    for(var x = 0; x<=alphabet.length-1; x++){

      //once a letter in the string corresponds with a letter in our alpha this code runs
      if(cleanStr[i] == alphabet[x]){

      //ternary operator used in place of another conditional
      //condition ? what to do if true : what to do if false
      //if i == to the length of of the string -1 newstring gets updated with the number of the letter's position + 1
      //else it is updated with its respective number and concatenated into a string
      (i == cleanStr.length-1)?newString += (x+1):newString += (x+1)+' ';
      };


    };



  };
  //reurns our new number string
  return newString;
};
