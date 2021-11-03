<?php
$array = array(1, 2, 4, 5, 2, 3, 4);
// print_r(array_count_values($array));

$result = [];
for ($i = 0; $i < count($array); $i++) {
    $key = $array[$i];
    $result[$key]++;
}
print_r($result);
