import BlogPost from "./BlogPost"
import styled from "styled-components"

const App = () =>{
  return(
    <Container>
      <h1>BLOG POSTS</h1>
      <BlogPost />
    </Container>
  )
}

export default App

const Container = styled.div``