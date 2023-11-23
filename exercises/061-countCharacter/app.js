function countCharacter(str, char) {
    // your code here
    let contador = 0

    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            contador ++
        }
    } return contador 

}