import { useEffect } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { Container } from "./styles";

interface RepositoryList {
    userProfile: string
}

const repository = {
    name: 'Title',
    description: 'Descricao mto foda',
    link: 'linkbala'
}

export function RepositoryList({ userProfile }:RepositoryList) {

    useEffect( () => {
        fetch(`https://api.github.com/users/${userProfile}/repos}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }, [userProfile])

    return (
        <Container>
            <ul>
                <RepositoryItem repository={repository}/> 
                <RepositoryItem repository={repository}/>
            </ul>
        </Container>
    )
}