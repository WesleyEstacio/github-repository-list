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
                text: "No repositories found",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #ff7979, #bd4242)",
                },
                onClick: function(){}
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