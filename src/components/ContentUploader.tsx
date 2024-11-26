import React, { useState } from 'react';
import { Youtube, FileText, File, Award, Link as LinkIcon } from 'lucide-react';

interface ContentUploaderProps {
  onUpload?: (isLong: boolean) => void;
}

export function ContentUploader({ onUpload }: ContentUploaderProps) {
  const [link, setLink] = useState('');

  const handleSubmit = () => {
    if (link.trim()) {
      onUpload?.(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="w-full">
      <div className="glass-effect rounded-2xl p-6">
        {/* Main Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Paste a link to any educational content..."
            className="w-full pl-14 pr-36 py-4 bg-zinc-800 border border-zinc-700 rounded-2xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-lg"
          />
          <LinkIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <button
            onClick={handleSubmit}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 btn-primary px-6 py-2"
          >
            Try Demo
          </button>
        </div>

        {/* File Type Icons */}
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-2 transition-transform hover:scale-110 cursor-pointer">
              <Youtube className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-xs text-gray-400">YouTube</span>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-2 transition-transform hover:scale-110 cursor-pointer">
              <FileText className="w-5 h-5 text-purple-500" />
            </div>
            <span className="text-xs text-gray-400">PDF</span>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-2 transition-transform hover:scale-110 cursor-pointer">
              <File className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-xs text-gray-400">Word/PPT</span>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-2 transition-transform hover:scale-110 cursor-pointer">
              <LinkIcon className="w-5 h-5 text-yellow-500" />
            </div>
            <span className="text-xs text-gray-400">Web Link</span>
          </div>
        </div>
      </div>
    </div>
  );
}