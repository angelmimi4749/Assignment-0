function titleCaseEdit(title) {

  // the string in the variable title will be split into an array of strings(each word)
  const arr = title.split(" ");

  //using a for loop to go through each element (word) in the array and capitalizing the first letter
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  
  //"join" all the elements back to a string separating them with a space
  const titleNew = arr.join(" ");
  return(titleNew);
}

// Do not edit this line;
module.exports = titleCaseEdit;