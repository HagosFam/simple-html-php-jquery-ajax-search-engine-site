<?php
// this is the search string
$q = $_REQUEST['q'];
//echo $q;
//making API call using curl
$url = 'https://jsonplaceholder.typicode.com/comments?postId=3';
//Initiate cURL.
$ch = curl_init($url);
//Disable CURLOPT_SSL_VERIFYHOST and CURLOPT_SSL_VERIFYPEER by
//setting them to false.
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
//Execute the request.
//Check for errors.
$response =  curl_exec($ch);
if(curl_errno($ch)){
    throw new Exception(curl_error($ch));
}
// $json_array = json_decode($response); // convert to object array
// $json_array = json_decode($response, true); // convert to array
// foreach($response as $json){
//     //echo $json['name']; // you can access your key value like this if result is array
//     echo $json->name; // you can access your key value like this if result is object
//  }
?>
