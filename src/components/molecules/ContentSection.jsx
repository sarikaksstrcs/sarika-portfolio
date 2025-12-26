import React from 'react';
import { BookOpen, Check, ExternalLink, Youtube, Zap } from "lucide-react";

export const ContentSection = ({ handleContentClick, completedActions }) => {
  const handleClick = (platform, url, xp, achievement) => {
    handleContentClick(xp, `content-${platform}`, achievement);
    window.open(url, '_blank');
  };

  const mediumUrl = 'https://medium.com/@sarika.ks.official'
  const youtubeUrl = 'https://www.youtube.com/@pickupwhereyouleft7647'

  return (
    <section className="py-20 px-6 border-t-2 border-white/20">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-mono">
        // CONTENT_HUB
      </h2>
      <p className="text-center text-gray-400 mb-16 font-mono">Articles & Videos • Knowledge Sharing</p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Medium Blog */}
        <div
          onClick={() => handleClick('medium', mediumUrl, 40, 'Visited Medium Blog')}
          className={`group border-2 border-white/40 p-8 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 cursor-pointer relative ${completedActions.has('content-medium') ? 'border-white' : ''}`}>
          {completedActions.has('content-medium') && (
            <Check className="absolute top-4 right-4 w-6 h-6" />
          )}
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-6 border-2 border-white group-hover:bg-black group-hover:text-white transition-all">
              <BookOpen className="w-16 h-16" />
            </div>
            
            <h3 className="text-3xl font-bold font-mono mb-3">Medium Blog</h3>
            <p className="text-sm font-mono mb-6 text-gray-400 group-hover:text-gray-600">
              Technical articles on React Native, AI, and software development
            </p>
            
            <div className="flex items-center gap-2 text-sm font-mono underline">
              Visit Medium Profile
              <ExternalLink size={16} />
            </div>
            
            {!completedActions.has('content-medium') && (
              <div className="mt-4 flex items-center gap-2 text-sm font-mono">
                <Zap className="w-4 h-4" />
                <span>+40 XP</span>
              </div>
            )}
          </div>
        </div>

        {/* YouTube Channel */}
        <div
          onClick={() => handleClick('youtube', youtubeUrl, 40, 'Visited YouTube Channel')}
          className={`group border-2 border-white/40 p-8 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 cursor-pointer relative ${completedActions.has('content-youtube') ? 'border-white' : ''}`}>
          {completedActions.has('content-youtube') && (
            <Check className="absolute top-4 right-4 w-6 h-6" />
          )}
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-6 border-2 border-white group-hover:bg-black group-hover:text-white transition-all">
              <Youtube className="w-16 h-16" />
            </div>
            
            <h3 className="text-3xl font-bold font-mono mb-3">YouTube Channel</h3>
            <p className="text-sm font-mono mb-6 text-gray-400 group-hover:text-gray-600">
              Video tutorials on mobile development, AI integration, and coding
            </p>
            
            <div className="flex items-center gap-2 text-sm font-mono underline">
              Visit YouTube Channel
              <ExternalLink size={16} />
            </div>
            
            {!completedActions.has('content-youtube') && (
              <div className="mt-4 flex items-center gap-2 text-sm font-mono">
                <Zap className="w-4 h-4" />
                <span>+40 XP</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};