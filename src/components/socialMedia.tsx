import { InstagramIcon, LucideLinkedin, XIcon } from 'lucide-react'
import React from 'react'

function SocialMedia() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="group">
        <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-full hover:bg-blue-100 transition-colors duration-300">
          <LucideLinkedin size={24} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />
          <span className="hidden lg:inline text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">LinkedIn</span>
        </div>
      </a>
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="group">
        <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-full hover:bg-blue-100 transition-colors duration-300">
          <XIcon size={24} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />
          <span className="hidden lg:inline text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Twitter</span>
        </div>
      </a>
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="group">
        <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-full hover:bg-pink-100 transition-colors duration-300">
          <InstagramIcon size={24} className="text-pink-600 group-hover:scale-110 transition-transform duration-300" />
          <span className="hidden lg:inline text-lg font-semibold text-gray-700 group-hover:text-pink-600 transition-colors duration-300">Instagram</span>
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
