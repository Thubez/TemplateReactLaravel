import React from 'react'
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { BookOpen, Brain, ChevronRight, Clock, FileText, GraduationCap, Menu, Share2, Users } from 'lucide-react'
import { Separator } from "@/Components/ui/separator"
// import { Header } from '@/Components/header'
import { Head, Link } from '@inertiajs/react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu'
import { Header } from '@/Components/Header'


// Konfigurasi untuk setiap kategori ujian
const examCategories = {
  utbk: {
    title: "UTBK (Ujian Tertulis Berbasis Komputer)",
    description: "Persiapkan diri Anda untuk ujian masuk perguruan tinggi negeri dengan latihan soal dan simulasi UTBK yang komprehensif.",
    duration: "195 menit",
    questions: "120 soal",
    instructor: "Tim Ahli UTBK",
    price: 199000,
    rating: 4.8,
    students: 1250,
    sections: [
      { title: "TPS (Tes Potensi Skolastik)", lessons: 5, duration: "45 menit" },
      { title: "TKA Saintek", lessons: 4, duration: "60 menit" },
      { title: "TKA Soshum", lessons: 4, duration: "60 menit" },
      { title: "Literasi Bahasa Indonesia", lessons: 3, duration: "30 menit" },
    ],
    features: [
      "Materi sesuai dengan kurikulum UTBK terkini.",
      "Simulasi ujian yang mencakup semua mata pelajaran.",
      "Analisis AI untuk meningkatkan hasil belajar.",
      "Akses selama 3 bulan."
    ]
  },
  toefl: {
    title: "TOEFL (Test of English as a Foreign Language)",
    description: "Tingkatkan kemampuan bahasa Inggris Anda dan persiapkan diri untuk TOEFL dengan materi yang terstruktur.",
    duration: "180 menit",
    questions: "140 soal",
    instructor: "Native English Experts",
    price: 249000,
    rating: 4.9,
    students: 980,
    sections: [
      { title: "Reading Comprehension", lessons: 5, duration: "60 menit" },
      { title: "Listening Comprehension", lessons: 4, duration: "60 menit" },
      { title: "Structure and Written Expression", lessons: 4, duration: "30 menit" },
      { title: "Writing", lessons: 3, duration: "30 menit" },
    ],
    features: [
      "Materi pelajaran terstruktur sesuai ujian TOEFL.",
      "20 Paket Tryout dengan simulasi ujian dan 140 soal realistis.",
      "Durasi belajar hingga 180 menit per sesi.",
      "Pembahasan soal mendalam oleh Native English Experts.",
      "Fitur analisis AI untuk evaluasi dan saran perbaikan.",
      "Akses penuh selama 3 bulan tanpa batasan."
    ]
  },
  cpns: {
    title: "CPNS (Calon Pegawai Negeri Sipil)",
    description: "Persiapkan diri Anda untuk tes CPNS dengan latihan soal yang update dan sesuai dengan standar terbaru.",
    duration: "180 menit",
    questions: "100 soal",
    instructor: "Tim Ahli ASN",
    price: 179000,
    rating: 4.7,
    students: 2100,
    sections: [
      { title: "TWK (Tes Wawasan Kebangsaan)", lessons: 5, duration: "45 menit" },
      { title: "TIU (Tes Intelegensi Umum)", lessons: 4, duration: "60 menit" },
      { title: "TKP (Tes Karakteristik Pribadi)", lessons: 4, duration: "75 menit" },
    ],
    features: [
      "Soal sesuai dengan standar terbaru CPNS.",
      "Pembahasan lengkap untuk setiap jawaban.",
      "Latihan soal beragam untuk setiap kategori tes (TWK, TIU, TKP).",
      "Analisis performa dengan rekomendasi perbaikan.",
      "Akses penuh selama 3 bulan dengan pembaruan materi."
    ]
  },

};


type ExamCategory = keyof typeof examCategories
export default function UTBKDetailPage() {
  const examData = examCategories['utbk']
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">Beranda</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/ujian" className="hover:text-primary">Kategori Ujian</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{examData.title}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{examData.title}</h1>
            <p className="text-muted-foreground mb-6">{examData.description}</p>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                <span>{examData.duration}</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-muted-foreground mr-2" />
                <span>{examData.questions}</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 text-muted-foreground mr-2" />
                <span>{examData.students} peserta</span>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Syllabus */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Materi Ujian</h2>
              {examData.sections.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{section.lessons} modul</span>
                      <span>{section.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Fitur Unggulan</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Brain className="h-5 w-5 mr-2 text-primary" />
                        Analisis AI
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Dapatkan analisis mendalam tentang performa Anda dan rekomendasi personal untuk peningkatan.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <BookOpen className="h-5 w-5 mr-2 text-primary" />
                        Materi Lengkap
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Akses ke ribuan soal latihan dan materi pembelajaran yang terstruktur.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Users className="h-5 w-5 mr-2 text-primary" />
                        Belajar Bersama
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Bergabung dengan komunitas belajar dan diskusikan soal bersama.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Mulai Belajar</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="mb-4">
                      Pilih paket belajar yang sesuai dengan kebutuhan Anda dan mulai persiapan ujian Anda sekarang.
                    </p>
                    <div className="flex gap-4">
                      <Button>Mulai Try Out</Button>
                      <Button variant="outline">Lihat Demo</Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Rp {examData.price.toLocaleString()}</span>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Mulai Belajar
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Coba Gratis
                </Button>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Rating</span>
                    <span className="font-medium">{examData.rating}/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Instruktur</span>
                    <span className="font-medium">{examData.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Terakhir diupdate</span>
                    <span className="font-medium">November 2023</span>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Paket Ini Mencakup:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    {examData.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>

      </main>

      <footer className="bg-muted py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 TryOutPro AI. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}

