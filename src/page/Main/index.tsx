import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { FiCheckCircle, FiSend } from 'react-icons/fi';
import { Form } from '@unform/web';
import axios from 'axios';

import Input from '../../components/Input/index';
import Carousel from '../../components/Carousel';

import { Container, CallToActionButton,  CallToActionContainer, FirstContainer, Logo, SecondContainer, SecretContainer, Info, Circle, ThirdContainer, Calendar, ScheduleContainer, ScheduleInfo, CheckInfo, Self, FillInformation, CarouselContainer, FormEmail, ForthContainer } from './styles';

import socialBoardSvg from '../../assets/social-board.svg'; 
import vpImg from '../../assets/vp.png'; 
import funilImg from '../../assets/funil.jpg'; 
import instrutorImg from '../../assets/instrutor.jpg'; 

import GlobalStyle from '../../styles/global';

interface Data {
  email: string;
}

const api = axios.create({
  baseURL: 'https://vp-media-backend.herokuapp.com/'
})

const VP = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('08:00')

  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200
    })
  }, [])

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
      console.log(day.getDate()+'/'+day.getMonth()+'/'+day.getFullYear())
    }
  }, []);

  const disabledDays = useMemo(() => {
    const today = new Date();
    const disabledDays: Date[] = [];

    for (let x = 1 ; x < today.getDate() ; x++) {
      disabledDays.push(new Date(today.getFullYear(), today.getMonth(), x))
    }

    return disabledDays;
  }, [])

  const handleTimePick = useCallback((time) => {
    setSelectedTime(time);
  }, [])

  const handleSubmit = useCallback(async (data: Data) => {
    try {
      const timeFormatted = selectedTime.split(':').map(num => Number(num))
      await api.post('getting-email', {
        email: data.email,
        hour: timeFormatted[0],
        minute: timeFormatted[1],
        date: selectedDate 
      })
    } catch (err) {
      console.log(err)
    }
  }, [selectedTime, selectedDate])

  return (
    <>
      <GlobalStyle/>
      <Container>
        <FirstContainer>
          <Logo>
            <img src={vpImg} alt="VP-Media"/>
          </Logo>
    
          <CallToActionContainer>
            <div>
              <h1>Ajudamos empresas e profissionais liberais a conseguir mais clientes usando a internet.</h1>
              <h2>Pare de gastar tempo e dinheiro em ações com pouco resultado.</h2>
              <h2>É hora de fazer cada centavo contar, escalando seu negócio e vendendo mais.</h2>
    
              <CallToActionButton href='#sec' >
                <h3>Fale conosco</h3>
              </CallToActionButton>
            </div>
    
            <img src={socialBoardSvg} alt="Social-Board"/>
          </CallToActionContainer>
        </FirstContainer>

        <SecondContainer id='sec' data-aos="zoom-in" >
          <img src={funilImg} alt="Funil"/>

          <SecretContainer>
            <h1>NOSSA FILOSOFIA</h1>
            <h2>Aqui na VP-media, você poderá atingir um número maior de clientes. Usaremos as ferramentas que acreditamos necessárias para trazer o melhor resultado possível a você.</h2>
            <h2>Como podemos te ajudar:</h2>

            <Info>
              <div>
                <Circle />
                <h3>Criação de site</h3>
              </div>

              <div>
                <Circle />
                <h3>Funil de vendas</h3>
              </div>

              <div>
                <Circle />
                <h3>Facebook advertising</h3>
              </div>
            </Info>
            <CallToActionButton>
              <h3>Fale conosco</h3>
            </CallToActionButton>
          </SecretContainer>
        </SecondContainer>
        <ThirdContainer>
          <ScheduleContainer>
            <ScheduleInfo>
              <Self>
                <img src={instrutorImg} alt='Instrutor' />
              </Self>
              <h1>Ligação grátis de 15 minutos</h1>
              <h2>Com essa ligação você terá um entendimento claro dos passos que você precisa tomar para conseguir mais clientes online de maneira consistente. Ficaremos felizes de poder ajudar você de alguma forma.</h2>
              <h2>Encontre um horário e marque uma ligação conosco!</h2>

              <h3>ESSA LIGAÇÃO É PERFEITA PARA AQUELES QUE:</h3>

              <CheckInfo data-aos="fade-right" >
                <div>
                  <FiCheckCircle />
                </div>
                <h4>Tem um site, mas que não consegue atrair pessoas até ela.
                </h4>
              </CheckInfo>
              <CheckInfo data-aos="fade-right" >
                <div>
                  <FiCheckCircle />
                </div>
                <h4>​Querem também ir para o online.
                </h4>
              </CheckInfo>
              <CheckInfo data-aos="fade-right" >
                <div>
                  <FiCheckCircle />
                </div>
                <h4>Querem aumentar o faturamento do seu serviço ou do seu negócio.
                </h4>
              </CheckInfo>
              <CheckInfo data-aos="fade-right" >
                <div>
                  <FiCheckCircle />
                </div>
                <h4>​​Buscam um parceiro para fazer marketing para o seu negócio.
                </h4>
              </CheckInfo>
            </ScheduleInfo>
            <FillInformation>
              <Calendar>
                <DayPicker
                  weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                  fromMonth={new Date()}
                  disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
                  modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
                  selectedDays={selectedDate}
                  onDayClick={handleDateChange}
                  months={[
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro',
                  ]}
                />
              </Calendar>
            
              <CarouselContainer>
                <Carousel
                  handleTimePick={handleTimePick}
                />
              </CarouselContainer>

              <FormEmail>
                <Form
                  onSubmit={handleSubmit}
                >
                  <Input 
                    name='email' 
                    type='text' 
                    placeholder='Digite seu e-mail'
                  />
                  <button 
                    type='submit' 
                  >
                    Send<FiSend />
                  </button>
                </Form>
              </FormEmail>
            </FillInformation>
          </ScheduleContainer>
        </ThirdContainer>
        <ForthContainer>
          <h1>© 2020 VP-media. All Rights Reserved</h1>
        </ForthContainer>
      </Container>
    </>
  )
}

export default VP;