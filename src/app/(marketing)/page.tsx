/* external Lib of defendency */
import { Medal } from "lucide-react"
import Link from "next/link"
import { Fira_Mono } from "next/font/google"
const BASE_URL = process.env.BASE_URL;
console.log(BASE_URL, 'inProd');

/* in local file */ 
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const BASE_URL = process.env.BASE_URL
console.log(BASE_URL, 'inRelease');
const fira_mono = Fira_Mono({ weight:"500", subsets: ['latin'] })
const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn("flex items-center justify-center flex-col",fira_mono)}>
        <div className="mb-4 flex items-center border 
        shadow-sm p-4 bg-amber-100 text-amber-700 
        rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2"/>
          No.1 업무 매니지먼트
        </div>
        <div>
          {BASE_URL}
          test!!!!!!!!!
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800
        mb-6">
          Taskify는 팀을 이끌어갑니다.
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r
         from-blue-500
         to-pink-700 text-white px-4 p-2 
         rounded-md pb-4 w-fit">
          업무의 시작과 끝
         </div>
         <div className="text-sm md:text-xl text-neutral-400 mt-4
         max-x-xs md:max-w-2xl text-center mx-auto">
          협력, 프로젝트 관리, 그리고 새로운 생산성을 향해. <br />
          Taskify와 함께 어디서든 당신의 팀을 유니크하고, 멋진 목표로 이끌어보세요.  
         </div>
         <Button className="mt-6" size="lg" asChild>
          <Link href="/sign-up">
            무료로 시작하기
          </Link>
         </Button>
      </div>
    </div>
  )
}

export default MarketingPage