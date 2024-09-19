import styled from "@emotion/styled";

const StyledContactForm = styled.form`
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.color.color3};
    color: ${({theme}) => theme.color.primaryColor};
    border: 1px solid ${({theme}) => theme.color.borderColor};
    margin-bottom: 40px;

    .form-group {
        margin-bottom: 20px;
    }

    input[type="text"],
    input[type="email"],
    textarea{
        width: calc(100% - 20px);
        padding: 10px;
        border-radius: 5px;
        border: none;
        margin-top: 5px;
    }

    textarea{
        resize: vertical;
    }

    button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        background: ${({theme}) => theme.color.buttonBackgroundGreen};
        color: ${({theme}) => theme.color.buttonColor};


        &:hover{
            background: ${({theme}) => theme.color.buttonHoverLighterGreen};
        }
    }

    input[type="text"],
    input[type="email"],
    textarea{
        background: ${({theme}) => theme.color.color5};
        color: ${({theme}) => theme.color.primaryColor};
        border: 1px solid ${({theme}) => theme.color.borderLighterColor};
    }
`

export default function ContactForm(){
    return(
        <StyledContactForm onSubmit={(e) => {e.preventDefault()}}>
            <div className="form-group">
                <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
                <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
                <textarea rows={5} placeholder="Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </StyledContactForm>
    );
}