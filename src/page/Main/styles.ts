import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const action = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.6);
  }

  100% {
    transform: scale(1);
  }
`

const popUpModal = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

export const Container = styled.div``;

export const FirstContainer = styled.div`
  min-height: 100vh;
  padding: 10px;
  background: #111111;
`;

export const Logo = styled.div`
  margin: 10px 15px 20px;

  display: flex;
  justify-content: flex-start;

  max-height: 150px;

  img {
    display: block;
    max-width: 100%;
  }

  @media (max-width: 1290px) {
    max-width: 1140px;
    margin: 0px 10px 20px;
  }

  @media (max-width: 1025px) {
    justify-content: center;
    margin-bottom: 0px;
  }
`

export const CallToActionContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    h1 {
      color: #6519ff;
      font-family: Poppins;
      font-weight: bold;
      font-size: 40px;
      line-height: 50px;
      margin-bottom: 20px;

      @media (max-width: 1025px) {
        font-size: 32px;
        line-height: 40px;
      }
    }

    h2 {
      margin-bottom: 15px;
      color: #f5f5f5;
      font-size: 26px;
      font-weight: normal;

      @media (max-width: 1025px) {
        font-size: 20.8px;
      }
    }
  }

  img {
    max-width: 520px;
    width: 100%;
  }

  @media (max-width: 1025px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CallToActionButton = styled.a`
  margin: 20px 0 30px;
  background: #6519ff;
  width: 330px;
  height: 60px;
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  
  @media (max-width: 1025px) {
    align-self: center;
  }

  h3 {
    font-size: 32px;
    color: #f5f5f5;
    font-weight: bold;
  }
`

export const SecondContainer = styled.div`
  padding: 50px 10px 40px;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 720px;
    width: 100%;
  }

  @media (max-width: 1025px) {
    flex-direction: column;
  }
`

export const SecretContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Poppins;
    font-weight: bold;
    font-size: 40px;
    color: #000000;
    margin-bottom: 20px;

    @media (max-width: 1025px) {
      font-size: 32px;
    }
  }

  h2 {
    font-weight: normal;
    font-family: Roboto;
    font-size: 26px;
    margin-bottom: 15px;
    color: #111111;
    align-self: flex-start;

    @media (max-width: 1025px) {
      font-size: 20.8px;
    }
  }
`

export const Info = styled.div`
  min-width: 100%;
  padding-left: 30px;

  div {
    display: flex;
    align-items: center;

    h3 {
      font-weight: 500;
      font-size: 22px;
    }

    & + div {
      margin-top: 5px;
    } 
  }
`

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  background: rgba(101, 25, 255, 0.3);
  margin-right: 8px;
  position: relative;

  &:after{
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 3px solid #6519ff;
    border-radius: 15px;
  }
`

export const ThirdContainer = styled.div`
  padding: 30px 10px 40px;
  background: #111111;
`;

export const ScheduleContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1025px) {
    flex-direction: column;
  }
`

export const ScheduleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 520px;

  h1 {
    font-size: 36px;
    color: #6519ff;
    margin: 10px 0; 
    font-family: Poppins;
  }

  h2 {
    color: #f9f9f9;
    font-size: 16px;
    line-height: 22px;

    & + h2 {
      margin-top: 10px;
    }
  }

  h3 {
    font-size: 24px;
    color: #6519ff;
    margin: 10px 0;
    font-family: Poppins;
  }

  @media (max-width: 1025px) {
    margin-bottom: 30px;
  }
`

export const Self = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0px 0px 13px 0px #f9f9f9;
  }
`

export const CheckInfo = styled.div`
  display: flex;
  margin-top: 5px;

  div {
    display: flex;
    padding-top: 1.5px;
    margin-right: 8px;

    svg {
      border-radius: 50%;
      color: green;
      height: 18px;
      width: 18px;
    }
  }

  h4 {
    font-size: 18px;
    color: #f9f9f9;
    letter-spacing: 1px;
  }

  & + div {
    margin-top: 5px;
  }
`

export const FillInformation = styled.div`
  display: flex;
  flex-direction: column;
`

export const Calendar = styled.aside`
  max-width: 340px;

  .DayPicker {
    background: #f9f9f9;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;

export const FormEmail = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    input {
      height: 40px;
      width: 340px;
      padding: 5px 5px 5px 10px;
      border: none;
      border-radius: 10px;
      color: #3e3b47;
      font-size: 18px;
    }

    button {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 20px;
      height: 40px;
      width: 165px;
      background: #3e3b47;
      color: #f9f9f9;
      font-size: 20px;
      padding: 5px;
      font-family: Poppins;

      svg {
        margin-left: 3px;
        width: 20px;
        height: 20px;
        color: #ff9000;
      }
    }
  }
`

export const CarouselContainer = styled.div`
  max-width: 290px;
  height: 40px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto 0;
`

export const FourthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  background: #505050;

  h1 {
    font-size: 12px;
    color: #111111;
  }
`

export const ModalConfirmed = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${popUpModal} 3s cubic-bezier(0.645, 0.045, 0.355, 1);

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    height: 25px;
    color: #13bf62;
    margin-top: 10px;
  }

  svg {
    color: #13bf62;
    animation: ${action} 3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`

export const ModalError = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${popUpModal} 3s cubic-bezier(0.645, 0.045, 0.355, 1);

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    height: 25px;
    color: #e40006;
    margin-top: 10px;
  }

  svg {
    color: #e40006;
    animation: ${action} 3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`