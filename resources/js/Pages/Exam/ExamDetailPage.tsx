import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { BookOpen, Brain, ChevronRight, Clock, FileText, GraduationCap, Share2, Users } from "lucide-react";
import { Separator } from "@/Components/ui/separator";
import { Head, Link } from "@inertiajs/react";
import { Header } from "@/Components/Header";
import { ExamCategory } from "@/types/types";
import AccordionSilabus from "@/Components/AccordionCustomers";

export default function ExamDetailPage({ examData }: { examData: ExamCategory }) {
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
              <h2 className="text-xl font-semibold">Materi Tes</h2>
             <AccordionSilabus data={examData.sections} />
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
  );
}
