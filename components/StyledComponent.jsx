import React from 'react';
import styled from 'styled-components';

const StyledComponent = () => {
    // const Title = styled.h1`
    //     font-size: 1.5rem;
    //     text-align: center;
    //     color: palevioletred;
    // `

    // const Wrapper = styled.div`
    //     padding: 4rem;
    //     background-color: papayawhip;
    // `

    // const Button = styled.button`
    //     background-color: ${(props) => (props.primary ? "pink" : "white")};
    //     color: ${(props) => (props.primary ? "white" : "pink")};
    //     font-size: 1rem;
    //     margin: 1rem;
    //     padding: 0.25rem 1rem;
    //     border: 2px solid pink;
    //     border-radius: 3px;
    // `

    const Container = styled.div`
        background-color: black;
        width: 1024px;
        margin: 0 auto; //중앙정렬
        @media screen and (max-width: 760px) {
            width: 100%;
        }
    `

    const Button = styled.button`
        background-color: ${(props) => (props.main ? "blue" : "")};
        color: ${(props) => (props.main ? "white" : "black")};
        border: ${(props) => (props.main ? "2px solid yellow" : "")};
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;
    `
    

    return (
        // <div>
        //     <Wrapper>
        //         <Title>안녕하세요</Title>
        //     </Wrapper>
        // </div>

        // <div>
        //     <Button>Normal</Button>
        //     <Button primary>Primary</Button>
        // </div>

        <Container>
            <Button>버튼1</Button>
            <Button main>버튼2</Button>
        </Container>
    );
};

export default StyledComponent;