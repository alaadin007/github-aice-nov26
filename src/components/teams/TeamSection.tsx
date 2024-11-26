import React, { useState } from 'react';
import { TeamCard } from './TeamCard';
import { AddTeamCard } from './AddTeamCard';
import { AssignKIUModal } from '../AssignKIUModal';

const SAMPLE_TEAMS = [
  {
    id: 1,
    name: "Harley Street Team",
    memberCount: 12,
    averageKIU: 45,
    monthlyGrowth: 24
  },
  {
    id: 2,
    name: "City Medical Center",
    memberCount: 8,
    averageKIU: 38,
    monthlyGrowth: 18
  }
];

export function TeamSection() {
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);

  const handleUpskill = (team: any) => {
    setSelectedTeam(team);
    setShowAssignModal(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Teams</h2>
        <div className="text-sm text-gray-400">
          {SAMPLE_TEAMS.length} teams
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_TEAMS.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            memberCount={team.memberCount}
            averageKIU={team.averageKIU}
            monthlyGrowth={team.monthlyGrowth}
            onUpskill={() => handleUpskill(team)}
          />
        ))}
        <AddTeamCard onClick={() => console.log('Create team')} />
      </div>

      <AssignKIUModal
        isOpen={showAssignModal}
        onClose={() => {
          setShowAssignModal(false);
          setSelectedTeam(null);
        }}
        team={selectedTeam ? [selectedTeam] : []}
        departments={[]}
      />
    </div>
  );
}