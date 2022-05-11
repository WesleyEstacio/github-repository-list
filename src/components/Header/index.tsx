import { Container, Content } from "./styles";

interface HeaderProps {
    setUserProfile: (userProfile: string) => void 
}

export function Header({ setUserProfile }:HeaderProps) {

    return (
        <>
            <Container>
                <Content>
                    <h1>Repository List</h1>
                    <p>Place your github user and see your repositories !</p>

                    <input 
                        type="text" 
                        placeholder="Your GitHub Profile"
                        onChange={user => setUserProfile(user.target.value)}
                    />
                </Content>
            </Container>
        </>
    )
}