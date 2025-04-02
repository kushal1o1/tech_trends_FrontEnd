import React, { act } from 'react'

const HeroSectionContent = (props) => {
    const { activeTab } = props;
  return (
    <>
    { activeTab === "gmail" ? (
          <div className="space-y-3 p-4 rounded-lg shadow-lg  border-blue-500/30">
            <div className="flex items-center">
              <i className="fas fa-envelope-open-text text-blue-400 mr-2"></i>
              <h3 className="font-medium text-white">Latest Newsletter</h3>
            </div>
            <div className="flex items-center">
              <i className="fas fa-clock text-gray-400 mr-2"></i>
              <p className="text-sm text-gray-300">Updated 2 hours ago</p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-tag text-green-400 mr-2"></i>
              <p className="text-sm text-gray-300">Priority Inbox</p>
            </div>
            <div className="h-5 bg-white/20 rounded w-5/6 animate-pulse"></div>
            <div className="h-5 bg-white/20 rounded w-4/6 animate-pulse"></div>
            <div className="h-5 bg-white/20 rounded w-full animate-pulse"></div>
            <p className="text-xs text-white-300 mt-3 flex items-center border-t border-white/10 pt-2">
              <i className="fas fa-inbox text-blue-400 mr-2"></i> Delivered straight to your Gmail inbox with smart filtering.
            </p>
          </div>
        ) : activeTab === "telegrambot" ? (
          <div className="space-y-3 p-4 rounded-lg shadow-lg  border-indigo-500/30">
            <div className="flex items-center">
              <i className="fas fa-robot text-indigo-400 mr-2"></i>
              <h3 className="font-medium text-white">Telegram Updates</h3>
            </div>
            <div className="flex items-center">
              <i className="fas fa-bolt text-yellow-400 mr-2"></i>
              <p className="text-sm text-gray-300">Instant notifications</p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-bell text-red-400 mr-2"></i>
              <p className="text-sm text-gray-300">Custom alert settings</p>
            </div>
            <div className="h-5 bg-white/20 rounded w-5/6 animate-pulse"></div>
            <div className="h-5 bg-white/20 rounded w-4/6 animate-pulse"></div>
            <div className="h-5 bg-white/20 rounded w-full animate-pulse"></div>
            <p className="text-xs text-white-300 mt-3 flex items-center border-t border-white/10 pt-2">
              <i className="fas fa-paper-plane text-indigo-400 mr-2"></i> Get real-time updates via Telegram with interactive commands.
            </p>
          </div>
        ) : (
          <div className="space-y-3 p-4 rounded-lg shadow-lg  border-purple-500/30">
            <div className="flex items-center">
              <i className="fas fa-globe text-purple-400 mr-2"></i>
              <h3 className="font-medium text-white">Web Experience</h3>
            </div>
            <div className="flex items-center">
              <i className="fas fa-newspaper text-orange-400 mr-2"></i>
              <p className="text-sm text-gray-300">Full news access</p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-user text-teal-400 mr-2"></i>
              <p className="text-sm text-gray-300">No need login and subscription</p>
            </div>
            <div className="h-5 bg-white/20 rounded w-5/6 animate-pulse"></div>
            <div className="h-5 bg-white/20 rounded w-4/6 animate-pulse"></div>
            <div className="h-5 bg-white/20 rounded w-full animate-pulse"></div>
            <p className="text-xs text-white-300 mt-3 flex items-center border-t border-white/10 pt-2">
              <i className="fas fa-laptop text-purple-400 mr-2"></i> Read complete news and archives directly on our responsive website.
            </p>
          </div>
        )
      }
      </>
  )
}

export default HeroSectionContent
