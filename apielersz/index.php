<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/index.css?v=2.0">

    <title>Document</title>
</head>
<body>
    <h1>API ELERES</h1>
<?php
include("menu.php");
?>
 <div id="tarolo">
  <?php

if (isset($_GET['lap']) && file_exists("./page/".$_GET["lap"].".php")) {
  include("./page/".$_GET["lap"].".php");
  if (file_exists("./css/".$_GET['lap'].".css")) {
    ?>
        <link rel="stylesheet" href="./css/<?php echo $_GET['lap']; ?>.css?v=2.0">
    <?php
  }else{
    print_r("CSS hiba");
  }
  if (file_exists("./js/".$_GET['lap'].".js")) {
    ?>
        <script type="module" src="./js/<?php echo $_GET['lap']; ?>.js?v=4.0"></script>
    <?php
  }else{
    print_r("JS hiba");
  }
}else{
  include_once("index.php");
  echo "<h1>Főoldal</h1>";
}
?>
</div>

</body>
</html>