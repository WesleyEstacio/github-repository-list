import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RepositoryList } from "./components/RepositoryList";
import { GlobalStyle } from "./styles/Global";

export function App() {

  const [userProfile,setUserProfile] = useState('')

  return (
    <>
      <Header setUserProfile={setUserProfile}/>
      <RepositoryList userProfile={userProfile}/>
      <Footer />
      <GlobalStyle />
    </>    
  )
}
