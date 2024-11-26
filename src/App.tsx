import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { UserDashboard } from './components/UserDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { TeamDashboard } from './components/TeamDashboard';
import { LoginModal } from './components/LoginModal';

const SAMPLE_USER = {
  name: "Dr. Sarah Johnson",
  email: "sarah@example.com",
  organization: "Harley Street Clinic",
  isVerified: true,
  totalPoints: 45,
  memberNumber: "AiCE-001",
  photoUrl: null,
  isTeamHead: true
};

const SAMPLE_ORG = {
  name: "Harley Street Clinic",
  totalEmployees: 12,
  averageKIU: 42,
  monthlyGrowth: 24
};

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'user' | 'admin' | 'team'>('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'user':
        return (
          <UserDashboard 
            user={SAMPLE_USER}
            onLogout={() => setCurrentView('home')}
            onSwitchToTeam={() => setCurrentView('team')}
            isTeamHead={true}
          />
        );
      case 'admin':
        return (
          <AdminDashboard 
            user={{
              name: "Admin User",
              role: "owner",
              email: "admin@example.com"
            }}
          />
        );
      case 'team':
        return (
          <TeamDashboard 
            organization={SAMPLE_ORG}
            onSwitchToPersonal={() => setCurrentView('user')}
          />
        );
      default:
        return (
          <>
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-zinc-800">
              <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                  {/* Logo */}
                  <div className="flex items-center gap-3">
                    <h1 className="text-4xl font-bold">
                      <span className="text-white">A</span>
                      <span className="text-blue-600">i</span>
                      <span className="text-white">CE</span>
                    </h1>
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                  </div>

                  {/* Center Text */}
                  <div className="hidden md:block text-center">
                    <div className="text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                      Artificial Intelligence Continuing Education Credits
                    </div>
                    <div className="text-sm text-gray-400">
                      Smarter • Unbiased • Ever-Evolving
                    </div>
                  </div>
                  
                  {/* Login Button */}
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="btn-primary flex items-center gap-2"
                  >
                    Login / Register
                  </button>
                </div>
              </div>
            </header>
            
            <main className="container px-6 pt-32 pb-20">
              <Hero />
            </main>

            <LoginModal 
              isOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
              onComplete={() => {
                setIsLoginOpen(false);
                setCurrentView('user');
              }}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {renderContent()}
      
      {/* Development Navigation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 py-4 px-6">
        <div className="container mx-auto flex justify-center gap-4">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-4 py-2 rounded-lg ${currentView === 'home' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentView('user')}
            className={`px-4 py-2 rounded-lg ${currentView === 'user' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            User Dashboard
          </button>
          <button
            onClick={() => setCurrentView('team')}
            className={`px-4 py-2 rounded-lg ${currentView === 'team' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Team Dashboard
          </button>
          <button
            onClick={() => setCurrentView('admin')}
            className={`px-4 py-2 rounded-lg ${currentView === 'admin' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Admin Dashboard
          </button>
        </div>
      </footer>
    </div>
  );
}