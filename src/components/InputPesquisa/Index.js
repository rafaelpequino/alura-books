import styled from "styled-components";

const InputPesquisa = styled.input`
    border: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 40px;
    border-radius: 50px;
    width: 400px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;

    &::placeholder {
        color:rgba(255, 255, 255, 0.34);
        font-size: 16px;
    }
`

export default InputPesquisa