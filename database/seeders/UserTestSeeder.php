<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('user_tests')->insert([
            ['id' => 1, 'user_id' => 1, 'test_id' => 1, 'start_time' => '2024-01-15 08:00:00', 'end_time' => '2024-01-15 11:00:00', 'score' => 90],
            ['id' => 2, 'user_id' => 2, 'test_id' => 2, 'start_time' => '2023-12-05 09:00:00', 'end_time' => '2023-12-05 11:00:00', 'score' => 85],
            ['id' => 3, 'user_id' => 3, 'test_id' => 3, 'start_time' => '2023-11-15 10:00:00', 'end_time' => '2023-11-15 12:30:00', 'score' => 120],
            ['id' => 4, 'user_id' => 4, 'test_id' => 4, 'start_time' => '2024-02-10 08:00:00', 'end_time' => '2024-02-10 11:30:00', 'score' => 75],
        ]);
    }
}
