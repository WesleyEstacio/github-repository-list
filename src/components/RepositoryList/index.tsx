import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { Container } from "./styles";

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
            alert('Nenhum repositório encontrado')
            
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