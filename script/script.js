const chiffre=["zero","one","two","three","four","five","six","seven","eight","nine"]
const decimal=["twenty","thirty","fourty","fifty","sixty","seventy","eighty","nintey"]
const tenToTwenty=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
const bigNumbers=["hundred","thousand","million","billion"]
function FinalNumberToLetter(number){
    let ch=""
    if(number<10){
        ch=ch+chiffre[number]
    }
    else if(number<20){
        ch=ch+tenToTwenty[number-10]
    }
    else{
        ch=BigNumber(number.toString())
    }
    return ch
}
function BigNumber(ch){
    let l=ch.length
    let result =""
    if(ch[0]!="0"){
        result+=chiffre[ch[0]]+" hundred "
    }
    if(ch[1]>1){
        result+="And "+decimal[ch[1]-2]+ " " 
        if(ch[2]!="0"){
            result+=chiffre[ch[2]]
        }
    }else{
        
        if(ch[1]=="1"){
            result+="And "
            result+=tenToTwenty[ch[2]]
        }
        else if(ch[2]!="0"){
            result+="And "
            result+=chiffre[ch[2]]
        }
    }
    return result
}
    // adding zeros to the start of the string till the length may be devided by 3
function addZeros(ch){
    while(((ch.length)%3)!=0){
        ch="0"+ch
    }
    return ch
}

// main function to convert a numeric number to letters 
function NumberToLetter(number){
    
    let result="" //final result
    number=addZeros(number) // adding zeros
    let l=number.length // saving the length of the string to be used in the loop as a caonstant value
    for(let i=(l/3) ; i>0;i--) {
        let test=1;
        let subNumber=number.substr(0,3) // substring to be converted to letters , first 3 numbers
        console.log("sub : "+subNumber)
        number=number.substring(3,number.length) // removing the first 3 numbers
        console.log("number : "+number)
        if(FinalNumberToLetter(Number(subNumber))!="zero"){
        result+=FinalNumberToLetter(Number(subNumber))+" "
        test=0
        }
        console.log(i-1)
        if(i>1 && test==0){
            result+=bigNumbers[i-1]+" , "
        }
        console.log(result)
    }
    return result
}
function displayNumber(){
    const number = document.getElementById("number").value
    console.log(number)
document.getElementsByTagName("span")[0].innerHTML=NumberToLetter(number)
}