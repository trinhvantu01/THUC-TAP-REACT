<?php
$classUsers = [
    [
        'id' => 1,
        'name' => 'ThanhNV',
        'email'  => 'thanhnv@gmail.com',
        'score' => 6
    ],
    [
        'id' => 2,
        'name' => 'TuTV',
        'email'  => 'tutv@gmail.com',
        'score' => 10
    ],
    [
        'id' => 3,
        'name' => 'KhanhNB',
        'email'  => 'khanhnb@gmail.com',
        'score' => 8
    ],
    [
        'id' => 4,
        'name' => 'NamNV',
        'email'  => 'namnv@gmail.com',
        'score' => 8
    ],
    [
        'id' => 5,
        'name' => 'TuanTQ',
        'email'  => 'tuantq@gmail.com',
        'score' => 5
    ],
    [
        'id' => 6,
        'name' => 'QuynhNB',
        'email'  => 'qunhnb@gmail.com',
        'score' => 7
    ],
    [
        'id' => 7,
        'name' => 'TrungNV',
        'email'  =>  'trungnv@gmail.com',
        'score' => 3
    ],
];
$result = [];
foreach ($classUsers as $user) {
    if (strpos($user['name'], 'T') === 0 and $user['score'] > 6) {
        $result[] = $user;
    }
}
print_r(($result));
