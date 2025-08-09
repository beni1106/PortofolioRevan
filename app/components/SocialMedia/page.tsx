import { Github, Linkedin, } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import SocialMediaLayout from './layout'

export default function SocialMedia() {
  return (
    <SocialMediaLayout>
      <a href="https://github.com/beni1106/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0E131F] 
      // p-2 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-125">
        <Github size={24} />
      </a>
      <a href="https://www.linkedin.com/in/revan-novendri/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0E131F] 
      // p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-125">
        <Linkedin size={24} />
      </a>
      <a href="https://www.instagram.com/rreppan/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0E131F] 
      // p-2 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-125">
        <FaInstagram size={24} />
      </a>
      <a href="https://wa.me/62895410240543" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0E131F] 
      // p-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-125">
        <FaWhatsapp size={24} />
      </a>
    </SocialMediaLayout>
  )
}

