import React, { useState } from 'react';
import { Plus, Users, Award } from 'lucide-react';
import { AssignKIUModal } from '../AssignKIUModal';

export function QuickActionCard() {
  const [showAssignModal, setShowAssignModal] = useState(false);

  return (
    <>
      <div className="glass-effect rounded-xl p-6 hover:bg-zinc-800/50 transition-colors group relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700"></div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Award className="w-6 h-6 text-blue-500" />
          </div>
          <button
            onClick={() => setShowAssignModal(true)}
            className="btn-primary flex items-center gap-2 px-4"
          >
            <Plus className="w-4 h-4" />
            Assign KIU
          </button>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2">Quick Assign KIU</h3>
        <p className="text-sm text-gray-400 mb-3">
          Instantly assign learning materials and KIU points to your team
        </p>

        <div className="flex items-center gap-2 text-sm">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <Users className="w-4 h-4 text-blue-500" />
          </div>
          <span className="text-gray-400">12 Team Members</span>
        </div>
      </div>

      <AssignKIUModal
        isOpen={showAssignModal}
        onClose={() => setShowAssignModal(false)}
        team={[]}
        departments={[]}
      />
    </>
  );
}