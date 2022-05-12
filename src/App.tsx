import { useState } from "react";
import { Header } from "./components/Header";
import { RepositoryList } from "./components/RepositoryList";
import { GlobalStyle } from "./styles/Global";

export function App() {

  const [userProfile,setUserProfile] = useState('wesleyestacio')

  return (
    <>
      <Header setUserProfile={setUserProfile}/>
      <RepositoryList userProfile={userProfile}/>
      
      <GlobalStyle />
    </>    
  )
}
