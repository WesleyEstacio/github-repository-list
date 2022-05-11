import { Container, Content } from "./styles";

export function Header() {
    return (
        <>
            <Container>
                <Content>
                    <h1>Repository List</h1>
                    <p>Place your github user and see your repositories !</p>

                    <input 
                        type="text" 
                        placeholder="Your GitHub Profile"
                    />
                </Content>
            </Container>
        </>
    )
}