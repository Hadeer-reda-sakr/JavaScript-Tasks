let elements =document.cookie.split(";");

console.log(elements);

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].split(",")[0].split("=")[1])
    
}

if(elements[2].split(",")[0].split("=")[1] == "female" ){
    cimgGender.src ="./img/22.jpg"
}

else{
    cimgGender.src="./img/11.jpg"
}

cPara.innerHTML= `welcom <span style ="color:${elements[3].split(",")[0].split("=")[1]}">${elements[1].split(",")[0].split("=")[1]}</span> you have visited ${elements[4].split(",")[0].split("=")[1]} times`;
console.log(cPara.innertext)

function setcookie(Key,value) {
    document.cookie=`${Key} = ${value};expires = ${new Date().setDate(new Date().getDate() - 5)}`;
}

setcookie("cIndex",`${Number(elements[4].split(",")[0].split("=")[1]) + 1 } `)

console.log(elements[3].split(","))

//${elements[3].split(",")[0].split("=")[1]}

