function bigWord (str){
    let words=str.split(" ");
    let bWord = '';
    for (const word of words){
        if(word.length> bWord.length){
           bWord=word;
        }
    }
    return bWord;
}

const value = bigWord("amar bhalobasha tumi robe nirobe ami ki tumake bhalobashi ni")
 console.log(value)