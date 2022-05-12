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

    useEffect( () => {
        setRepositories([])
    }, [userProfile])

    function handleFetchApi() {
        fetch(`https://api.github.com/users/${userProfile}/repos`)
        .then(response => response.json())
        .then(data => setRepositories(data))
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