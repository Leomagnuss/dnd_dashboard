import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    
    <div className='min-h-screen flex items-center justify-center p-4'>
      <Card className='w-full max-w-lg shadow-xl'>
        <CardHeader className='text-center pb-2'>
          <CardTitle className="text-3xl md:text-2xl font-Unbounded font-bold">
            Здравствуй, путник!
          </CardTitle>
          <CardDescription className='text-base mt-0'>
            Проводник в мире настольных приключений - NPC Dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='text-center'>
            <p className='text-muted-foreground'>
              То, что ждёт тебя далее, может помочь тебе в ходе игры... 
              <span className="text-foreground font-medium"> а может сломать всю её атмосферу. Используй с умом</span>.
            </p>
          </div>
        </CardContent>
          <div className='flex items-center gap-3'>
            <Separator className='flex-1 h-px'/>
            <Sparkles className='h-4 w-4'/>
            <Separator className='flex-1 h-px'/>
          </div>
          <div className='grid justify-center'>
            <Link href='/npc'>
              <Button className='hover:scale-110 delay-100'>
                Войти в базу данных
              </Button>
            </Link>
          </div>
          <CardFooter className='justify-center'>
            <p className='text-center text-xs text-muted-foreground font-mono'>
              by Leomagnuss - NPC Dashboard v1.0
            </p>
          </CardFooter>
        </Card>
    </div>
      
  );
}
