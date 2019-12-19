<?php
header('Access-Control-Allow-Origin: *');
$pays = [
    'Afghanistan',
    'Arabie saoudite',
    'Bahreïn',
    'Bangladesh',
    'Bhoutan',
];
 
echo $pays[random_int(0,4)];