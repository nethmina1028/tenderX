

function Navbar() {
  return (
     <nav className="w-full bg-primary p-6 shadow-md">
       <div className="flex items-center justify-center gap-8">
          <h2 className="text-lg text-white">Home</h2>
            <a href="/" className="text-white text-3xl font-bold">
                TenderX
            </a>  
            <h2 className="text-lg text-white">Tenders</h2>
       </div>
        </nav>
  )
}

export default Navbar