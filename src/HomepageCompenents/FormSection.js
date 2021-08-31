

const FormSection = ({handleFormSubmit, formName, setFormName, setFormEmail, formEmail, formMessage, setFormMessage, nameFocus, setNameFocus, emailFocus, setEmailFocus, messageFocus, setMessageFocus}) => {



    return ( 
        <div className = 'form--container sm-container center-container'>
            <h3 className = 'h3-text'>Questions or Comments?</h3>
            <p className = 'p-text'>We want to make sure that this page is helpful for you. <br/>If you have any questions or concerns, let us know about ’em below.</p>
            <form className="form--container__form">
                <div className="form--container__form__name form_input--container">
                    <input 
                        onFocus = {()=>{setNameFocus(true)}} 
                        onBlur = {(e)=>{e.target.value ? setNameFocus(true) : setNameFocus(false)}} 
                        className="form--container__form__name__input form_input"
                        type="text" 
                        required 
                        name="name" 
                        id="form_name" 
                        autoComplete = "name" 
                        value={formName} 
                        onChange={(e)=>setFormName(e.target.value)}
                    />
                    <label className = {`form--container__form__name__label form_label ${nameFocus && 'input--focus--label'}`} htmlFor="name">Full Name</label>
                </div>
                <div className="form--container__form__email form_input--container">
                    <input 
                        onFocus = {()=>{setEmailFocus(true)}} 
                        onBlur = {(e)=>{e.target.value ? setEmailFocus(true) : setEmailFocus(false)}} 
                        className="form--container__form__email__input form_input"
                        type="text" 
                        required 
                        name="email" 
                        id="form_email" 
                        autoComplete = "name" 
                        value={formEmail} 
                        onChange={(e)=>setFormEmail(e.target.value)}
                    />
                    <label className = {`form--container__form__email__label form_label ${emailFocus && 'input--focus--label'}`} htmlFor="email">Email</label>
                </div>
                <div className="form--container__form__message form_input--container">
                    <textarea 
                        onFocus = {()=>{setMessageFocus(true)}} 
                        onBlur = {(e)=>{e.target.value ? setMessageFocus(true) : setMessageFocus(false)}} 
                        className="form--container__form__message__input form_input"
                        required 
                        name="message" 
                        id="form_message" 
                        rows = "6"
                        cols = "50"
                        autoComplete = "message" 
                        value={formMessage} 
                        onChange={(e)=>setFormMessage(e.target.value)}
                    />
                    <label className = {`form--container__form__message__label form_label ${messageFocus && 'input--focus--label'}`} htmlFor="message">Message</label>
                </div>
                    <button className = 'form_btn' type="submit" onClick = {(e)=> formName && handleFormSubmit(e, formName, formEmail, formMessage)}>Reach Out!</button>
                </form>
        </div>
     );
}
 
export default FormSection;