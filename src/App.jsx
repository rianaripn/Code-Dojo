import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DojoPage from "./pages/DojoPage"
import TechniquePage from "./pages/TechniquePage"
import Scrolls from "./pages/Scrolls"
import QuestBar from "./components/QuestBar"
import { useEffect, useState } from "react"


function App() {
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem('bookmarks')) || []
  )

  useEffect(()=>{
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  },[bookmarks])


  const handleBookmarks = (id)=>{
        if(bookmarks.includes(id)){
            setBookmarks(bookmarks.filter((i)=>i!==id))
        }else{
            setBookmarks([...bookmarks,id])
        }
    }
  console.log(bookmarks)
  
  return (
    <>
    <QuestBar
      bookmarksCount={bookmarks.length}
    />
      <Routes >
        <Route path="/" element={<Home 
        bookmarks={bookmarks}
        setBookmarks ={setBookmarks}
        onBookmarks={handleBookmarks}/>} />
        <Route path="/dojo/:slug" element={<DojoPage
        bookmarks={bookmarks}
        setBookmarks ={setBookmarks}
        />} />
        <Route path="/technique/:slug" element={<TechniquePage
        bookmarks={bookmarks}
        setBookmarks ={setBookmarks}/>} />
        <Route path="/scrolls" element={<Scrolls
        bookmarks={bookmarks}
        setBookmark ={setBookmarks}/>} />
      </Routes>
    </>
  )
}

export default App
