import styled from 'styled-components'

export const Container = styled.div`
 width: 85%;
 margin: 0 auto;
`

export const PaiContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap: 64px;
 margin-top: 10px;
`

export const LogoHeader = styled.h2`
 p {
 width: 160px;
 height: 32px;
 color: #FF859B;
 font-family: Roboto Slab;
 font-size: 29px;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
 }
`

export const FindContainer = styled.div`
 display: flex;
 padding: 19px 24px;
 align-items: flex-start;
 flex: 1 0 0;
 justify-content: center;
 border-radius: 10px;
 background: #262529;

 input::placeholder {
 width: 100%;
 height: 89px;
 color: #948F99;
 font-family: 'Roboto Slab', serif;
 font-size: 17px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 }

 input {
 color: #999591;
 width: 100%;
 font-size: 19px;
 background: #262529;
 border: none;
 outline: none;
 }
`

export const UserContainer = styled.div`
 display: flex;
 gap: 9px;

 h1 {
 color: #F4EDE8;
 font-family: Roboto Slab;
 font-size: 14px;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
 }
  
 a {
 margin-top: -8px;
 text-align: end;
 color: #948F99;
 font-family: Roboto Slab;
 font-size: 15px;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 text-decoration: none;
 }

 img {
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 2.1875rem;
  border: 1px solid #3E3B47;
 }
`

export const FirstContainer = styled.div`
 h2 {
 color: #F4EDE8;
 font-family: Roboto Slab;
 font-size: 18px;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
 }
 
 a {
  text-decoration: none;
  color: #948F99;
  font-family: Roboto Slab;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
 }
`

export const SecondContainer = styled.div`
 img {
  width: 78px;
  height: 78px;
  border-radius: 35px;
  border: 1px solid #3E3B47;
 }
`

export const LineHeader = styled.hr`
 margin-bottom: 40px;
 width: 100%;
 height: 1px;
 margin-top: 10px;
 background-color: #3E3B47;
 border: none;
`