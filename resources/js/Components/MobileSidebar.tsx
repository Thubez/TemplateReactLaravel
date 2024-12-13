import { X, ChevronRight } from 'lucide-react'
import { Button } from "@/Components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet"
import { Link } from '@inertiajs/react'

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
  userName?: string
  userInitials?: string
}

export function MobileSidebar({ isOpen, onClose, userName = "Januar Samjid", userInitials = "JS" }: MobileSidebarProps) {
  const categories = [
    {
      title: "Try Out Saya",
      items: [
        { name: "Try Out Aktif", href: "/active-tryouts" },
        { name: "Riwayat Try Out", href: "/tryout-history" },
        { name: "Analisis Performa", href: "/performance-analysis" }
      ]
    },
    {
      title: "Kategori Try Out",
      items: [
        { name: "UTBK", href: "/category/utbk" },
        { name: "CPNS", href: "/category/cpns" },
        { name: "TOEFL", href: "/category/toefl" },
        { name: "IELTS", href: "/category/ielts" },
        { name: "Ujian Mandiri PTN", href: "/category/ptn" },
        { name: "Ujian Masuk Kedokteran", href: "/category/medical" },
        { name: "Ujian Profesi", href: "/category/professional" },
        { name: "SMA/SMK", href: "/category/highschool" },
        { name: "Sertifikasi IT", href: "/category/it-cert" },
      ]
    }
  ]

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 flex flex-col">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold">
                {userInitials}
              </div>
              <div>
                <SheetTitle className="text-left text-base">Hai, {userName}</SheetTitle>
                <p className="text-sm text-muted-foreground">Selamat belajar!</p>
              </div>
            </div>
            
          </div>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          {categories.map((category, index) => (
            <div key={index} className="border-b">
              <div className="p-4">
                <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                  {category.title}
                </h3>
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="flex items-center justify-between p-2 text-sm hover:bg-gray-100 rounded-md"
                      onClick={onClose}
                    >
                      {item.name}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}


