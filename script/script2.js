const chiffre=["zero","one","two","three","four","five","six","seven","eight","nine"]
const decimal=["twenty","thirty","fourty","fifty","sixty","seventy","eighty","nintey"]
const tenToTwenty=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
const bigNumbers=["hundred","thousand","million","billion"]
// adding zeros to the start of the string till the length may be devided by 3
function addZeros(ch){
    while(((ch.length)%3)!=0){
        ch="0"+ch
    }
    return ch
}
class NumberToLetters{
    constructor(number , index){
        this.number=number;
        this.index=index ;
    }
    __NumberToLetter__(){
        let result=""
        const array=[]
        const resultArray=["","",""]
        array[0]=chiffre[this.number[0]]
        array[1]=chiffre[this.number[1]]
        array[2]=chiffre[this.number[2]]   
        // hundreds
        if(array[0]!="zero"){
            resultArray[0]=array[0]+" "+"hundred"
        }
        let test=0        
        // Decimals
        if(array[1]=="one"){
            resultArray[1]=tenToTwenty[this.number[2]]
            test=1
        }
        else if(array[1]!="zero"){
            resultArray[1]=decimal[this.number[1]-2]
        }
        
        // units
        if(test==0 && array[2]!="zero"){
                resultArray[2]=array[2]
        }
        result = __CleanVersion__(resultArray)
        if(this.index>1){
            result+=bigNumbers[this.index-1]+" , "
        }
        return result
    }
}
function __CleanVersion__(resultArray){
    let result=""
    for(let i=0 ; i<3 ; i++){
        if(resultArray[i]!=""){
            result+=resultArray[i]
            if(i==0 && resultArray[0]!="" && (resultArray[1]!="" || resultArray[2]!="")){
                result+=" AND "
            }
            result+=" "
        }
    }
    return result      
}
function NumberToLetter(number){
    number=addZeros(number);
    let result=""
    let l=number.length // saving the length of the string to be used in the loop as a caonstant value
   for(let i=(l/3) ; i>0;i--) {
    const  subNumber=new NumberToLetters(number.substr(0,3) , i)
    number=number.substring(3,number.length) // removing the first 3 numbers
    result+=subNumber.__NumberToLetter__()          
   }
   return result
}
function displayNumber(){
    const number = document.getElementById("number").value
    console.log(number)
document.getElementsByTagName("span")[0].innerHTML=NumberToLetter(number)
}