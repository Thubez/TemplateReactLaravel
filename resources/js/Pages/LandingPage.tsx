import { Button } from '@/Components/ui/button'
import { Card, CardContent } from '@/Components/ui/card'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { Book, Brain, BarChartIcon as ChartBar, Facebook, FileCheck, GraduationCap, Instagram, LayoutDashboard, Lightbulb, Menu, PenTool, Target, Trophy, Twitter, Youtube, Zap } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu'


const LandingPage = () => {
  return (
    <>
     <Head title="Landing Page" />
     <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="font-bold text-xl">TryOutPro AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">Beranda</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">Fitur AI</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">Ujian</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">Tentang Kami</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex">Masuk</Button>
            <Button>Daftar</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="#">Beranda</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Fitur AI</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Ujian</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Tentang Kami</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section dengan Fokus AI */}
        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Revolusi Persiapan Ujian dengan Kecerdasan Buatan
              </h1>
              <p className="text-muted-foreground">
                TryOutPro AI menghadirkan pengalaman belajar personal yang dioptimalkan oleh teknologi AI canggih. Tingkatkan skor Anda dengan analisis mendalam dan rekomendasi yang disesuaikan untuk setiap jenis ujian.
              </p>
              <div className="flex gap-4">
                <Button size="lg">Mulai Belajar dengan AI</Button>
                <Button size="lg" variant="outline">Pelajari Lebih Lanjut</Button>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://plus.unsplash.com/premium_photo-1661726901465-a02a10644e93?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ilustrasi AI membantu siswa belajar"
             
                className="object-contain rounded"
              />
            </div>
          </div>
        </section>

        {/* Fitur AI Unggulan */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Keunggulan AI TryOutPro</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Analisis Kinerja Real-time</h3>
                  <p className="text-muted-foreground">AI kami menganalisis jawaban Anda secara instan, memberikan wawasan mendalam tentang kekuatan dan area yang perlu ditingkatkan.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Rekomendasi Belajar Personal</h3>
                  <p className="text-muted-foreground">Dapatkan rencana belajar yang disesuaikan berdasarkan performa Anda, memaksimalkan efisiensi waktu belajar Anda.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Lightbulb className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Prediksi Skor Akurat</h3>
                  <p className="text-muted-foreground">AI kami memprediksi skor potensial Anda dan memberikan saran spesifik untuk meningkatkannya.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Kategori Ujian */}
        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Jelajahi Kategori Ujian dengan Dukungan AI</h2>
            <p className="text-muted-foreground">
              Persiapkan diri untuk berbagai jenis ujian dengan bantuan AI yang disesuaikan untuk setiap kategori
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "UTBK", color: "bg-pink-100", icon: <PenTool className="w-8 h-8 text-pink-500" /> },
              { name: "TOEFL", color: "bg-blue-100", icon: <Book className="w-8 h-8 text-blue-500" /> },
              { name: "CPNS", color: "bg-green-100", icon: <FileCheck className="w-8 h-8 text-green-500" /> },
              { name: "IELTS", color: "bg-purple-100", icon: <GraduationCap className="w-8 h-8 text-purple-500" /> },
              { name: "Ujian Sekolah", color: "bg-indigo-100", icon: <Brain className="w-8 h-8 text-indigo-500" /> },
              { name: "Sertifikasi Profesi", color: "bg-orange-100", icon: <Trophy className="w-8 h-8 text-orange-500" /> },
            ].map((kategori) => (
              <Card key={kategori.name} className="border-none">
                <CardContent className={`p-6 ${kategori.color} rounded-lg flex flex-col items-center`}>
                  {kategori.icon}
                  <h3 className="font-medium mt-4">{kategori.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bagian Analisis Berbasis AI yang Diperluas */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Analisis AI Mendalam untuk Hasil Maksimal</h2>
                <p className="text-muted-foreground">
                  AI canggih kami tidak hanya menganalisis kinerja Anda, tetapi juga mempelajari pola belajar Anda untuk memberikan pengalaman persiapan ujian yang benar-benar personal.
                </p>
                <div className="space-y-4">
                  {[
                    { name: "Analisis Pola Kesalahan", icon: <ChartBar className="w-5 h-5 text-primary" /> },
                    { name: "Rekomendasi Materi Belajar", icon: <Book className="w-5 h-5 text-primary" /> },
                    { name: "Simulasi Ujian Adaptif", icon: <LayoutDashboard className="w-5 h-5 text-primary" /> },
                    { name: "Pelacakan Kemajuan Berbasis AI", icon: <Trophy className="w-5 h-5 text-primary" /> },
                  ].map((fitur) => (
                    <div key={fitur.name} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        {fitur.icon}
                      </div>
                      <span>{fitur.name}</span>
                    </div>
                  ))}
                </div>
                <Button>Coba Analisis AI Sekarang</Button>
              </div>
              <div className="relative h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dashboard analisis AI canggih"
               
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimoni */}
        <section className="container mx-auto px-4 py-12 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-12">Apa Kata Pengguna Tentang AI Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Andi Pratama",
                role: "Mahasiswa",
                quote: "AI TryOutPro benar-benar membantu saya memahami kelemahan saya dan fokus pada area yang tepat. Hasilnya, skor UTBK saya meningkat signifikan!"
              },
              {
                name: "Siti Rahma",
                role: "Pelamar CPNS",
                quote: "Rekomendasi belajar yang diberikan AI sangat akurat. Saya merasa lebih percaya diri menghadapi tes CPNS berkat analisis mendalam dari TryOutPro."
              },
              {
                name: "Budi Santoso",
                role: "Profesional IT",
                quote: "Fitur simulasi ujian adaptif benar-benar menantang dan membantu saya mempersiapkan diri untuk sertifikasi profesi dengan lebih efektif."
              }
            ].map((testimoni, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="italic mb-4">"{testimoni.quote}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-semibold">{testimoni.name}</p>
                      <p className="text-sm text-muted-foreground">{testimoni.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
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
                <li><Link href="#" className="text-sm hover:text-primary">Beranda</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">Fitur AI</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">Ujian</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">Tentang Kami</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kategori Ujian</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:text-primary">UTBK</Link></li>
                <li><Link
href="#" className="text-sm hover:text-primary">TOEFL</Link></li>
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
    </>
  )
}

export default LandingPage