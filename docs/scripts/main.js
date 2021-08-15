function translateToKasteyano(input) 
{

  // clean up
  input = input.toLowerCase()

  // special cases
  input = input.replace(" r", "rr"); // first r in word starts with double rr
  input = input.replace("rrr", "rr"); // clear up too many r's


  // replace all double letter usages
  input = input.replace("ll", "y");
  input = input.replace("gu", "w");
  input = input.replace("qu", "k"); // We dont want the letter u to hand around after replacement
  input = input.replace("ch", "sh");

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
  input = input.replace("d", "th");
  input = input.replace("f", "ph");
  input = input.replace("z", "ss");
  input = input.replace("x", "ss");
  input = input.replace("j", "gh");
  input = input.replace("m", "nn");

  // vowels: single letter to multiple letter mapping
  input = input.replace("i", "ee");
  input = input.replace("í", "ee");
  input = input.replace("ï", "ee");
  input = input.replace("u", "oo");
  input = input.replace("ú", "oo");
  input = input.replace("ü", "oo");

  // single letter remapping
  input = input.replace("v", "b");
  input = input.replace("c", "s");

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

