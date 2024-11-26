import React from 'react';
import { Users, TrendingUp, Plus } from 'lucide-react';

interface TeamCardProps {
  name: string;
  memberCount: number;
  averageKIU: number;
  monthlyGrowth: number;
  onUpskill?: () => void;
}

export function TeamCard({ name, memberCount, averageKIU, monthlyGrowth, onUpskill }: TeamCardProps) {
  return (
    <div className="glass-effect rounded-xl p-6 hover:bg-zinc-800/50 transition-colors relative group">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-medium text-white text-lg mb-1">{name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Users className="w-4 h-4" />
            {memberCount} members
          </div>
        </div>
        <button
          onClick={onUpskill}
          className="btn-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4"
        >
          <Plus className="w-4 h-4" />
          Upskill Team
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-800/50 rounded-lg p-3">
          <div className="text-2xl font-bold text-white mb-1">{averageKIU}</div>
          <div className="text-sm text-gray-400">Average KIU</div>
        </div>
        <div className="bg-zinc-800/50 rounded-lg p-3">
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-2xl font-bold text-white">+{monthlyGrowth}%</span>
          </div>
          <div className="text-sm text-gray-400">Monthly Growth</div>
        </div>
      </div>
    </div>
  );
}