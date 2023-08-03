/*add numbers***/
var sum =0;

function add() {

    

    if(arguments.length==0){
        throw new Error("enter at least one parameter")
    }

    for (let i = 0; i < arguments.length; i++) {
        if(!Number(arguments[i])){
            throw new Error ("allow only nubmber data type ")
        }

        sum +=Number(arguments[i]);
        
    }
    
}
//console.log(add(1,2,3,"h"));
/************************************************************* */

/*******revers 1 ****** */
function revers1() {
    var arr=[];

    if(arguments.length>0){
        for (let i = 0; i < arguments.length; i++) {
            arr[i]=arguments[i]   
        }
        return arr.reverse();
    }
    throw new Error("enter number please ")
}

console.log(revers1(1,15,2,5,9));

/*****revers 2***** */

function reverse2() {
    if(arguments.length>0){
   return [...arguments].reverse();
    }

    throw new Error("must enter number")
}
console.log(reverse2(1,2,9,15));

/*************************cookies******************* */

function setcookie(Key,value) {
    document.cookie=`${Key} = ${value};expires = ${new Date().setDate(new Date().getDate()-4)} `;
}

function allkookie(Key,value) {
    return document.cookie;
    
}

regist.addEventListener("click",function () {
    let gender= document.getElementsByName("gender");
    
    setcookie("cName",Nameinput.value);
    setcookie("cuserPassword",Ageinput.value);

    if(gender[0].check){
        setcookie("cGender",gender[0].value);
    }
    else{
        setcookie("cGender",gender[1].value);
    }


    setcookie("curserColor",colors.value);
    
    setcookie("cIndex", 1);

    window.open("./cookie.html","_self");

})


