import React, { useState } from 'react';
import { Users, BookOpen, Share2, Plus, Search, TrendingUp, Award, Building } from 'lucide-react';
import { TeamMemberCard } from './TeamMemberCard';
import { AssignKIUModal } from './AssignKIUModal';
import { TeamAnalytics } from './TeamAnalytics';
import { TeamAssignments } from './TeamAssignments';
import { RequestAccessModal } from './RequestAccessModal';
import { TeamSection } from './teams/TeamSection';

interface TeamDashboardProps {
  organization: {
    name: string;
    totalEmployees: number;
    averageKIU: number;
    monthlyGrowth: number;
  };
  onSwitchToPersonal?: () => void;
}

const SAMPLE_TEAM = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Aesthetic Practitioner",
    department: "Aesthetics",
    photoUrl: null,
    totalKIU: 45,
    recentActivity: "Completed Masseter Botox Treatment Update",
    lastActive: "2 hours ago",
    progress: {
      monthly: 8,
      total: 45,
      trend: 12
    },
    topSkills: [
      { name: "Facial Anatomy", level: "Expert" },
      { name: "Injection Techniques", level: "Advanced" }
    ]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Practitioner",
    department: "Dermatology",
    photoUrl: null,
    totalKIU: 62,
    recentActivity: "Started Advanced Dermal Fillers",
    lastActive: "1 hour ago",
    progress: {
      monthly: 6,
      total: 62,
      trend: 8
    },
    topSkills: [
      { name: "Patient Management", level: "Expert" },
      { name: "Dermal Fillers", level: "Expert" }
    ]
  }
];

const SAMPLE_DEPARTMENTS = [
  {
    name: "Aesthetics",
    members: SAMPLE_TEAM.filter(member => member.department === "Aesthetics")
  },
  {
    name: "Dermatology",
    members: SAMPLE_TEAM.filter(member => member.department === "Dermatology")
  }
];

export function TeamDashboard({ organization, onSwitchToPersonal }: TeamDashboardProps) {
  const [showAssignKIU, setShowAssignKIU] = useState(false);
  const [showRequestAccess, setShowRequestAccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const handleMemberUpskill = (member: any) => {
    setSelectedMember(member);
    setShowAssignKIU(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                AiCE
              </h1>
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 animate-pulse"></div>
            </div>

            <div className="text-right">
              <div className="text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                {organization.name}
              </div>
              <div className="text-gray-400 text-sm">
                Team Dashboard
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container px-6 pt-32 pb-20">
        {/* Organization Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="glass-effect rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {organization.totalEmployees}
            </div>
            <div className="text-sm text-gray-400">Team Members</div>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {organization.averageKIU}
            </div>
            <div className="text-sm text-gray-400">Average KIU</div>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              +{organization.monthlyGrowth}%
            </div>
            <div className="text-sm text-gray-400">Monthly Growth</div>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
              <Building className="w-6 h-6 text-orange-500" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              15
            </div>
            <div className="text-sm text-gray-400">Active Courses</div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Team Members</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search members..."
                  className="w-64 pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_TEAM.map((member) => (
              <TeamMemberCard 
                key={member.id} 
                member={member}
                onUpskill={() => handleMemberUpskill(member)}
              />
            ))}
          </div>
        </div>

        {/* Team Management Section */}
        <div className="mb-8">
          <TeamSection />
        </div>

        {/* Team Assignments */}
        <div className="mb-8">
          <TeamAssignments />
        </div>
      </main>

      {/* Modals */}
      <AssignKIUModal
        isOpen={showAssignKIU}
        onClose={() => {
          setShowAssignKIU(false);
          setSelectedMember(null);
        }}
        team={selectedMember ? [selectedMember] : SAMPLE_TEAM}
        departments={SAMPLE_DEPARTMENTS}
      />
      
      <RequestAccessModal
        isOpen={showRequestAccess}
        onClose={() => setShowRequestAccess(false)}
      />
    </div>
  );
}