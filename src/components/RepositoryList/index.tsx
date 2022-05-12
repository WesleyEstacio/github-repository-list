import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { Container } from "./styles";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

interface RepositoryList {
    userProfile: string
}

interface RepositoryItemProps {
    name: string,
    description: string,
    html_url: string,
}

export function RepositoryList({ userProfile }:RepositoryList) {

    const [repositories,setRepositories] = useState<RepositoryItemProps[]>([])
    const [URL,setURL] = useState(``) 

    useEffect( () => {
        setRepositories([])
        setURL(`https://api.github.com/users/${userProfile}/repos`)
    }, [userProfile])

    function handleFetchApi() {
        fetch(URL)
        .then(response => {
            if(response.status == 404){
                throw new Error('Something went wrong');
            }else {
                return response.json()
            }
        })
        .then(data => setRepositories(data))
        .catch(() => {
            Toastify({
                text: "Nenhum repositório encontrado",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
        })
    }

    return (
        <Container>

            <input 
                type="button" 
                placeholder="Atualizar Repositórios"
                onClick={handleFetchApi}
                value="Find Repositories"
            />

            <h2>{userProfile ? userProfile : ''}</h2>

            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
            </ul>
        </Container>
    )
}