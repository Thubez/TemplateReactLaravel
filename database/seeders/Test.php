<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Test extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tests')->insert([
            ['id' => 1, 'test_type_id' => 1, 'title' => 'UTBK Try Out Januari 2024', 'test_date' => '2024-01-15 08:00:00', 'duration' => 180],
            ['id' => 2, 'test_type_id' => 2, 'title' => 'TOEFL Test December 2023', 'test_date' => '2023-12-05 09:00:00', 'duration' => 120],
            ['id' => 3, 'test_type_id' => 3, 'title' => 'IELTS Academic Test November 2023', 'test_date' => '2023-11-15 10:00:00', 'duration' => 150],
            ['id' => 4, 'test_type_id' => 4, 'title' => 'CPNS Tes Seleksi 2024', 'test_date' => '2024-02-10 08:00:00', 'duration' => 180],
        ]);
    }
}
