import styled from "styled-components";

// const aqua = "#1FCDC9";
// const orange = "#FF9E18";

export const HeaderStyle = styled.div `
.section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex; 
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
video {
    position: absolute ;
    top: 0;
    left: 0;
    width: 100%
    z-index: 1;
}
.logo{
    bottom: 60%
    width: 25%
    padding: 20px;
    left-margin: 500px;
    z-index: 3;
}
`
