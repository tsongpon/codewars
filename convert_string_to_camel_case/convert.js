function convertToCamelCase(str) {
  if (str === "") {
    return "";
  }
  let words = [];
  if (str.includes('-')) {
    words = str.split('-');
  } else if (str.includes('_')) {
    words = str.split('_');
  } else {
    return str;
  }
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    result = result + capitalizeFirstLetter(words[i]);
  }
  return result;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = convertToCamelCase;
