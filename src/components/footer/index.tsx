import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className=" text-gray-500 ">
      <div className="container mx-auto px-4 py-8">
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>© {currentYear} Artu Çevre Danışmanlık.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer