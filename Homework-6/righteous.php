<?php
function righteous($num)
{
    if ($num <= 0)
        return false;
    $square = 0;
    $i = 1;
    while ($square <= $num) {
        $square = $i * $i;
        if ($square == $num)
            return true;
        $i++;
    }
    return false;
}
if (righteous(4))
    echo ' là số chính phương';
else
    echo ' không là số chính phương';
