import { RepositoryInfo } from './styles'

interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string
    }
}

export function RepositoryItem({ repository }:RepositoryItemProps) {
    return (
        <>
            <RepositoryInfo>
                    <strong>{repository.name}</strong>
                    <p>{repository.description}</p>
                    <a 
                        href={repository.html_url}
                        target="_blank"
                    >
                        Access the repositorio
                    </a>
            </RepositoryInfo>
        </>
    )
}