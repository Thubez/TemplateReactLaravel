<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Questions extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('questions')->insert([
            ['id' => 1, 'section_id' => 1, 'content' => 'Manakah dari pernyataan berikut yang paling tepat menggambarkan hubungan antara pendidikan dan kesejahteraan ekonomi?', 'order' => 1, 'type' => 'multiple_choice', 'scoring_type' => 'binary', 'correct_points' => 5, 'incorrect_points' => 0],
            ['id' => 2, 'section_id' => 1, 'content' => 'Apa hubungan antara tingkat pendidikan dan tingkat penghasilan?', 'order' => 2, 'type' => 'multiple_choice', 'scoring_type' => 'binary', 'correct_points' => 5, 'incorrect_points' => 0],
            ['id' => 3, 'section_id' => 2, 'content' => 'Apa nilai dari integral ∫ 2x dx?', 'order' => 1, 'type' => 'multiple_choice', 'scoring_type' => 'binary', 'correct_points' => 5, 'incorrect_points' => 0],
            ['id' => 4, 'section_id' => 2, 'content' => 'Berapa hasil dari logaritma log₁₀(1000)?', 'order' => 2, 'type' => 'multiple_choice', 'scoring_type' => 'binary', 'correct_points' => 5, 'incorrect_points' => 0],
            ['id' => 5, 'section_id' => 3, 'content' => 'What is the main idea of the passage?', 'order' => 1, 'type' => 'scaled', 'scoring_type' => 'scaled', 'correct_points' => 1, 'incorrect_points' => 1],
            ['id' => 6, 'section_id' => 3, 'content' => 'Summarize the main point of the passage.', 'order' => 2, 'type' => 'scaled', 'scoring_type' => 'scaled', 'correct_points' => 1, 'incorrect_points' => 1],
        ]);
    }
}
