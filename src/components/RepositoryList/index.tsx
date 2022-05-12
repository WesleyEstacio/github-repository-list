import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { Container } from "./styles";

interface RepositoryList {
    userProfile: string
}

export function RepositoryList({ userProfile }:RepositoryList) {

    const [repositories,setRepositories] = useState([])

    useEffect( () => {
        setRepositories([])
    }, [userProfile])

    setTimeout( () => {
        // fetch(`https://api.github.com/users/${userProfile}/repos`)
        // .then(response => response.json())
        // .then(data => setRepositories(data))
    },2000)

    return (
        <Container>
            <ul>
                <h2>{userProfile}</h2>

                {repositories.map(repository => {
                    return <RepositoryItem repository={repository}/>
                })}
            </ul>
        </Container>
    )
}