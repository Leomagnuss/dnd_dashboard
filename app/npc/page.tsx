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
    <div className="container mx-auto p-2 md:p-4 ">
      <div className="mb-2 md:mb-4 text-left">
          <CardTitle>
            <p className='text-2xl md:text-3xl font-Unbounded font-bold'>NPC Dashboard</p>
            <p className="font-mono text-xs md:text-sm text-muted-foreground">by Leomagnuss</p>
          </CardTitle>
          <p className="text-left text-xs text-muted-foreground font-mono mt-2 md:mt-4">
          Записей: {npcs.length}
        </p>
        </div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className='font-Jost font-bold'>
                <TableHead>ID</TableHead>
                <TableHead>Имя</TableHead>
                <TableHead>Раса</TableHead>
                <TableHead>Класс</TableHead>
                <TableHead>Возраст</TableHead>
                <TableHead>Пол</TableHead>
                <TableHead className='hidden md:table-cell'>Город</TableHead>
                <TableHead className='hidden md:table-cell'>Занятие</TableHead>
                <TableHead className='hidden md:table-cell text-center'>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='font-Unbounded'>
              {npcs.map((npc: any) => (
                <TableRow className='text-[9px] md:text-[16px]' key={npc.npc_id}>
                  <TableCell className="font-medium">{npc.npc_id}</TableCell>
                  <TableCell className="font-semibold">{npc.name || 'Не известен'}</TableCell>

                  <TableCell>
                    <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>
                      {npc.racetab?.race_name || 'Не известен'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="bg-green-100 px-2 py-1 rounded">
                      {npc.classtab?.class_name || 'Не известен'}
                    </span>
                  </TableCell>
                  <TableCell>{npc.age_count ?? 'Не известен'}</TableCell>
                  <TableCell>{npc.gender || 'Не известен'}</TableCell>
                  <TableCell className='hidden md:table-cell'>{npc.towns || 'Не известен'}</TableCell>
                  <TableCell className='hidden md:table-cell'>{npc.occupation || 'Не известен'}</TableCell>
                  <TableCell className='hidden md:table-cell text-center'>
                    {npc.isalive ? (
                      <span className="text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">Жив</span>
                    ) : (
                      <span className="text-red-600 font-semibold bg-red-100 px-2 py-1 rounded-full">Мёртв</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
