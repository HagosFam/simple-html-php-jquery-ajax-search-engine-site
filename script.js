function showSuggestions(str) {
    console.log(str)
    // if string is null -> early exiting
    if (str == "") {
       // document.getElementById('results').innerHTML = "Empty string";
    }
else {
    // making ajax call to php/public/index.php is not working for me (it took me much time to use this).
    // the could be something related to path
    // but it didn't worked. Then i created my own suggest.php and made the ajax call to this file
    // this suggest.php file is in same directory with this script file.
    var xmlHttpReq = new XMLHttpRequest();
       xmlHttpReq.open("GET", "suggest.php?q="+str, true );
       xmlHttpReq.send();
       xmlHttpReq.onreadystatechange = function() {
        if(this.readyState==4 && this.status==200  ) { 
             let response =  JSON.parse(this.responseText);
             let searchResult =   response.filter(item=>item.name.includes(str)).map(element=> element.name);
             const result = ` <a href="">   <li> <p style="color: black">  ${searchResult.join('</li><li>')} </p> </li> </a>`;
             document.getElementById('results').innerHTML = result;           
        }
       }
}

}