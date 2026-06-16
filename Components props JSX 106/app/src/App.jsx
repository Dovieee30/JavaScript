import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"


function App() {
  
  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="Card 1" description="Description Card 1" />
        <Card title="Card 2" description="Description Card 2" />
        <Card title="Card 3" description="Description Card 3" />
        <Card title="Card 4" description="Description Card 4" />
       
      </div>
      <Footer/>
    </>
  )
}

export default App
