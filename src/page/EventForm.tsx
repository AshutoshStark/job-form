import React, { useState } from 'react'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import Preview from '../Components/Preview'

// Full Name (Text)
// ○ Email (Email)
// ○ Phone Number (Number)
// ○ Applying for Position (Dropdown: Developer, Designer, Manager)
// ○ Relevant Experience (Number of years, visible if "Developer" or "Designer"
// is selected)
// ○ Portfolio URL (Text, visible if "Designer" is selected)
// ○ Management Experience (Text, visible if "Manager" is selected)
// ○ Additional Skills (Multiple checkboxes: JavaScript, CSS, Python, etc.)
// ○ Preferred Interview Time (Date and Time Picker)

const JobForm = () => {

  const [name,setName] = useState<any>()
  const [email,setEmail] = useState<any>()
  const [phone,setPhone] = useState<string>('')
  const [exprience,setExperience] = useState<string>('')
  const [file,setFile] = useState<any>()
  const [html,setHtml] = useState<any>()
  const [js,setJs] = useState<any>()
  const [css,setCss] = useState<any>()
  const [MERN,setMERN] = useState<any>()
  const [date,setDate] = useState<any>()
  const [time,setTime] = useState<any>()
  const [preview,setPreview] = useState<boolean>(false)
  const [position,setPosition] = useState<string>('')

  const HandleSubmit=(e:any,num:string)=>{
    e.preventDefault();
    if((num).length === 9){
      toast.error("the number is not correct")
      setPhone('')
    }
    else{
      setPreview(true)
    }
  }

  return (
    <MainDiv>
     { preview === false &&  <Form>
      <Register>
      <ImageDeco>
        <div className="layer">
          <p>
            Please fill the details -
          </p>
          <p>
            For your job registration
          </p>
        </div>
        <img src="/assets/form_image.jpg" alt="" />
      </ImageDeco>
        <Head>
        Welcome to our Job portal
        <p>
        Please fill the bellow form to register your self for the job..!
        </p>
        </Head>
        <Field>
          Name
        <input type="text" name="" id="" placeholder='Name' onChange={(e)=>{setName(e.target.value)}} required/>
        </Field>
        <Field>
          Email
        <input type="email" name="" id="" placeholder='email (eg.: abc@xyz.com)' onChange={(e)=>{setEmail(e.target.value)}} required/>
        </Field>
        <Field>
          Phone Number
        <input type="number" name="" id="" placeholder='Phone Number' onChange={(e)=>{setPhone(e.target.value)}} value={phone} required/>
        </Field>
        <Field>
        <select name="Position" id="" onChange={(e:any)=>setPosition(e.target.value)} required>
          <option value="" hidden>Select Position</option>
          <option value={"Developer"}>
            {"Developer"}
          </option>
          <option value={"Designer"}>
            {"Designer"}
          </option>
          <option value={"Management"}>
            {"Management"}
          </option>
        </select>
        </Field>
        {position === ('Developer' || 'Management') && 
        (<Field>
        {position === 'Developer' ? 'Relevant Experience' : 'Management Experience'}
        <input type="text" name="" id="" placeholder='in years' onChange={(e)=>{setExperience(e.target.value)}} required/>
        </Field>)
        }
        {position === 'Designer' && <Field>
          Your PortFolio
        <input type="file" name="" id="" placeholder='in years' onChange={(e)=>{setFile(e.target.files)}} required/>
        </Field>}
        <Field>
          Few More Questions.:
        <FieldQ>
        Are you going to attend the event ?
        <input type="checkbox" name="" id="" onChange={(e)=>setHtml(e.target.checked)} />
        </FieldQ>
        <FieldQ>
        Are you going to attend the event ?
        <input type="checkbox" name="" id="" onChange={(e)=>setJs(e.target.checked)} />
        </FieldQ>
        <FieldQ>
        Are you going to attend the event ?
        <input type="checkbox" name="" id="" onChange={(e)=>setCss(e.target.checked)} />
        </FieldQ>
        <FieldQ>
        Are you going to attend the event ?
        <input type="checkbox" name="" id="" onChange={(e)=>setMERN(e.target.checked)} />
        </FieldQ>
        </Field>
        <Field>
          Preferred Interview Date
        <input type="date" name="" id="" placeholder='email (eg.: abc@xyz.com)' onChange={(e)=>{setDate(e.target.value)}} required/>
        </Field>
        <Field>
          Preferred Interview Time
        <input type="time" name="" id="" placeholder='email (eg.: abc@xyz.com)' onChange={(e)=>{setTime(e.target.value)}} required/>
        </Field>
        <Field>
        <button onClick={(e)=>{HandleSubmit(e,phone)}}>Submit</button>
        </Field>
      </Register>
      </Form>}
      {preview === true && <Preview
        name = {name}
        email = {email}
        phone={phone}
        experience={exprience}
        position={position}
        date={date}
        time={time}
        file={file}
        html={html}
        js={js}
        css={css}
        MERN={MERN}
      />}
    </MainDiv>
  )
}

export const Head = styled.div`
    color: #f5f5f5f5;
    font-weight: 600;
    font-size: 2rem;
    margin: 1rem 0 1.5rem 0;
    p{
      font-size: .8rem;
      margin: 10px 0 0 10px;
    }
`

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`
const ImageDeco = styled.div`
  position: relative;
  width: 50vw;
  height: 35vh;
  cursor: default;
  img{
    width: inherit;
    height: inherit;
    border-radius: 15px;
    object-fit: cover;
  }
  .layer{
    z-index: 2;
    height: inherit;
    width: inherit;
    position: absolute;
    background: rgba( 107, 55, 178, 0.6 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9px );
    -webkit-backdrop-filter: blur( 9px );
    border-radius: 15px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: #f5f5f5f5;
    font-size: 2rem;
    p{
      font-weight:200 ;
      margin: 3rem 1rem;
    }
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`
const Form = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  height: 100vh;
  @media screen and (max-width: 900px) {
    width: 100vw;
    margin: 0;
  }
`
const Register = styled.form`
  border-radius: 15px;
  background: #2D292E;
  box-shadow:  -20px 20px 60px #262327,20px -20px 60px #342f35;
  padding: 1rem;
  margin: 2rem;
  width: 52vw;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    width: 90vw;
  }
  input[type=number] {
  -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
  input{
    background-color: #2D292E;
    border: solid #494849 1px;
    padding: 10px;
    color: #f5f5f5f5;
    border-radius: 10px;
    font-size: 1.2rem;
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    width: 280px;
  }
  input:hover{
    border: solid #ffbaff 1px;
  }
  input:focus{
    background-color: #343435;
    border: solid #7330C6 1px;
    outline: none;
  }
  button {
  text-decoration: none;
  margin: 0 0 2rem 0;
  border: none;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  color: #f5f5f5f5;
  width: 10rem;
  height: 2rem;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5);
  border-radius: 10px;
}
`
const Field = styled.div`
  color: #f5f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  select{
    color: gray;
    width: 20vw;
    border-radius: 50px;
    background: rgba( 53, 22, 108, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    box-shadow:  5px 5px 16px #271050,-5px -5px 16px #35166c;
    padding: 1rem;
    margin: 1rem;
    border: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    @media screen and (max-width: 900px) {
      width: 55vw;
    }
}
option{
    width: 20vw;
    border-radius: 50px;
    background: rgba( 53, 22, 108, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    box-shadow:  5px 5px 16px #271050,-5px -5px 16px #35166c;
    padding: 1rem;
    margin: 1rem;
    border: none;
    color: white;
    font-size: 1rem;
}
  
`
const FieldQ = styled.div`
  color: #f5f5f5f5;
  display: flex;
  margin: 5px;
  input[type=checkbox]{
    width: 25px;
  }
  gap: 5px;
`

export default JobForm
