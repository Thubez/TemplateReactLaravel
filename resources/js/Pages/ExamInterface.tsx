import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Clock, AlertCircle, CheckCircle, Flag, X, List } from 'lucide-react'
import { Button } from "@/Components/ui/button"
import { Card, CardContent } from "@/Components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip"
import { ScrollArea } from "@/Components/ui/scroll-area"

// Mock data for the exam (replace with your own data)
const mockExam = {
  name: "Simulasi Tes CPNS 2024",
  totalQuestions: 100,
  timeLimit: 120 * 60, // 120 minutes in second
  questions: Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    text: `Ini adalah contoh soal nomor ${i + 1}. Pilih jawaban yang benar.`,
    options: ['A', 'B', 'C', 'D', 'E'].map(letter => `Opsi ${letter}`),
    correctAnswer: Math.floor(Math.random() * 5),
    explanation: `Penjelasan untuk soal nomor ${i + 1}: Jawaban yang benar adalah opsi ${['A', 'B', 'C', 'D', 'E'][Math.floor(Math.random() * 5)]} karena alasan XYZ.`,
  })),
}

export default function ExamInterface() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(mockExam.totalQuestions).fill(null))
  const [flaggedQuestions, setFlaggedQuestions] = useState<boolean[]>(new Array(mockExam.totalQuestions).fill(false))
  const [timeRemaining, setTimeRemaining] = useState(mockExam.timeLimit)
  const [isExitDialogOpen, setIsExitDialogOpen] = useState(false)
  const [isReviewMode, setIsReviewMode] = useState(false)
  const [isExamCompleted, setIsExamCompleted] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer)
          setIsExamCompleted(true)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
  }

  const handleFlagQuestion = () => {
    const newFlaggedQuestions = [...flaggedQuestions]
    newFlaggedQuestions[currentQuestion] = !newFlaggedQuestions[currentQuestion]
    setFlaggedQuestions(newFlaggedQuestions)
  }

  const navigateToQuestion = (index: number) => {
    setCurrentQuestion(index)
    if (isMobileSidebarOpen) {
      setIsMobileSidebarOpen(false)
    }
  }

  const handleFinishExam = () => {
    setIsReviewMode(true)
  }

  const handleSubmitExam = () => {
    setIsExamCompleted(true)
    setIsReviewMode(false)
  }

  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen)

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  if (isExamCompleted) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">{mockExam.name} - Hasil dan Pembahasan</h1>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-4">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Hasil Ujian Anda</h2>
              <p className="mb-4">
                Anda telah menjawab {answers.filter(a => a !== null).length} dari {mockExam.totalQuestions} soal.
              </p>
              <ScrollArea className="h-[60vh]">
                {mockExam.questions.map((question, index) => (
                  <div key={index} className="mb-6 pb-4 border-b">
                    <h3 className="text-lg font-medium mb-2">Soal {index + 1}</h3>
                    <p className="mb-2">{question.text}</p>
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={`p-2 rounded ${
                            optionIndex === question.correctAnswer
                              ? 'bg-green-100 border-green-500'
                              : optionIndex === answers[index]
                              ? 'bg-red-100 border-red-500'
                              : 'bg-gray-100'
                          } border`}
                        >
                          {option}
                          {optionIndex === question.correctAnswer && (
                            <CheckCircle className="inline-block ml-2 text-green-500" size={16} />
                          )}
                          {optionIndex === answers[index] && optionIndex !== question.correctAnswer && (
                            <X className="inline-block ml-2 text-red-500" size={16} />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-medium mb-2">Penjelasan:</h4>
                      <p>{question.explanation}</p>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{mockExam.name}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{currentQuestion + 1}/{mockExam.totalQuestions}</span>
            <div className={`flex items-center ${timeRemaining < 300 ? 'text-red-500' : ''}`}>
              <Clock className="mr-2" size={20} />
              <span className="font-bold">{formatTime(timeRemaining)}</span>
            </div>
            <Dialog open={isExitDialogOpen} onOpenChange={setIsExitDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline"><X size={20} /></Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Keluar dari Ujian?</DialogTitle>
                  <DialogDescription>
                    Anda yakin ingin keluar dari ujian? Semua progres akan hilang.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsExitDialogOpen(false)}>Batal</Button>
                  <Button variant="destructive">Keluar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto p-4 flex relative">
        {/* Question and answers */}
        <div className="flex-grow mr-0 md:mr-4">
          <Card className="mb-4">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Soal {currentQuestion + 1}</h2>
              <p className="mb-4">{mockExam.questions[currentQuestion].text}</p>
              {mockExam.questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={answers[currentQuestion] === index ? "default" : "outline"}
                  className="w-full mb-2 justify-start"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </Button>
              ))}
            </CardContent>
          </Card>
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => navigateToQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="mr-2" size={20} /> Sebelumnya
            </Button>
            <Button
              variant="outline"
              onClick={handleFlagQuestion}
            >
              <Flag className={`mr-2 ${flaggedQuestions[currentQuestion] ? 'text-yellow-500' : ''}`} size={20} />
              {flaggedQuestions[currentQuestion] ? 'Hapus Tanda' : 'Tandai Soal'}
            </Button>
            {currentQuestion === mockExam.totalQuestions - 1 ? (
              <Button onClick={handleFinishExam}>Selesai</Button>
            ) : (
              <Button
                onClick={() => navigateToQuestion(Math.min(mockExam.totalQuestions - 1, currentQuestion + 1))}
              >
                Selanjutnya <ChevronRight className="ml-2" size={20} />
              </Button>
            )}
          </div>
        </div>

        {/* Sidebar with scrollable question numbers */}
        <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileSidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:translate-x-0 md:shadow-none z-20`}>
          <Button variant="ghost" className="absolute top-2 right-2 md:hidden" onClick={toggleMobileSidebar}>
            <X size={20} />
          </Button>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Daftar Soal</h3>
            <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
              <div className="grid grid-cols-5 gap-2">
                {mockExam.questions.map((_, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={currentQuestion === index ? "default" : "outline"}
                          className={`w-10 h-10 p-0 ${
                            answers[index] !== null
                              ? 'bg-gray-200'
                              : flaggedQuestions[index]
                              ? 'bg-yellow-100'
                              : ''
                          }`}
                          onClick={() => navigateToQuestion(index)}
                        >
                          {index + 1}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        {answers[index] !== null ? (
                          <CheckCircle className="text-green-500" size={16} />
                        ) : flaggedQuestions[index] ? (
                          <Flag className="text-yellow-500" size={16} />
                        ) : (
                          <AlertCircle className="text-red-500" size={16} />
                        )}
                        {' '}
                        {answers[index] !== null ? 'Terjawab' : flaggedQuestions[index] ? 'Ditandai' : 'Belum dijawab'}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>

      {/* Floating button to open question list on mobile */}
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-4 right-4 rounded-full shadow-lg md:hidden z-10"
        onClick={toggleMobileSidebar}
      >
        <List size={24} />
      </Button>

      {/* Review mode dialog */}
      <Dialog open={isReviewMode} onOpenChange={setIsReviewMode}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Review Jawaban</DialogTitle>
            <DialogDescription>
              Periksa kembali jawaban Anda sebelum mengirimkan.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh]">
            <div className="grid grid-cols-5 gap-2 p-4">
              {mockExam.questions.map((_, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full ${
                    answers[index] !== null
                      ? 'bg-green-100'
                      : flaggedQuestions[index]
                      ? 'bg-yellow-100'
                      : 'bg-red-100'
                  }`}
                  onClick={() => {
                    setIsReviewMode(false)
                    navigateToQuestion(index)
                  }}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsReviewMode(false)}>Kembali ke Ujian</Button>
            <Button onClick={handleSubmitExam}>Kirim Jawaban</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}