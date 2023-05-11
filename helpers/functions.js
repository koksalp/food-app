import { API_OPTIONS, CATEGORIES } from "./constants";

export async function getItemData(itemName) {
  try {
    const request = await fetch(
      `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${itemName}`, 
      API_OPTIONS
    );
    var data = await request.json();
  } catch (error) {
    console.log(error);
  }
  
  return data;
}
function getRandomInteger(min = 0, max = 255) {
  // lower boundary cannot be bigger than upper boundary

  if (min > max) {
    return;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addTrailingZero(str) {
  str = str.toString();

  if (str.length === 1) {
    return "0" + str;
  }
  return str;
}

export function generateRandomColor(alpha = 0.75) {
  if (typeof alpha !== "number" || alpha > 1 || alpha < 0) {
    return "#f0f0f0";
  }

  const colorLength = 3;
  let randomColor = "";

  for (let i = 0; i < colorLength; i++) {
    randomColor += addTrailingZero(getRandomInteger().toString(16));
  }

  alpha = alpha === 1 ? "" : Math.ceil(255 * alpha).toString(16);

  return ("#" + randomColor + alpha).toUpperCase();
}

export function getCategories() {
  if (CATEGORIES.fruits.items[0].color !== undefined) {
    return CATEGORIES;
  }
  for (let category in CATEGORIES) {
    CATEGORIES[category].items.forEach((item) => {
      item.color = generateRandomColor();
    });
  }

  return CATEGORIES;
}

export function getItemUri(itemName, categoryName) { 
  const items = CATEGORIES[categoryName].items; 

  for (let i=0; i<items.length; i++) {
    if (items[i].name === itemName) {
      return items[i].uri; 
    }
  } 
  return null; 
} 
export function getProperString(string, char="_") { 
  const charLastIndex = string.lastIndexOf(char); ""

  if (charLastIndex === -1) { 
    return string[0].toUpperCase() + string.slice(1); 
  } 

  const massType = "(" + string.slice(charLastIndex + 1) + ")"; 
  string=string.slice(0, charLastIndex); 
  let properString=""; 
  let capitalize=true; 
  for (let i=0; i<string.length; i++) { 
    if (string[i] === char) {
      properString+=" "; 
      capitalize=true; 
    } else if (capitalize) {
      properString+= string[i].toUpperCase(); 
      capitalize=false; 
    } else {
      properString+= string[i]; 
    }
  } 
  return `${properString} ${massType}`; 
} 


