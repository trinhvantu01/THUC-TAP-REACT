<?php
function righteous($number)
{
    for ($i = 1; $i < $number; $i++) {
        $square = $i * $i;
        if ($square == $number) {
            return true;
        }
    }
}
if (righteous(4))
    echo ' là số chính phương';
else
    echo ' không là số chính phương';
