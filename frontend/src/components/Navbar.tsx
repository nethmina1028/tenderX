

function Navbar() {
  return (
     <nav className="w-full bg-primary p-6 shadow-md">
       <div className="flex items-center justify-center gap-8">
          <h2 className="text-lg text-white">Home</h2>
            <a href="/" className="text-white text-3xl font-bold">
                TenderX
            </a>
            <a href="/tender" className="text-lg text-white">Tenders</a>
       </div>
        </nav>
  )
}

export default Navbar