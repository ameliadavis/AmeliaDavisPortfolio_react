import styled from "styled-components";

// const aqua = "#1FCDC9";
const orange = "#FF9E18";
const fadedAqua ="#E9F7F6"
const darkAqua ="#86d9e0"

export const HeaderStyle = styled.div `
.section {
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex; 
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 10px solid white;
}
video {
    position: relative ;
    margin-left: 1 em 
    bottom: 0;
    width: 100%
    z-index: 1;
    border: 10px solid white;
    justify-content: center;
}

`
export const NavStyle = styled.div `

#navbar {
  overflow: hidden;
  background-color: ${darkAqua};
}

#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

img{
  width: 4%;
  padding-left: 4px
  align-content: left
}

.content {
  padding: 16px;
}


.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}


.sticky + .content {
  padding-top: 1080px;
}

`

export const FooterStyle = styled.div `
div {
    background-color: ${darkAqua};
    padding: 7px;
}
.ImgLinks {
    height: 50px;
    margin: 10px;
    float: right;
}
button{
  Float: right;
  Margin: 1em;
}
form{
  padding: -2em
}

`
export const PortfolioContainerStyle = styled.div `
container {
    background-color: ${fadedAqua};
}
`
 export const AboutMe = styled.div `
 #aboutText {
   padding: 8%;
 }
 `
export const CardStyle = styled.div `
a{
  color:#fff;
}
a:hover{
  color: ${orange}
}
`
export const ProjectStyle = styled.div `
button{
  background-color: ${orange};
  margin: 1em;
  border: 1px solid ${orange};
}
`

export const ContactStyle = styled.div `
#contactCard{
  Bckground-Color: ${darkAqua} 

}
`