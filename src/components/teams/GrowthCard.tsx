import React from 'react';
import { TrendingUp } from 'lucide-react';

interface GrowthCardProps {
  monthlyGrowth: number;
}

export function GrowthCard({ monthlyGrowth }: GrowthCardProps) {
  return (
    <div className="glass-effect rounded-xl p-6 relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-green-500/5 rounded-full blur-2xl"></div>
      
      <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
        <TrendingUp className="w-6 h-6 text-green-500" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-white">Monthly Growth</h3>
        <span className="text-2xl font-bold text-white">+{monthlyGrowth}%</span>
      </div>
      <div className="h-2 bg-zinc-700 rounded-full overflow-hidden mb-3">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
          style={{ width: `${monthlyGrowth}%` }}
        />
      </div>
      <div className="text-xs text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full inline-block">
        Team is growing strong! 📈
      </div>
    </div>
  );
}