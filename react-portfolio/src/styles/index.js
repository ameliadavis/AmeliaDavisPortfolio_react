import styled from "styled-components";

// const aqua = "#1FCDC9";
const orange = "#FF9E18";
const fadedAqua ="#E9F7F6"

export const HeaderStyle = styled.div `
.section {
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex; 
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
video {
    position: relative ;
    margin-left: 1 em 
    bottom: 0;
    width: 100%
    z-index: 1;
}

`
export const NavStyle = styled.div `

#navbar {
  overflow: hidden;
  background-color: ${orange};
}

#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
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
    background-color: ${orange};
    padding: 15px;
}
.ImgLinks {
    height: 50px;
    margin: 10px;
}
form{
    padding: 10px;
}
`
export const PortfolioContainerStyle = styled.div `
container {
    background-color: ${fadedAqua};
}
`
