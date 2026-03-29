// app/npcs/page.tsx
import { prisma } from '@/lib/prisma'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function NpcsPage() {
  const npcs = await prisma.npc.findMany({
    orderBy: {
      npc_id: 'asc'
    },
    include: {
      racetab: true,
      classtab: true,
    }
  })

  return (
    <div className="items-center p-2 md:p-8 justify-start">
      <div className="container pt-2 pb-2 md:pb-4">
          <div className='text-center md:text-left'>
            <CardTitle className='text-2xl md:text-4xl font-Unbounded font-bold'>
              <p className=''>NPC Dashboard</p>
              <p className='font-mono text-xs md:text-sm text-muted-foreground mt-1'>by Leomagnuss</p>
            </CardTitle>
            <p className="text-left text-xs text-muted-foreground font-mono mt-2 md:mt-4">
              Записей: {npcs.length}
            </p>
          </div>
        </div>
      <Card className='shadow-xl'>
        <CardContent className='p-0'>
          <div className='max-h-[calc(100vh-250px)] overflow-y-auto'><Table>
            <TableHeader>
              <TableRow className='text-xs md:text-[16px] font-Unbounded font-bold'>
                <TableHead className='font-Jost font-semibold text-sm md:text-base px-3 py-3 whitespace-nowrap'>ID</TableHead>
                <TableHead className='font-Jost font-semibold text-sm md:text-base px-3 py-3 whitespace-nowrap'>Имя</TableHead>
                <TableHead className='font-Jost font-semibold text-sm md:text-base px-3 py-3 whitespace-nowrap'>Раса</TableHead>
                <TableHead className='font-Jost font-semibold text-sm md:text-base px-3 py-3 whitespace-nowrap'>Класс</TableHead>
                <TableHead className='font-Jost font-semibold text-sm md:text-base px-3 py-3 whitespace-nowrap'>Возраст</TableHead>
                <TableHead className='font-Jost font-semibold text-sm md:text-base px-3 py-3 whitespace-nowrap'>Пол</TableHead>
                <TableHead className='font-Jost font-semibold text-sm md:text-base px-3 py-3 whitespace-nowrap hidden md:table-cell'>Город</TableHead>
                <TableHead className='font-Jost font-semibold text-sm md:text-base px-3 py-3 whitespace-nowrap hidden md:table-cell'>Занятие</TableHead>
                <TableHead className='font-Jost font-semibold text-sm md:text-base px-3 py-3 whitespace-nowrap hidden md:table-cell text-center'>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='font-Unbounded'>
              {npcs.map((npc: any) => (
                <TableRow className='hover:bg-muted/20 transition-colors' key={npc.npc_id}>
                  <TableCell className='text-xs md:text-sm px-3 py-2 font-mono text-muted-foreground whitespace-nowrap'>{npc.npc_id}</TableCell>
                  <TableCell className='text-xs md:text-sm px-3 py-2 font-semibold whitespace-nowrap max-w-25 md:max-w-none truncate'>{npc.name || 'Не известен'}</TableCell>

                  <TableCell>
                    <span className='inline-block px-2 py-1 rounded-full text-[10px] md:text-xs bg-blue-100 text-blue-800 font-medium'>
                      {npc.racetab?.race_name || 'Не известен'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className='inline-block px-2 py-1 rounded-full text-[10px] md:text-xs bg-green-100 text-green-800 font-medium'>
                      {npc.classtab?.class_name || 'Не известен'}
                    </span>
                  </TableCell>
                  <TableCell className='text-xs md:text-sm px-3 py-3 text-muted-foreground whitespace-nowrap'>{npc.age_count ?? 'Не известен'}</TableCell>
                  <TableCell className='text-xs md:text-sm px-3 py-3 text-muted-foreground whitespace-nowrap'>{npc.gender || 'Не известен'}</TableCell>
                  <TableCell className='text-xs md:text-sm px-3 py-3 text-muted-foreground whitespace-nowrap hidden md:table-cell'>{npc.towns || 'Не известен'}</TableCell>
                  <TableCell className='text-xs md:text-sm px-3 py-3 text-muted-foreground whitespace-nowrap hidden md:table-cell'>{npc.occupation || 'Не известен'}</TableCell>
                  <TableCell className='px-3 py-3 rounded-full text-[10px] md:text-xs font-semibold hidden md:table-cell'>
                    {npc.isalive ? (
                      <span className='text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full'>Жив</span>
                    ) : (
                      <span className='text-red-600 font-semibold bg-red-100 px-2 py-1 rounded-full'>Мёртв</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table></div>
        </CardContent>
      </Card>
    </div>
  )
}
