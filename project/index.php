<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP index</title>
    <link rel="stylesheet" href="styles/style.css">
    <script src="js/calculatorScript.js"></script>
    <script src="js/lippScript.js"></script>
    <script src="js/KusimusScripts.js"></script>
</head>
<body>
<?php
include("header.php");
?>
<?php
include("nav.php");
?>
<main>
<?php
    if(isset($_GET["leht"])){
        include('content/'.$_GET["leht"]);
    } else {
        include('content/avaleht.php');
    }
?>
</main>
<?php
include("footer.php");
?>
</body>
</html>