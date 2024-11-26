import React from 'react';
import { Star, Brain, Award, Users, TrendingUp } from 'lucide-react';
import { ContentUploader } from './ContentUploader';

export function Hero() {
  return (
    <div className="mb-20">
      {/* Main Hero */}
      <div className="text-center mb-8 pt-8">
        <h2 className="text-6xl font-bold mb-6">
          <span className="text-white">Learn</span>,{' '}
          <span className="text-white">Share</span>,{' '}
          <span className="text-gray-500">Earn Credits</span>
          <Star className="inline-block w-8 h-8 ml-2 text-blue-600" />
        </h2>
        <h3 className="text-2xl mb-4">
          Turn Your <span className="font-semibold">Content</span> into{' '}
          <span className="font-semibold">Professional Credits</span>
        </h3>
        <p className="text-gray-400 text-lg mb-12">
          Instant CPD, CME, CE & More - No Login Required
        </p>

        {/* Demo Section */}
        <div className="mb-12">
          <ContentUploader />
        </div>

        {/* Upskill Team Message */}
        <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 mb-20">
          <div className="flex items-center justify-center gap-8">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-white mb-3">
                Great for Teams & Organizations
              </h3>
              <p className="text-gray-400">
                Upskill your team with instant professional development credits. Track progress, assign content, and monitor growth - all in one place.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-gray-400">Team Learning</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-400">Track Progress</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Award className="w-4 h-4 text-purple-500" />
                  </div>
                  <span className="text-gray-400">Instant Credits</span>
                </div>
              </div>
            </div>
            <div className="w-px h-20 bg-zinc-800"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24%</div>
              <div className="text-sm text-gray-400">Average Monthly Growth</div>
              <button className="btn-primary mt-4">
                Try Team Features
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* KIU Feature */}
        <div className="glass-effect rounded-xl p-6 hover:bg-zinc-800/50 transition-duration-300">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Instant Recognition</h3>
          <p className="text-gray-400 leading-relaxed">
            Share any educational content and get instant professional development credits recognized worldwide.
          </p>
        </div>

        {/* AI Analysis */}
        <div className="glass-effect rounded-xl p-6 hover:bg-zinc-800/50 transition-duration-300">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
            <Brain className="w-6 h-6 text-purple-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI-Powered Analysis</h3>
          <p className="text-gray-400 leading-relaxed">
            Our AI analyzes your content depth and generates relevant assessments in seconds.
          </p>
        </div>

        {/* Certificates */}
        <div className="glass-effect rounded-xl p-6 hover:bg-zinc-800/50 transition-duration-300">
          <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Instant Certificates</h3>
          <p className="text-gray-400 leading-relaxed">
            Get verified certificates immediately after completing the quick assessment.
          </p>
        </div>
      </div>
    </div>
  );
}