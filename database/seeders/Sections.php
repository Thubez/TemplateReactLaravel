<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Sections extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sections')->insert([
            ['id' => 1, 'test_id' => 1, 'name' => 'Penalaran Umum', 'order' => 1, 'duration' => 90],
            ['id' => 2, 'test_id' => 1, 'name' => 'Matematika Dasar', 'order' => 2, 'duration' => 60],
            ['id' => 3, 'test_id' => 2, 'name' => 'Listening Comprehension', 'order' => 1, 'duration' => 30],
            ['id' => 4, 'test_id' => 2, 'name' => 'Reading Comprehension', 'order' => 2, 'duration' => 45],
            ['id' => 5, 'test_id' => 3, 'name' => 'Listening Section', 'order' => 1, 'duration' => 35],
            ['id' => 6, 'test_id' => 3, 'name' => 'Reading Section', 'order' => 2, 'duration' => 35],
            ['id' => 7, 'test_id' => 4, 'name' => 'Tes Pengetahuan Umum', 'order' => 1, 'duration' => 90],
        ]);
    }
}
