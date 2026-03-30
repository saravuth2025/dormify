'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function RecentActivityTable() {
  const data = [
    { id: 'INV-001', user: 'Alice Smith', action: 'Rent Payment', amount: '$1,200.00', status: 'Completed', date: 'Today, 10:23 AM' },
    { id: 'REQ-042', user: 'Bob Jones', action: 'Maintenance Request', amount: '-', status: 'Pending', date: 'Yesterday, 4:00 PM' },
    { id: 'INV-002', user: 'Charlie Brown', action: 'Utility Bill', amount: '$45.00', status: 'Processing', date: 'Mar 23, 2024' },
    { id: 'SYS-101', user: 'System', action: 'Monthly Audit', amount: '-', status: 'Completed', date: 'Mar 22, 2024' },
  ]

  return (
    <div className="rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="p-6 flex items-center justify-between border-b border-border/50 bg-muted/20">
        <div>
          <h3 className="font-semibold leading-none tracking-tight">Recent Activity</h3>
          <p className="text-sm text-muted-foreground mt-1.5">Latest financial and operational events.</p>
        </div>
        <Button variant="outline" size="sm" className="h-8 text-xs font-medium">View All</Button>
      </div>
      <Table>
        <TableHeader className="bg-muted/10">
          <TableRow className="hover:bg-transparent border-border/50">
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Date</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className="hover:bg-muted/30 border-border/50 transition-colors">
              <TableCell className="font-medium text-xs text-muted-foreground">{item.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2.5">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-[10px] bg-primary/10 text-primary">{item.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-sm">{item.user}</span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">{item.action}</TableCell>
              <TableCell className="font-medium text-sm">{item.amount}</TableCell>
              <TableCell>
                <Badge variant="secondary" className="font-medium text-[10px] px-2 py-0.5 rounded-full border-transparent bg-secondary/50 text-secondary-foreground hover:bg-secondary/60">
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right text-xs text-muted-foreground">{item.date}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Download receipt</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
