import FormGroup from "./FormGroup/FormGroup";

export default function ContactForm(){
    return(
        <form onSubmit={(e) => {e.preventDefault()}} className="max-w-[500px] flex flex-col mx-auto my-0 p-5 rounded-[10px] justify-center bg-lightColors-fifth dark:bg-darkColors-fourth border border-solid border-lightColors-border dark:border-darkColors-border ">
            <FormGroup>
                <input type="text" placeholder="Name" required />
            </FormGroup>
            <FormGroup>
                <input type="email" placeholder="Email" required />
            </FormGroup>
            <FormGroup>
                <textarea className="resize-y" rows={5} placeholder="Message" required></textarea>
            </FormGroup>
            <button type="submit" className="cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] bg-submit-secondary text-submit-primary px-5 py-2.5 rounded-[5px] border-[none] hover:bg-submit-light">Send Message</button>
        </form>
    );
}