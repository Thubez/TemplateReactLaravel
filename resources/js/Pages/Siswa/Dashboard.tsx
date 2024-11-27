import { useState } from 'react'
import { Head, Link } from '@inertiajs/react';
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { Progress } from "@/Components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { Brain, Menu, Facebook, Twitter, Instagram, Youtube, BarChart, BookOpen, Clock, Trophy, ArrowRight } from 'lucide-react'

// Dummy data untuk dashboard
const userStats = {
  name: "Budi Santoso",
  completedExams: 5,
  totalQuestions: 150,
  correctAnswers: 120,
  studyTime: 1800, // dalam menit
  nextExam: "UTBK Matematika"
}

const recentExams = [
  { id: 1, name: "UTBK Bahasa Inggris", score: 85, date: "2024-03-15" },
  { id: 2, name: "CPNS Tes Wawasan Kebangsaan", score: 78, date: "2024-03-10" },
  { id: 3, name: "TOEFL Reading", score: 92, date: "2024-03-05" },
]

const aiRecommendations = [
  "Fokus pada latihan soal Matematika Dasar untuk meningkatkan skor UTBK",
  "Pelajari kembali materi Sejarah Indonesia untuk persiapan CPNS",
  "Tingkatkan kecepatan membaca untuk performa lebih baik di TOEFL Reading",
]

export default function Dashboard() {
  const [progress, setProgress] = useState(66)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="font-bold text-xl">TryOutPro AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">Dashboard</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">Ujian</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">Analisis AI</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">Profil</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex">Keluar</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="#">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Ujian</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Analisis AI</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Profil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Keluar</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Selamat datang, {userStats.name}!</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ujian Selesai</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.completedExams}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Akurasi Jawaban</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round((userStats.correctAnswers / userStats.totalQuestions) * 100)}%</div>
              <Progress value={progress} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Waktu Belajar</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round(userStats.studyTime / 60)} jam</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ujian Selanjutnya</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.nextExam}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Performa Ujian Terakhir</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentExams.map((exam) => (
                  <div key={exam.id} className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{exam.name}</p>
                      <p className="text-sm text-muted-foreground">{exam.date}</p>
                    </div>
                    <div className="ml-auto font-medium">{exam.score}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Rekomendasi AI</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {aiRecommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Aksi Cepat</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button>Mulai Ujian Baru</Button>
            <Button variant="outline">Lihat Analisis Lengkap</Button>
            <Button variant="outline">Atur Jadwal Belajar</Button>
            <Button variant="outline">Eksplorasi Materi</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">TryOutPro AI</h3>
              <p className="text-sm text-gray-600">Platform persiapan ujian berbasis AI terdepan untuk meningkatkan performa Anda.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:text-primary">Dashboard</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">Ujian</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">Analisis AI</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">Profil</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kategori Ujian</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:text-primary">UTBK</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">TOEFL</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">CPNS</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">IELTS</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <Youtube className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">&copy; 2024 TryOutPro AI. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

