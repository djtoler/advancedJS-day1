// console.log(vowels.indexOf("apple"));



function translate (word) {
    let vowels = ["a", "e", "i", "o", "u"];
    let lowerCaseWord = word.toLowerCase();
    let firstVowel = lowerCaseWord.search(/[aeiou]/);
    if (   
        lowerCaseWord.indexOf(vowels[0])  == 0 || 
        lowerCaseWord.indexOf(vowels[1])  == 0 ||
        lowerCaseWord.indexOf(vowels[2])  == 0 ||
        lowerCaseWord.indexOf(vowels[3])  == 0 ||
        lowerCaseWord.indexOf(vowels[4])  == 0
    ) {
       lowerCaseWord = lowerCaseWord.concat("way")
      } 
    else {
        lowerCaseWord = lowerCaseWord.substr(firstVowel) + lowerCaseWord.substr(0, firstVowel) + 'ay';

        //  let consonants = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "s", "t", "v", "x", "z"]
        // consonants.forEach(element => {
        //     if (element == lowerCaseWord[0]) {
        //         for (let i = 0; i <= lowerCaseWord.length; i++) {
        //             console.log();
        //         }
        //     }
        // })
    }
       
    

      
        
   return lowerCaseWord     
}
    
console.log(translate ("APPLE"));
console.log(translate ("CHICKEN"));
console.log(translate ("CHICKENN"));

console.log(translate ("RHYTHMS"));



// if (
//     lowerCaseWord.indexOf(vowels[0])  == 0 || 
//     lowerCaseWord.indexOf(vowels[1])  == 0 ||
//     lowerCaseWord.indexOf(vowels[2])  == 0 ||
//     lowerCaseWord.indexOf(vowels[3])  == 0 ||
//     lowerCaseWord.indexOf(vowels[4])  == 0
// ) {
//     lowerCaseWord = lowerCaseWord.concat("way")
//   } else if (time < 20) {
//     greeting = "Good day";
//   } 

        // let newWord = [];
        // for (let i = 0; i <= lowerCaseWord.length; i++) {
        //     console.log(lowerCaseWord[i]);
            
            // if (lowerCaseWord.length == /^[aeiou]/) {
            //     console.log(lowerCaseWord);
            //    let halfWord = lowerCaseWord.slice(lowerCaseWord.charAt(0), lowerCaseWord.length)

            //    console.log(lowerCaseWord);
            // //    newWord.push(newWord1)
            // //    console.log(newWord1);
            // }
            // // console.log(lowerCaseWord[i]);

                    // lowerCaseWord.indexOf(vowels[0])  !== 0 || 
        // lowerCaseWord.indexOf(vowels[1])  !== 0 ||
        // lowerCaseWord.indexOf(vowels[2])  !== 0 ||
        // lowerCaseWord.indexOf(vowels[3])  !== 0 ||
        // lowerCaseWord.indexOf(vowels[4])  !== 0
        // lowerCaseWord.indexOf(consonants[0])  == 0 || 
        // lowerCaseWord.indexOf(consonants[1])  == 0 ||
        // lowerCaseWord.indexOf(consonants[2])  == 0 ||
        // lowerCaseWord.indexOf(consonants[3])  == 0 ||
        // lowerCaseWord.indexOf(consonants[4])  == 0 || 
        // lowerCaseWord.indexOf(consonants[5])  == 0 ||
        // lowerCaseWord.indexOf(consonants[6])  == 0 ||
        // lowerCaseWord.indexOf(consonants[7])  == 0 ||
        // lowerCaseWord.indexOf(consonants[8])  == 0 || 
        // lowerCaseWord.indexOf(consonants[9])  == 0 ||
        // lowerCaseWord.indexOf(consonants[10])  == 0 ||
        // lowerCaseWord.indexOf(consonants[11])  == 0 ||
        // lowerCaseWord.indexOf(consonants[12])  == 0 || 
        // lowerCaseWord.indexOf(consonants[13])  == 0 ||
        // lowerCaseWord.indexOf(consonants[14])  == 0 ||
        // lowerCaseWord.indexOf(consonants[15])  == 0 ||
        // lowerCaseWord.indexOf(consonants[16])  == 0 

module.exports = translate;