<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = 'Visit booked. Please contact me!';
	$to = "mikolaj.cieszczyk@gmail.com";
	$from = $_POST['email'];
	$name = $_POST['name'];
	$tel = $_POST['tel'];
	$address = $_POST['address'];
	$postcode = $_POST['postcode'];
	$date = $_POST['date'];
	$notes = $_POST['notes'];
	$whichService = $_POST['whichService'];
	$whichPackage = $_POST['whichPackage'];
	$cleanup = $_POST['cleanup'];
	$hedgeTrim = $_POST['hedgeTrim'];
	$treeSurgery = $_POST['treeSurgery'];
	$lawnCare = $_POST['lawnCare'];
	$planting = $_POST['planting'];
	$pruning = $_POST['pruning'];
	$knotweed = $_POST['knotweed'];
	$other = $_POST['other'];

	$oneOffArr = array();

	array_push($oneOffArr, $cleanup, $hedgeTrim, $treeSurgery, $lawnCare,
	$planting, $pruning, $knotweed, $other);

	$cleaned_array = array_filter($oneOffArr);

	$printOneOffArr = implode(", ", $cleaned_array);

	// data

	$msg = 
	"
	Hello,<br>
	my name is <b>$name</b> and I wanted to <u>book a visit</u>.<br>
	My preffered date of service is <b>$date</b>.<br>
	<u>I have chosen:</u>
	<p>Which type of service: <b>$whichService</b></p>
	<p><b>$whichPackage</b></p> 
	<b>one-off services</b>:<br>
	<p>$printOneOffArr</p>
	
	<h3>My additional remarks:</h3>
	<p>$notes</p>

	<h3>My data</h3>
	<span>Name: $name</span><br>
	<span>Street: $address</span><br>
	<span>Postcode: $postcode</span><br>
	<span>E-mail: $from</span><br>
	<span>Phone: $tel</span><br>

	<center><p><i>message sent from grassgo website</i></p></center>
	";

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>