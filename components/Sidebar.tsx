"use client"

import { Calendar, BarChart, Users, MessageSquare, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Sidebar() {
  return (
    <aside className="bg-background border-r w-64 h-screen">
      <nav className="p-6 space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Calendar className="mr-2 h-4 w-4" />
          Calendar
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <BarChart className="mr-2 h-4 w-4" />
          Analytics
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-2 h-4 w-4" />
          Team
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <MessageSquare className="mr-2 h-4 w-4" />
          Messages
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </nav>
    </aside>
  )
}