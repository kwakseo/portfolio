<?php

if(!$_POST['page']) die("0");

$page = $_POST['page'] + ".html";

if(file_exists($page))
echo file_get_contents($page);

else echo 'There is no such page!';

?>