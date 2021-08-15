function translateToKasteyano(input) 
{

  // clean up
  input = input.toLowerCase()

  // replace all double letter usages
  input = input.replace("ll", "y");
  input = input.replace("gu", "w");
  input = input.replace("qu", "k"); // We dont want the letter u to hand around after replacement

  // double letter to double letter
  input = input.replace("ca", "ka");
  input = input.replace("ce", "se");
  input = input.replace("ci", "si");
  input = input.replace("co", "ki");
  input = input.replace("cu", "ku");

  // single letters that were part of double replacements
  input = input.replace("q", "k");

 // single letter to multiple letter mapping
 input = input.replace("ñ", "ny");

  // single letter remapping
  input = input.replace("j", "g");
  input = input.replace("v", "b");
  input = input.replace("v", "b");

  return input
}

function load() 
{
  let translateButton = document.getElementById("translateButton");
  let textToTranslate = document.getElementById("textToTranslate");
  
  translateButton.onclick = function(){
    let translateValue = translateToKasteyano(textToTranslate.value)
    textToTranslate.value = translateValue
  };
}

// Load
load();

