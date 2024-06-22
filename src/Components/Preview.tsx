import React from 'react'
import {  Head, MainDiv } from '../page/EventForm'
import styled from 'styled-components'

const Preview = ({name,email,phone,experience,file,html,js,css,MERN,date,time,position}:{name:string,email:string,phone:string,experience:string,file:any,html:boolean,js:boolean,css:boolean,MERN:boolean,date:any,time:any,position:any}) => {
  return (
    <MainDiv>
      <Form>
      <Head>
        Job Application Preview
      </Head>
      <p>
        Name.: {name} 
      </p>
      <p>
        Email.: {email}
      </p>
      <p>
        Phone.: {phone}
      </p>
      <p>
        Position Applied for.: {position}
      </p>
      {position === ('Developer' || 'Management') && <p>
        Your experience.: {experience}
      </p>}
     {position === 'Designer' &&  <p>
        Your Portfolio.: <a href={file[0].name}>click me</a>
      </p>}
      <p>
      Additional Skills.:
      <p>
        {
          (html === false && js === false && css === false && MERN === false) ? 'No Additional Skills' : `Your Additional Skills are ${html===true && 'HTML, '} ${js===true && 'JavaScript, '}${css===true && 'CSS,'}${MERN === true && "MERN Stack"}`
        }
        </p>
      </p>
      <p>
        Your InternView Will be on {date} at {time}
      </p>
        
      <p>Best Of Luck For Your InterView..!</p>
          
      </Form>
    </MainDiv>
  )
}

const Form = styled.div`
  border-radius: 15px;
  background: #2D292E;
  box-shadow:  -20px 20px 60px #262327,20px -20px 60px #342f35;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 50vw;
  margin: 2rem;
  height: 100vh;
  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 100vh;
  }
  p{
    font-size: 1.5rem;
    color: #f5f5f5f5;
    font-weight: 300;
  }
`


export default Preview
