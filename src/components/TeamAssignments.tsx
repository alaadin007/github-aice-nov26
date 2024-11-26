import React, { useState } from 'react';
import { BookOpen, Users, CheckCircle, Clock, AlertCircle, Trash2, Mail, ChevronDown, Building } from 'lucide-react';

interface Assignment {
  id: number;
  title: string;
  description: string;
  assignedDate: string;
  dueDate: string;
  totalAssigned: number;
  completed: number;
  status: 'active' | 'completed';
  kiuPoints: number;
  assignedTo: string;
  assignmentType: 'team' | 'individual';
  teamProgress?: {
    name: string;
    completed: number;
    total: number;
    averageScore?: number;
  }[];
  memberProgress: {
    name: string;
    status: 'completed' | 'in_progress' | 'not_started';
    completedDate?: string;
    score?: number;
  }[];
}

const SAMPLE_ASSIGNMENTS: Assignment[] = [
  {
    id: 1,
    title: "Masseter Botox Treatment Update",
    description: "Complete the updated training module on Masseter Botox techniques and safety protocols.",
    assignedDate: "2024-02-15",
    dueDate: "2024-02-22",
    totalAssigned: 12,
    completed: 12,
    status: 'completed',
    kiuPoints: 1,
    assignedTo: "Harley Street Team",
    assignmentType: 'team',
    teamProgress: [
      {
        name: "Aesthetics Department",
        completed: 6,
        total: 6,
        averageScore: 94
      },
      {
        name: "Dermatology Department",
        completed: 4,
        total: 4,
        averageScore: 90
      }
    ],
    memberProgress: [
      {
        name: "Sarah Johnson",
        status: 'completed',
        completedDate: "2024-02-20",
        score: 95
      },
      {
        name: "Michael Chen",
        status: 'completed',
        completedDate: "2024-02-19",
        score: 92
      }
    ]
  },
  {
    id: 2,
    title: "Advanced Injection Techniques",
    description: "Individual training on advanced injection techniques and patient safety protocols.",
    assignedDate: "2024-02-18",
    dueDate: "2024-02-28",
    totalAssigned: 1,
    completed: 0,
    status: 'active',
    kiuPoints: 2,
    assignedTo: "Sarah Johnson",
    assignmentType: 'individual',
    memberProgress: [
      {
        name: "Sarah Johnson",
        status: 'in_progress'
      }
    ]
  },
  {
    id: 3,
    title: "Patient Management Workshop",
    description: "Individual workshop on patient management and consultation techniques.",
    assignedDate: "2024-02-19",
    dueDate: "2024-03-01",
    totalAssigned: 1,
    completed: 1,
    status: 'completed',
    kiuPoints: 1,
    assignedTo: "Michael Chen",
    assignmentType: 'individual',
    memberProgress: [
      {
        name: "Michael Chen",
        status: 'completed',
        completedDate: "2024-02-22",
        score: 96
      }
    ]
  }
];

interface AssignmentCardProps {
  assignment: Assignment;
}

function AssignmentCard({ assignment }: AssignmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const completionPercentage = (assignment.completed / assignment.totalAssigned) * 100;

  return (
    <div className="glass-effect rounded-xl p-4 hover:bg-zinc-800/50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
          <BookOpen className="w-6 h-6 text-blue-500" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-medium text-white mb-1">{assignment.title}</h3>
              <p className="text-sm text-gray-400">{assignment.description}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-zinc-700 rounded-lg transition-colors">
                <Mail className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-zinc-700 rounded-lg transition-colors">
                <Trash2 className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1 text-gray-400">
              <Users className="w-4 h-4" />
              {assignment.assignmentType === 'team' ? `${assignment.totalAssigned} assigned` : `Assigned to ${assignment.assignedTo}`}
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <Clock className="w-4 h-4" />
              Due {assignment.dueDate}
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <BookOpen className="w-4 h-4" />
              {assignment.kiuPoints} KIU
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                {assignment.status === 'completed' ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                )}
                <span className="text-gray-400">
                  {assignment.completed} of {assignment.totalAssigned} completed
                </span>
              </div>
              <span className="font-medium text-white">
                {completionPercentage.toFixed(0)}%
              </span>
            </div>

            <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  assignment.status === 'completed'
                    ? 'bg-gradient-to-r from-green-500 to-green-400'
                    : 'bg-gradient-to-r from-yellow-500 to-yellow-400'
                }`}
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full mt-4 pt-4 border-t border-zinc-700 flex items-center justify-center gap-2 text-gray-400 hover:text-white"
      >
        {isExpanded ? 'Hide Details' : 'Show Details'}
        <ChevronDown className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-zinc-700">
          <h4 className="text-sm font-medium text-gray-400 mb-4">Progress Details</h4>
          <div className="space-y-4">
            {assignment.memberProgress.map((member, index) => (
              <div key={index} className="bg-zinc-800/50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">{member.name}</span>
                  <span className={`text-sm ${
                    member.status === 'completed' ? 'text-green-400' : 
                    member.status === 'in_progress' ? 'text-yellow-400' : 'text-gray-400'
                  }`}>
                    {member.status === 'completed' ? `Completed - ${member.score}%` :
                     member.status === 'in_progress' ? 'In Progress' : 'Not Started'}
                  </span>
                </div>
                {member.completedDate && (
                  <div className="text-xs text-gray-400">
                    Completed on {member.completedDate}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function TeamAssignments() {
  const [assignments, setAssignments] = useState(SAMPLE_ASSIGNMENTS);

  const teamAssignments = assignments.filter(a => a.assignmentType === 'team');
  const memberAssignments = assignments.filter(a => a.assignmentType === 'individual');

  return (
    <div className="space-y-8">
      {/* Team Assignments Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Team Assignments</h2>
          <div className="text-sm text-gray-400">
            {teamAssignments.length} active assignments
          </div>
        </div>

        <div className="space-y-4">
          {teamAssignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </div>
      </div>

      {/* Member Assignments Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Member Assignments</h2>
          <div className="text-sm text-gray-400">
            {memberAssignments.length} individual assignments
          </div>
        </div>

        <div className="space-y-4">
          {memberAssignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </div>
      </div>
    </div>
  );
}