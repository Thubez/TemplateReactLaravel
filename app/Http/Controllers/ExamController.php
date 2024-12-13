<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function detailPageExam($category)
    {
        // Simulasi data dinamis, Anda bisa mengambilnya dari database
        $examCategories = [
            'utbk' => [
                'title' => 'UTBK (Ujian Tertulis Berbasis Komputer)',
                'description' => 'Persiapkan diri Anda...',
                'duration' => '195 menit',
                'questions' => '120 soal',
                'instructor' => 'Tim Ahli UTBK',
                'price' => 199000,
                'rating' => 4.8,
                'students' => 1250,
                'sections' => [
                    ['title' => 'TPS (Tes Potensi Skolastik)', 'description' => 'Uji kemampuan Anda dalam mencapai potensi skolastik yang diperlukan untuk berhasil di bidang teknik informatika.', 'lessons' => 5, 'content' => [
                        ['name' => 'Analisis Pola Kesalahan', 'description' => 'Latih kemampuan memahami dan menganalisis informasi dalam bentuk teks.'],
                        ['name' => 'Rekomendasi Materi Belajar', 'description' => 'Akses ke ribuan soal latihan dan materi pembelajaran yang terstruktur.'],
                        ['name' => 'Simulasi Ujian Adaptif', 'description' => 'Simulasi ujian yang mencakup semua mata pelajaran.'],
                        ['name' => 'Pelacakan Kemajuan Berbasis AI', 'description' => 'Latih kemampuan membangun dan memelihara hubungan kerja yang baik.'],
                    ]],
                    ['title' => 'TKA Saintek', 'description' => 'Uji kemampuan Anda dalam mencapai potensi saintek yang diperlukan untuk berhasil di bidang teknik informatika.', 'lessons' => 4, 'content' => [
                        ['name' => 'Analisis Verbal', 'description' => 'Latih kemampuan memahami dan menganalisis informasi dalam bentuk teks.'],
                        ['name' => 'Analisis Numerik', 'description' => 'Asah keterampilan berhitung dan memecahkan masalah matematis.'],
                        ['name' => 'Analisis Figural', 'description' => 'Kembangkan kemampuan penalaran spasial dan pola visual.'],
                        ['name' => 'Analisis Logis', 'description' => 'Tingkatkan kemampuan berpikir logis dan kritis dalam berbagai situasi.'],
                    ]],
                    ['title' => 'TKA Soshum', 'description' => 'Uji kemampuan Anda dalam mencapai potensi soshum yang diperlukan untuk berhasil di bidang teknik informatika.', 'lessons' => 4, 'content' => [
                        ['name' => 'Analisis Verbal', 'description' => 'Latih kemampuan memahami dan menganalisis informasi dalam bentuk teks.'],
                        ['name' => 'Analisis Numerik', 'description' => 'Asah keterampilan berhitung dan memecahkan masalah matematis.'],
                        ['name' => 'Analisis Figural', 'description' => 'Kembangkan kemampuan penalaran spasial dan pola visual.'],
                        ['name' => 'Analisis Logis', 'description' => 'Tingkatkan kemampuan berpikir logis dan kritis dalam berbagai situasi.'],
                    ]],
                    ['title' => 'Literasi Bahasa Indonesia', 'description' => 'Uji kemampuan Anda dalam mencapai potensi literasi bahasa Indonesia yang diperlukan untuk berhasil di bidang teknik informatika.', 'lessons' => 3, 'content' => [
                        ['name' => 'Analisis Verbal', 'description' => 'Latih kemampuan memahami dan menganalisis informasi dalam bentuk teks.'],
                        ['name' => 'Analisis Numerik', 'description' => 'Asah keterampilan berhitung dan memecahkan masalah matematis.'],
                        ['name' => 'Analisis Figural', 'description' => 'Kembangkan kemampuan penalaran spasial dan pola visual.'],
                        ['name' => 'Analisis Logis', 'description' => 'Tingkatkan kemampuan berpikir logis dan kritis dalam berbagai situasi.'],
                    ]],
                ],
                'features' => [
                    'Materi sesuai dengan kurikulum UTBK terkini.',
                    'Simulasi ujian yang mencakup semua mata pelajaran.',
                    'Analisis AI untuk meningkatkan hasil belajar.',
                    'Akses selama 3 bulan.'
                ],
            ],
            'toefl' => [
                'title' => 'TOEFL (Test of English as a Foreign Language)',
                'description' => 'Tingkatkan kemampuan bahasa Inggris Anda dan persiapkan diri untuk TOEFL dengan materi yang terstruktur.',
                
                'instructor' => 'Native English Experts',
                'price' => 249000,
                'rating' => 4.9,
                'students' => 980,
                'sections' => [
                    ['title' => 'Reading Comprehension', 'description' => 'Uji kemampuan Anda dalam mencapai potensi pengertian yang diperlukan untuk berhasil di bidang teknik informatika.', 'lessons' => 5, 'content' => [
                        ['name' => 'Analisis Verbal', 'description' => 'Latih kemampuan memahami dan menganalisis informasi dalam bentuk teks.'],
                        ['name' => 'Analisis Numerik', 'description' => 'Asah keterampilan berhitung dan memecahkan masalah matematis.'],
                        ['name' => 'Analisis Figural', 'description' => 'Kembangkan kemampuan penalaran spasial dan pola visual.'],
                        ['name' => 'Analisis Logis', 'description' => 'Tingkatkan kemampuan berpikir logis dan kritis dalam berbagai situasi.'],
                    ]],
                    ['title' => 'Listening Comprehension', 'description' => 'Uji kemampuan Anda dalam mencapai potensi pengertian yang diperlukan untuk berhasil di bidang teknik informatika.', 'lessons' => 4, 'content' => [
                        ['name' => 'Analisis Verbal', 'description' => 'Latih kemampuan memahami dan menganalisis informasi dalam bentuk teks.'],
                        ['name' => 'Analisis Numerik', 'description' => 'Asah keterampilan berhitung dan memecahkan masalah matematis.'],
                        ['name' => 'Analisis Figural', 'description' => 'Kembangkan kemampuan penalaran spasial dan pola visual.'],
                        ['name' => 'Analisis Logis', 'description' => 'Tingkatkan kemampuan berpikir logis dan kritis dalam berbagai situasi.'],
                    ]],
                    ['title' => 'Structure and Written Expression', 'description' => 'Uji kemampuan Anda dalam mencapai potensi pengertian yang diperlukan untuk berhasil di bidang teknik informatika.', 'lessons' => 4, 'content' => [
                        ['name' => 'Analisis Verbal', 'description' => 'Latih kemampuan memahami dan menganalisis informasi dalam bentuk teks.'],
                        ['name' => 'Analisis Numerik', 'description' => 'Asah keterampilan berhitung dan memecahkan masalah matematis.'],
                        ['name' => 'Analisis Figural', 'description' => 'Kembangkan kemampuan penalaran spasial dan pola visual.'],
                        ['name' => 'Analisis Logis', 'description' => 'Tingkatkan kemampuan berpikir logis dan kritis dalam berbagai situasi.'],
                    ]],
                    ['title' => 'Writing', 'description' => 'Uji kemampuan Anda dalam mencapai potensi pengertian yang diperlukan untuk berhasil di bidang teknik informatika.', 'lessons' => 3, 'content' => [
                        ['name' => 'Analisis Verbal', 'description' => 'Latih kemampuan memahami dan menganalisis informasi dalam bentuk teks.'],
                        ['name' => 'Analisis Numerik', 'description' => 'Asah keterampilan berhitung dan memecahkan masalah matematis.'],
                        ['name' => 'Analisis Figural', 'description' => 'Kembangkan kemampuan penalaran spasial dan pola visual.'],
                        ['name' => 'Analisis Logis', 'description' => 'Tingkatkan kemampuan berpikir logis dan kritis dalam berbagai situasi.'],
                    ]],
                ],
                'features' => [
                    'Materi pelajaran terstruktur sesuai ujian TOEFL.',
                    '20 Paket Tryout dengan simulasi ujian dan 140 soal realistis.',
                    'Durasi belajar hingga 180 menit per sesi.',
                    'Pembahasan soal mendalam oleh Native English Experts.',
                    'Fitur analisis AI untuk evaluasi dan saran perbaikan.',
                    'Akses penuh selama 3 bulan tanpa batasan.'
                ],
            ],
            'cpns' => [
                'title' => 'CPNS (Calon Pegawai Negeri Sipil)',
                'description' => 'Persiapkan diri Anda untuk tes CPNS dengan latihan soal yang update dan sesuai dengan standar terbaru.',
                'duration' => '180 menit',
                'questions' => '100 soal',
                'instructor' => 'Tim Ahli ASN',
                'price' => 179000,
                'rating' => 4.7,
                'students' => 2100,
                'sections' => [
                    [
                        'title' => 'TWK (Tes Wawasan Kebangsaan)',
                        'description' => 'Uji pemahaman Anda tentang dasar-dasar kebangsaan dan kenegaraan Indonesia.',
                        'lessons' => 5,
                        'content' => [
                            ['name' => 'Nasionalisme', 'description' => 'Pahami konsep dan implementasi nasionalisme dalam konteks Indonesia.'],
                            ['name' => 'Integritas', 'description' => 'Pelajari pentingnya integritas dalam pelayanan publik dan pemerintahan.'],
                            ['name' => 'Bela Negara', 'description' => 'Kenali konsep dan praktik bela negara dalam kehidupan sehari-hari.'],
                            ['name' => 'Pilar Negara', 'description' => 'Dalami Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika.'],
                            ['name' => 'Bahasa Indonesia', 'description' => 'Tingkatkan kemampuan berbahasa Indonesia yang baik dan benar.'],
                        ]
                    ],
                    [
                        'title' => 'TIU (Tes Intelegensi Umum)',
                        'description' => 'Uji kemampuan kognitif dan daya nalar Anda dalam berbagai aspek.',
                        'lessons' => 4,
                        'content' => [
                            ['name' => 'Analisis Verbal', 'description' => 'Latih kemampuan memahami dan menganalisis informasi dalam bentuk teks.'],
                            ['name' => 'Analisis Numerik', 'description' => 'Asah keterampilan berhitung dan memecahkan masalah matematis.'],
                            ['name' => 'Analisis Figural', 'description' => 'Kembangkan kemampuan penalaran spasial dan pola visual.'],
                            ['name' => 'Analisis Logis', 'description' => 'Tingkatkan kemampuan berpikir logis dan kritis dalam berbagai situasi.'],
                        ]
                    ],
                    [
                        'title' => 'TKP (Tes Karakteristik Pribadi)',
                        'description' => 'Evaluasi aspek kepribadian dan soft skills yang relevan dengan pelayanan publik.',
                        'lessons' => 4,
                        'content' => [
                            ['name' => 'Pelayanan Publik', 'description' => 'Pelajari prinsip dan praktik pelayanan publik yang efektif.'],
                            ['name' => 'Sosial Budaya', 'description' => 'Pahami keragaman sosial budaya Indonesia dan implikasinya.'],
                            ['name' => 'Profesionalisme', 'description' => 'Kembangkan sikap dan perilaku profesional dalam bekerja.'],
                            ['name' => 'Jejaring Kerja', 'description' => 'Latih kemampuan membangun dan memelihara hubungan kerja yang baik.'],
                        ]
                    ],
                ],
                'features' => [
                    'Soal sesuai dengan standar terbaru CPNS.',
                    'Pembahasan lengkap untuk setiap jawaban.',
                    'Latihan soal beragam untuk setiap kategori tes (TWK, TIU, TKP).',
                    'Analisis performa dengan rekomendasi perbaikan.',
                    'Akses penuh selama 3 bulan dengan pembaruan materi.'
                ],
            ],
            'itps' => [
                'title' => 'ITPS (Industry Test of Professional Skills)',
                'description' => 'Uji kemampuan Anda dalam mencapai potensi profesional yang diperlukan untuk berhasil di bidang teknik informatika.',
                'duration' => '180 menit',
                'questions' => '100 soal',
                'instructor' => 'Tim Ahli ITPS',
                'price' => 179000,
                'rating' => 4.7,
                'students' => 2100,
                'sections' => [
                    [
                        'title' => 'Dasar-Dasar Pemrograman',
                        'description' => 'Pelajari konsep pemrograman dasar yang mendukung pengembangan perangkat lunak.',
                        'lessons' => 5,
                        'content' => [
                            ['name' => 'Algoritma', 'description' => 'Pahami dasar-dasar algoritma dalam pemrograman.'],
                            ['name' => 'Struktur Data', 'description' => 'Kenali berbagai struktur data dan penggunaannya.'],
                            ['name' => 'Pemrograman Berorientasi Objek', 'description' => 'Pelajari konsep OOP dalam bahasa pemrograman.'],
                            ['name' => 'Debugging', 'description' => 'Teknik dan metode untuk menemukan dan memperbaiki bug dalam kode.'],
                            ['name' => 'Pengembangan Web', 'description' => 'Dasar-dasar pengembangan web dan teknologi terkait.'],
                        ]
                    ],
                    [
                        'title' => 'Dasar-Dasar Sistem Operasi',
                        'description' => 'Pelajari konsep dasar-dasar sistem operasi yang mendukung pengembangan perangkat lunak.',
                        'lessons' => 4,
                        'content' => [
                            ['name' => 'Sistem Operasi', 'description' => 'Pahami dasar-dasar sistem operasi yang mendukung pengembangan perangkat lunak.'],
                            ['name' => 'Pengembangan Perangkat Lunak', 'description' => 'Pelajari konsep pemrograman dasar yang mendukung pengembangan perangkat lunak.'],
                            ['name' => 'Pengembangan Mobile', 'description' => 'Dasar-dasar pengembangan aplikasi mobile dan teknologi terkait.'],
                            ['name' => 'Pengembangan Web', 'description' => 'Dasar-dasar pengembangan web dan teknologi terkait.'],
                        ]
                    ],
                    [
                        'title' => 'Dasar-Dasar Perangkat Lunak',
                        'description' => 'Pelajari konsep dasar-dasar perangkat lunak yang mendukung pengembangan perangkat lunak.',
                        'lessons' => 4,
                        'content' => [
                            ['name' => 'Perangkat Lunak', 'description' => 'Pahami dasar-dasar perangkat lunak yang mendukung pengembangan perangkat lunak.'],
                            ['name' => 'Pengembangan Perangkat Lunak', 'description' => 'Pelajari konsep pemrograman dasar yang mendukung pengembangan perangkat lunak.'],
                            ['name' => 'Pengembangan Mobile', 'description' => 'Dasar-dasar pengembangan aplikasi mobile dan teknologi terkait.'],
                            ['name' => 'Pengembangan Web', 'description' => 'Dasar-dasar pengembangan web dan teknologi terkait.'],
                        ]
                    ],
                ],
                'features' => [
                    'Soal sesuai dengan standar industri terbaru.',
                    'Pembahasan detail untuk setiap jawaban.',
                    'Latihan soal beragam untuk setiap kategori tes.',
                    'Analisis performa dengan saran perbaikan.',
                    'Akses penuh selama 3 bulan dengan pembaruan materi.'
                ],
            ],
            'ielts' => [
                'title' => 'IELTS (International English Language Testing System)',
                'description' => 'Uji kemampuan bahasa Inggris Anda dalam mencapai potensi pengertian yang diperlukan untuk berhasil di bidang teknik informatika.',
                'instructor' => 'Native English Experts',
                'price' => 249000,
                'rating' => 4.9,
                'students' => 980,
                'sections' => [
                    [
                        'title' => 'Listening',
                        'description' => 'Tingkatkan kemampuan mendengarkan dengan berbagai tipe audio.',
                        'lessons' => 7,
                        'content' => [
                            ['name' => 'Listening Comprehension', 'description' => 'Latihan pemahaman audio dari berbagai sumber.'],
                            ['name' => 'Note-taking Skills', 'description' => 'Strategi efektif untuk mencatat informasi penting.'],
                            ['name' => 'Understanding Accents', 'description' => 'Pelajari cara memahami berbagai aksen dalam bahasa Inggris.'],
                            ['name' => 'Descriptive Vocabulary', 'description' => 'Kembangkan kosakata untuk mendeskripsikan audio.'],
                            ['name' => 'Practice Tests', 'description' => 'Simulasi ujian mendengarkan lengkap.'],
                        ]
                    ],
                    [
                        'title' => 'Reading',
                        'description' => 'Asah keterampilan membaca Anda dengan berbagai teks. ',
                        'lessons' => 6,
                        'content' => [
                            ['name' => 'Skimming and Scanning', 'description' => 'Teknik membaca cepat untuk memahami inti bacaan.'],
                            ['name' => 'Detail Understanding', 'description' => 'Latihan untuk memahami informasi detail dari teks.'],
                            ['name' => 'Identifying Arguments', 'description' => 'Pelajari cara mengidentifikasi argumen dalam teks.'],
                            ['name' => 'Text Analysis', 'description' => 'Analisis dan interpretasi teks yang kompleks.'],
                            ['name' => 'Practice Tests', 'description' => 'Latihan membaca dengan format ujian.'],
                        ]
                    ],
                    [
                        'title' => 'Writing',
                        'description' => 'Tingkatkan kemampuan menulis akademik dan umum.',
                        'lessons' => 6,
                        'content' => [
                            ['name' => 'Essay Writing', 'description' => 'Teknik menulis esai yang baik dan benar.'],
                            ['name' => 'Task Response', 'description' => 'Cara menjawab pertanyaan dengan tepat.'],
                            ['name' => 'Coherence and Cohesion', 'description' => 'Membangun paragraf yang logis dan terstruktur.'],
                            ['name' => 'Grammar and Spelling', 'description' => 'Pentingnya tata bahasa dan ejaan yang benar.'],
                            ['name' => 'Practice Tasks', 'description' => 'Latihan tugas menulis dengan umpan balik.'],
                        ]
                    ],
                    [
                        'title' => 'Speaking',
                        'description' => 'Latihan berbicara bahasa Inggris dengan lancar.',
                        'lessons' => 6,
                        'content' => [
                            ['name' => 'Pronunciation', 'description' => 'Tingkatkan pelafalan dan intonasi.'],
                            ['name' => 'Fluency Exercises', 'description' => 'Kegiatan untuk meningkatkan kelancaran berbicara.'],
                            ['name' => 'Role play', 'description' => 'Simulasi percakapan untuk situasi nyata.'],
                            ['name' => 'Descriptive Speaking', 'description' => 'Berlatih mendeskripsikan gambar dan situasi.'],
                            ['name' => 'Practice Interviews', 'description' => 'Simulasi wawancara berbicara IELTS.'],
                        ]
                    ],
                ],
                'features' => [
                    'Materi terbaru yang sesuai dengan format IELTS.',
                    'Pembahasan lengkap untuk setiap soal.',
                    'Latihan soal dari berbagai jenis (Listening, Reading, Writing, Speaking).',
                    'Analisis performa dan saran perbaikan.',
                    'Akses penuh selama 6 bulan dengan pembaruan materi.'
                ],
            ],
        ];

        $examData = $examCategories[$category] ?? null;

        if (!$examData) {
            abort(404, 'Kategori ujian tidak ditemukan');
        }

        return Inertia::render('Exam/ExamDetailPage', [
            'examData' => $examData,
        ]);
    }
}
