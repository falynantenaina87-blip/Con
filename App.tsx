import React, { useState } from 'react';
import { Auth } from './views/Auth';
import { Chat } from './views/Chat';
import { Announcements } from './views/Announcements';
import { Schedule } from './views/Schedule';
import { Quiz } from './views/Quiz';
import { User, ViewState } from './types';
import { MessageSquare, Bell, Calendar, Brain, LogOut } from 'lucide-react';
import { cn } from './lib/utils';
import { motion } from 'framer-motion';

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('chat');

  if (!user) {
    return <Auth onLogin={setUser} />;
  }

  const NavItem = ({ view, icon: Icon, label }: any) => (
    <button
      onClick={() => setCurrentView(view)}
      className={cn(
        "flex flex-col items-center gap-1 p-2 transition-colors relative",
        currentView === view ? "text-neon-red" : "text-slate-600 hover:text-slate-400"
      )}
    >
      <Icon className={cn("w-6 h-6 transition-transform", currentView === view ? "scale-110" : "")} />
      <span className="text-[10px] uppercase font-mono tracking-widest">{label}</span>
      {currentView === view && (
        <motion.div 
          layoutId="nav-glow"
          className="absolute inset-0 bg-neon-red/5 blur-lg rounded-full" 
        />
      )}
    </button>
  );

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-slate-950 border-x border-slate-900 shadow-2xl relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-neon-red to-slate-900 opacity-50" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-20 w-64 h-64 bg-neon-red/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="p-4 border-b border-white/5 flex justify-between items-center bg-slate-950/50 backdrop-blur-sm z-10">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-tl-none rounded-br-none rounded-tr-lg rounded-bl-lg bg-neon-red/20 border border-neon-red flex items-center justify-center text-neon-red font-bold font-mono">
                {user.name[0]}
            </div>
            <div>
                <h1 className="text-sm text-slate-200 tracking-widest font-bold uppercase">{user.name}</h1>
                <p className="text-[10px] text-neon-cyan font-mono uppercase">{user.role} ACCESS</p>
            </div>
        </div>
        <button onClick={() => setUser(null)} className="text-slate-600 hover:text-neon-red transition-colors">
            <LogOut className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden p-4 z-0 relative">
        <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
        >
            {currentView === 'chat' && <Chat user={user} />}
            {currentView === 'announcements' && <Announcements user={user} />}
            {currentView === 'schedule' && <Schedule />}
            {currentView === 'quiz' && <Quiz user={user} />}
        </motion.div>
      </main>

      {/* Navigation */}
      <nav className="border-t border-white/5 bg-slate-950 p-2 flex justify-around items-center z-10 pb-6">
        <NavItem view="chat" icon={MessageSquare} label="Comm" />
        <NavItem view="announcements" icon={Bell} label="Alerts" />
        <NavItem view="schedule" icon={Calendar} label="Plan" />
        <NavItem view="quiz" icon={Brain} label="Train" />
      </nav>
    </div>
  );
};

export default App;
