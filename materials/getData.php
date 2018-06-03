<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
      $mysqli = new mysqli('localhost', 'meteouser', 'kwZuq7b3', 'meteo');

      if ($mysqli->connect_errno) {
        echo "Підключення не вдалось";
      }

      $res = $mysqli->query("SELECT cur-temperature FROM current-data");

      while($row = $res->fetch_assoc()){
        echo "current temperature: " . $row['cur-temperature'] . "\n";
      }

    ?>
  </body>
</html>
