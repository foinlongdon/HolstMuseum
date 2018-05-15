<?php
    
if (isset($_POST['submit']))
{
    $name=$_POST['name'];
    
    $email=$_POST['email'];
    
    $message=$_POST['message'];
    
    $adminwebsite="artizzans@gmail.com";
    
    mail($adminwebsite, $email, $name, $message, $email);
}

?>




<!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
<title>Holst Museum Cheltenham</title>
<link rel="icon" href="IMG/HolstLogo.png">
	
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="themes/themetest1.css" />
<link rel="stylesheet" href="themes/jquery.mobile.icons.min.css" />
<link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
<link rel="stylesheet" href="SCSSorSASS.scss" />
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="animate.css" />
<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<meta charset="utf-8">
<title>jQuery</title>
<link rel="icon" href="IMG/HolstIcon.png">
        </head>
        
        
        <body>
	
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="contactsentpage.css" />
    
        <center><h1> Your message has been sent!</h1>
    <h2> Click the button to go back to the home page </h2></center>
    
        <center><a href="http://ct5006-group3.studentsites.glos.ac.uk/"><button type="button" class="button" >Home</button></a></center>
            
        </body>
    
</html>