<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestTypes extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('test_types')->insert([
            ['id' => 1, 'name' => 'UTBK', 'description' => 'Ujian Tulis Berbasis Komputer untuk seleksi masuk perguruan tinggi'],
            ['id' => 2, 'name' => 'TOEFL', 'description' => 'Tes Bahasa Inggris sebagai Persyaratan Masuk Perguruan Tinggi Internasional'],
            ['id' => 3, 'name' => 'IELTS', 'description' => 'Sistem Ujian Bahasa Inggris Internasional'],
            ['id' => 4, 'name' => 'CPNS', 'description' => 'Seleksi Calon Pegawai Negeri Sipil'],
            ['id' => 5, 'name' => 'SBMPTN', 'description' => 'Seleksi Bersama Masuk Perguruan Tinggi Nasional'],
        ]);
    }
}
