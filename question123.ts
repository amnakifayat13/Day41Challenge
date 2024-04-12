/* Create a loop that iterates through a string and stops when it finds the first vowel.*/

function vowelFunc(str: string): void {
    let vowels = "aeiouAeiou";
    for (let char of str) {
        if(vowels.includes(char)){
            console.log(` First vowel found: ${char} `);
            break;
        }
        console.log(char);
        
    }


}
vowelFunc("fghrteghta");
