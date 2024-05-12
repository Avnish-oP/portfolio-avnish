import { InstagramIcon, LucideLinkedin, XIcon } from 'lucide-react'
import React from 'react'

function SocialMedia() {
  return (
    <div className="right flex items-center justify-start basis-[30vw]">
            {/* <Image src={portolioPhoto} width={400} alt="portfolio" /> */}

            <div className="flex sm:flex-col">
              <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 group">
                <LucideLinkedin
                  size={50}
                  color="blue"
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                />
                <span className="md:inline hidden text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  LinkedIn
                </span>
              </div>
              <div className="w-2 h-8 hidden md:block rounded-lg bg-green-600 relative left-6 mt-2"></div>
              <div className="flex  items-center gap-2 cursor-pointer hover:text-blue-500 group">
                <XIcon
                  size={60}
                  color="white"
                  className="transition-transform  duration-500 ease-in-out transform group-hover:scale-125"
                />
                <span className="md:inline hidden text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  Twitter
                </span>
              </div>
              <div className="w-2 h-8 hidden md:block rounded-lg bg-blue-600 relative left-6 mb-2"></div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 group">
                <InstagramIcon
                  color="purple"
                  size={48}
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                />
                <span className="md:inline hidden text-3xl text-purple-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  Instagram
                </span>
              </div>
            </div>
          </div>
  )
}

export default SocialMedia
