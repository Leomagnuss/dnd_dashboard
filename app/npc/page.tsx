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
    <div className="container mx-auto p-10 font-[]">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-Unbounded font-semibold">NPC Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className='font-mono text-[18px] font-bold'>
                <TableHead>ID</TableHead>
                <TableHead>Имя</TableHead>
                <TableHead>Раса</TableHead>
                <TableHead>Класс</TableHead>
                <TableHead>Возраст</TableHead>
                <TableHead>Пол</TableHead>
                <TableHead>Город</TableHead>
                <TableHead>Занятие</TableHead>
                <TableHead>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='font-Jost'>
              {npcs.map((npc: any) => (
                <TableRow key={npc.npc_id}>
                  <TableCell className="font-medium">{npc.npc_id}</TableCell>
                  <TableCell>{npc.name || 'Не известен'}</TableCell>

                  <TableCell>
                    <span className='text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>
                      {npc.racetab?.race_name || 'Не известен'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs bg-green-100 px-2 py-1 rounded">
                      {npc.classtab?.class_name || 'Не известен'}
                    </span>
                  </TableCell>
                  <TableCell>{npc.age_count || 'Не известен'}</TableCell>
                  <TableCell>{npc.gender || 'Не известен'}</TableCell>
                  <TableCell>{npc.towns || 'Не известен'}</TableCell>
                  <TableCell>{npc.occupation || 'Не известен'}</TableCell>
                  <TableCell>
                    {npc.isalive ? (
                      <span className="text-green-600 font-semibold">Жив</span>
                    ) : (
                      <span className="text-red-600 font-semibold">Мёртв</span>
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
