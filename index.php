<?php   

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$msg = $_POST['msg'];


if($name and $email and $subject and $msg != "")
{

// Database connection
$conn = new mysqli('localhost', 'root', '','eventlogin');
$stmt = $conn->prepare("insert into event(name,email,subject,message)values(?,?,?,? )");
$stmt->bind_param("ssss",$name,$email,$subject,$msg);
$stmt->execute();
echo '<script>alert("Thanks We Will Connect With You Soon!")</script>';
$stmt->close();
$conn->close();

}
else
{
   echo '<script>alert("Please Fill All The Fields!")</script>';

}



?>