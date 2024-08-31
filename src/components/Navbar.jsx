import React from 'react'

const Navbar = ({setType}) => {
  return (
   <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
  <div className="container-fluid">
    <div className="navbar-brand" style={{cursor:"default"}}><span className="badge bg-danger text-black ">World News</span></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item mx-3">
          <div className="nav-link active " style={{cursor:"pointer"}}  aria-current="page" onClick={()=>setType("cricket")}>Cricket</div>
        </li>
        <li className="nav-item mx-3">
          <div className="nav-link active" style={{cursor:"pointer"}} aria-current="page" onClick={()=>setType("sports")} >Sports</div>
        </li>
        <li className="nav-item mx-3" >
          <div className="nav-link active" style={{cursor:"pointer"}} aria-current="page" onClick={()=>setType("bitCoin")}>BitCoin</div>
        </li>
        <li className="nav-item mx-3">
          <div className="nav-link active" style={{cursor:"pointer"}} aria-current="page" onClick={()=>setType("science")}>Science</div>
        </li>
        <li className="nav-item mx-3 ">
          <div className="nav-link active" style={{cursor:"pointer"}} aria-current="page" onClick={()=>setType("technology")}>Technology</div>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
   </div>
  )
}

export default Navbar 