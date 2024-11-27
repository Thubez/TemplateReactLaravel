<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnswerOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('answer_options')->insert([
            ['id' => 1, 'question_id' => 1, 'content' => 'Pendidikan selalu menjamin kesejahteraan ekonomi.', 'is_correct' => false, 'points' => 0],
            ['id' => 2, 'question_id' => 1, 'content' => 'Pendidikan dapat meningkatkan peluang untuk mencapai kesejahteraan ekonomi.', 'is_correct' => true, 'points' => 5],
            ['id' => 3, 'question_id' => 1, 'content' => 'Kesejahteraan ekonomi tidak ada hubungannya dengan pendidikan.', 'is_correct' => false, 'points' => 0],
            ['id' => 4, 'question_id' => 1, 'content' => 'Pendidikan menghambat kesejahteraan ekonomi.', 'is_correct' => false, 'points' => 0],
            
            ['id' => 5, 'question_id' => 2, 'content' => 'Sangat tidak setuju', 'is_correct' => false, 'points' => 1],
            ['id' => 6, 'question_id' => 2, 'content' => 'Tidak setuju', 'is_correct' => false, 'points' => 2],
            ['id' => 7, 'question_id' => 2, 'content' => 'Netral', 'is_correct' => false, 'points' => 3],
            ['id' => 8, 'question_id' => 2, 'content' => 'Setuju', 'is_correct' => false, 'points' => 4],
            ['id' => 9, 'question_id' => 2, 'content' => 'Sangat setuju', 'is_correct' => false, 'points' => 5],
            
            ['id' => 10, 'question_id' => 3, 'content' => 'What is the main idea of the passage?', 'is_correct' => false, 'points' => 1],
            ['id' => 11, 'question_id' => 3, 'content' => 'Summarize the main point of the passage.', 'is_correct' => false, 'points' => 1],
            ['id' => 12, 'question_id' => 3, 'content' => 'Identify the author’s argument.', 'is_correct' => false, 'points' => 1],
            ['id' => 13, 'question_id' => 3, 'content' => 'State the conclusion drawn by the author.', 'is_correct' => false, 'points' => 1],
        ]);
    }
}
