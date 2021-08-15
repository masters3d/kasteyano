function translateToKasteyano(input) 
{

  // clean up
  input = input.toLowerCase()

  // special cases
  input = input.replaceAll(" r", "rr"); // first r in word starts with double rr
  input = input.replaceAll("rrr", "rr"); // clear up too many r's


  // replace all double letter usages
  input = input.replaceAll("ll", "y");
  input = input.replaceAll("gu", "w");
  input = input.replaceAll("qu", "k"); // We dont want the letter u to hand around after replacement
  input = input.replaceAll("ch", "sh");

  // double letter to double letter
  input = input.replaceAll("ca", "ka");
  input = input.replaceAll("ce", "se");
  input = input.replaceAll("ci", "si");
  input = input.replaceAll("co", "ki");
  input = input.replaceAll("cu", "ku");

  // single letters that were part of double replacements
  input = input.replaceAll("q", "k");

  // single letter to multiple letter mapping
  input = input.replaceAll("ñ", "ny");
  input = input.replaceAll("d", "th");
  input = input.replaceAll("f", "ph");
  input = input.replaceAll("z", "ss");
  input = input.replaceAll("x", "ss");
  input = input.replaceAll("j", "gh");
  input = input.replaceAll("m", "nn");

  // vowels: single letter to multiple letter mapping
  input = input.replaceAll("i", "ee");
  input = input.replaceAll("í", "ee");
  input = input.replaceAll("ï", "ee");
  input = input.replaceAll("u", "oo");
  input = input.replaceAll("ú", "oo");
  input = input.replaceAll("ü", "oo");

  // single letter remapping
  input = input.replaceAll("v", "b");
  input = input.replaceAll("c", "s");

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

