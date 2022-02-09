function camelize(str) {
  // ваш код...

  // Option 1
  // let arr = str.split('-');
  // let newString = arr[0];
  
  // arr.forEach(function(item, index, array) {
  //   if (index > 0) {
  //     let newItem = item.charAt(0).toUpperCase() + item.slice(1);
  //     newString += newItem;
  //   } 
  // });
  // return newString;

  // Option 2
  // ваш код...
  let arr = str.split('-');
  
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');

}