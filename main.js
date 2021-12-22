/* 
👉 Write your kata here!
*/
// You found someone leave you a secret message, 
// go and decode the message before you are in trouble.



//const encodedString = "crrng"
const encodedString = "k co pqy kp nc, eqog cpf hkpf og."
const decodedString = "i am now in la, come and find me."

//actual is crrng, expected is apple. 

export function decoder(encodedString){
    let alphabetASCLL = 0;
    let newArray = [];
    
    //For every alphabet in a word
    for(let i = 0; i < encodedString.length; i++){
        //Convert the alphabet into ASCLL code, save it in alphabetASCLL
        alphabetASCLL = encodedString[i].charCodeAt(0);

        //Check if it is a symbol or space
        if(alphabetASCLL >= 31 && alphabetASCLL <= 64 ||
            alphabetASCLL >= 91 && alphabetASCLL <= 96 ||
            alphabetASCLL >= 123 && alphabetASCLL <= 127){
            //Convert the ASCLL code back to alphabet, and push it into array
            newArray.push(String.fromCharCode(alphabetASCLL));
        
        } else {

            //Move 2 alphabet ahead 
            alphabetASCLL = alphabetASCLL - 2;
            //a, b will become y, z 
            if (alphabetASCLL < 97){
                alphabetASCLL = alphabetASCLL + 26;
            } 
            //Just in case it moves 2 alphabet downwards
            if (alphabetASCLL > 122){
                alphabetASCLL = alphabetASCLL - 26;
            }  
            console.log(alphabetASCLL);
            
            //Convert the ASCLL code back to alphabet, and push it into array
            newArray.push(String.fromCharCode(alphabetASCLL));
        }
    }
    //Join the array into a string
    let text = newArray.join("");

    console.log(text);

    return text;
}

//decoder(encodedString);

//👉 Write the function your CodeWarriors will start with below here:
