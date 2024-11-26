import React from 'react';
import { Plus } from 'lucide-react';

interface AddTeamCardProps {
  onClick: () => void;
}

export function AddTeamCard({ onClick }: AddTeamCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full h-full glass-effect rounded-xl p-6 hover:bg-zinc-800/50 transition-colors group"
    >
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Plus className="w-6 h-6 text-blue-500" />
        </div>
        <div className="text-center">
          <h3 className="font-medium text-white mb-1">Create New Team</h3>
          <p className="text-sm text-gray-400">Add and manage team members</p>
        </div>
      </div>
    </button>
  );
}