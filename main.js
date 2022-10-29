function newStr(str){
    let word = '';
    
    for(let i = str.length - 1; i >= 0; i--){
      word += str[i];
      console.log(word);
    }
    return word;
  }
  
  newStr('Ally');
  