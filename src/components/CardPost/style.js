import styled from "styled-components";

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32vw;
  min-width:300px ;
  height: 40vh;
  border: 1px solid black;
  border-radius:10px ;
  line-height: 0;
`;
export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 50%;
  > img {
    max-height:10vh ;
  }
`;

export const CardComentarios = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
export const CardPostContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100vw;
  height: auto;
  gap: 20px;
  input {
    width: 70vw;
    border-radius: 20px;
    height: 40px;
    padding-left: 20px;
    border:none ;
    box-shadow:1px 2px 5px 1px  ;
  }
`;