import React from 'react'
import Header from './components/Header'
import Projetun from './components/Projetun'
import Projetdeux from './components/Projetdeux'
import Projettrois from './components/Projettrois'
import Navbar from './components/Navbar'
import Information from './components/Information'
import Citation from './components/Citation'
import Contact from './components/Contact'
import './App.css'
import jsonHeader from './Json/header.json'
import jsonProjetun from './Json/projetun.json'
import jsonProjetdeux from './Json/projetdeux.json'
import jsonProjettrois from './Json/projettrois.json'
import jsonInformation from './Json/informations.json'
import jsonContactt from './Json/contact.json'


function App() {
  //console.log(jsonProjet1)
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="page">

        <Header Header={jsonHeader.info} />

        <Information Information={jsonInformation.nommer}></Information>

        <div className='backgroundimgprojet'>
          <Projetun Projetun={jsonProjetun.nommer} />

          <Projetdeux Projetdeux={jsonProjetdeux.nommer} />

          <Projettrois Projettrois={jsonProjettrois.nommer} />
        </div>
        <Citation></Citation>
      </div>
      <Contact Contact={jsonContactt.nommer}/>

    </>

  )
}
export default App;






