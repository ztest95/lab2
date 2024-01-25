<?php

// PHP: Variables
$score = intval($_GET['score']);

$randomNumber = rand(0, 2);
// PHP: Data Types
$message = NULL;

// PHP: Conditionals
if ($score > 4) {
    $message = "You won!";
}



?>