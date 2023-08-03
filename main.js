var tbody = document.getElementById("tbody");
var user=[1,2,3];

 var i =1;
function execute () {
    var xhr = new XMLHttpRequest();
     xhr.open("GET" , "https://jsonplaceholder.typicode.com/users/"+i);

    xhr.send("");
    console.log(user)
   i++;

   if(i==11)(
    alert("the end")
   )
xhr.onreadystatechange = function () {
        if(xhr.readyState == 4){
            var data = JSON.parse(this.response);
           
            var tr = document.createElement("tr");

            tr.innerHTML="<td>"+ data.id +"</td>" + "<td>" + data.name  +"</td>" + "<td>"+ data.Email +"</td>";

            tbody.append(tr);
        }
    }
    
   



    
  
    
    
}