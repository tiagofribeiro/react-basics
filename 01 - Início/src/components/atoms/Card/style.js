import { styled } from "styled-components";

export const CardContainer = styled.div`
${props => {
        switch (props.class) {
            case ('content'):
                return `
                width: 50rem;
                max-width: 95%;
                margin: 2rem auto;
                padding: 2rem;
                border-radius: 12px;
                background-color: #313131;
                box-shadow: 0 2px 12px #313131;
            `;
            case ('item'):
                return `
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
                padding: 0.5rem;
                margin: 1rem 0;
                border-radius: 12px;
                background-color: #4b4b4b;
            `;
            case ('date'):
                return `
                display: flex;
                flex-direction: column;
                width: 5.5rem;
                height: 5.5rem;
                border: 1px solid #ececec;
                background-color: #2a2a2a;
                color: white;
                border-radius: 12px;
                align-items: center;
                justify-content: center;
            `;
            default:
                return `
                display: flex;
                border-radius: 12px;
                `;
        }
    }}
`;