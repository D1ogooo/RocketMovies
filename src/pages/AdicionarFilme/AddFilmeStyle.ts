import styled from 'styled-components'

export const Container = styled.div`
 width: 80%;
 margin: 0 auto;
`

export const PaiContainer = styled.div`

`

export const FirstContainer = styled.div`
 display: flex;
 align-items: center;

 svg {
 width: 30px;
 height: 30px;
 color: #FF859B;
 }

 a {
 color: #FF859B;
 text-decoration: none;
 text-align: center;
 font-family: Roboto Slab;
 font-size: 16px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 }
`

export const SecondContainer = styled.div`
 color: #F4EDE8;
 font-family: Roboto Slab;
 font-size: 36px;
 font-style: normal;
 font-weight: 500;
 line-height: normal;
`

export const Title = styled.h2`
 color: #F4EDE8;
 font-family: Roboto Slab;
 font-size: 36px;
 font-style: normal;
 font-weight: 500;
 line-height: normal;
`

export const ThirdContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 2.5rem;
 font-size: 17px;
 
 #input_nota {
  border: none;
  outline: none;
  display: flex;
  padding: 18px 16px;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 10px;
  background: #262529;
 }

 #input_nota::placeholder {
  color: #948F99;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
 }

 #input_titulo {
  border: none;
  outline: none;
  display: flex;
  padding: 18px 16px;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 10px;
  background: #262529;
 }

 #input_titulo::placeholder {
  color: #948F99;
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
 }
`

export const ForContainer = styled.textarea`
 font-size: 17px;
 color: #948F99;
 display: flex;
 margin-top: 2.5rem;
 width: 98.4%;
 display: flex;
 height: 274px;
 outline: none;
 /* padding: 20px; */
 align-items: flex-start;
 gap: 18px;
 padding-top: 20px;
 padding-left: 20px;
 align-self: stretch;
 border-radius: 10px;
 background: #262529;
 border: none;
 resize: none;

 ::placeholder {
 color: #948F99;
 font-family: Roboto;
 font-size: 17px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 }
`

export const MarkContainer = styled.div`
 
`

export const TitleMark = styled.h2`
 width: 51.685.6875rem;
 color: #999591;
 font-family: Roboto Slab;
 font-size: 1.25rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 margin-top: 2rem;
`

export const MarkExternal = styled.div`
 height: 4.2rem;
 display: flex;
 padding: 1rem;
 align-items: flex-start;
 gap: 1rem;
 align-self: stretch;
 border-radius: 0.5rem;
 background: #0D0C0F;
`

export const CardDefault = styled.div`
 display: flex;
 align-items: center;
 gap: 1rem;
 padding: 5px 12px 5px 25px;
 border-radius: 10px;
 background: #262529;

 p {
  color: #FFF;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
 }

 svg {
  width: 1.375rem;
  color: #FF859B;
  cursor: pointer;
  text-align: center;
  font-family: Material Icons;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
 }
`

export const LastContainer = styled.div`
 display: flex;
 margin-top: 0.75rem;
 height: 3.6rem;
 justify-content: center;
 align-items: center;
 gap: 2.5rem;
 flex: 1 0 0;

 #first_button {
  width: 98px;
  display: flex;
  height: 56px;
  padding: 20px 250px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 10px;
  background: #0D0C0F;
  color: #FF859B;
  text-align: center;
  font-family: Roboto Slab;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  cursor: pointer;
 }

 #second_button {
  width: 131px;
  display: flex;
  height: 56px;
  padding: 16px 250px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 10px;
  background: #FF859B;
  color: #312E38;
  text-align: center;
  font-family: Roboto Slab;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  cursor: pointer;
 }
`

export const CardInternal = styled.div`
 ul {
  display: flex;
  gap: 1rem;
 }
`

export const CardCreate = styled.div`
 border-radius: 10px;
 border: 2px dashed #948F99;
 display: flex;
 align-items: center;
 gap: 1rem;
 padding: 21px;
 align-items: flex-start;
 gap: 8px;

 input {
  background: none;
  outline: none;
  border: none;
  color: #948F99;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
 }

 svg {
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: #FF859B;
  text-align: center;
  font-family: Material Icons;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
 }
`