<?php

$str = 'a';
echo 'chữ cái đứng sau là:'  . ++$str;
echo '<pre>';
$str = 'z';
$next_ch = ++$str;
if (strlen($next_ch) > 1) {
    $next_ch = $next_ch[0];
}
echo 'chữ cái đứng sau z là:' . $next_ch;
