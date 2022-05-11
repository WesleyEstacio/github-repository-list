import { RepositoryInfo } from './styles'

interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        link: string
    }
}

export function RepositoryItem({ repository }:RepositoryItemProps) {
    return (
        <>
            <RepositoryInfo>
                    <strong>{repository.name}</strong>
                    <p>{repository.description}</p>
                    <a 
                        href={repository.link}
                        target="_blank"
                    >
                        Access the repositorio
                    </a>
            </RepositoryInfo>
        </>
    )
}