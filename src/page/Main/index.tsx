import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { FiCheckCircle, FiSend, FiXCircle, FiMail, FiLinkedin, FiPhone, FiX } from 'react-icons/fi';
import { Form } from '@unform/web';
import axios from 'axios';

import Input from '../../components/Input/index';
import Carousel from '../../components/Carousel';

import { Container, CallToActionButton,  CallToActionContainer, FirstContainer, Logo, SecondContainer, SecretContainer, Info, Circle, ThirdContainer, Calendar, ScheduleContainer, ScheduleInfo, CheckInfo, Self, FillInformation, CarouselContainer, FormEmail, FourthContainer, ModalConfirmed, ModalError, ContactModal, Contact } from './styles';

import socialBoardSvg from '../../assets/social-board.svg'; 
import vpImg from '../../assets/logoVpWhite.png'; 
import funilImg from '../../assets/funil.jpg'; 
import instrutorImg from '../../assets/instrutor.jpg'; 

import GlobalStyle from '../../styles/global';

interface Data {
  name: string;
  email: string;
}

const api = axios.create({
  baseURL: 'https://vp-media-backend.herokuapp.com/'
})

const VP = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('08:00');
  const [showModalConfirmed, setShowModalConfirmed] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [showModalContact, setShowModalContact] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200
    })
  }, [])

  useEffect(() => {
    const div = document.getElementById('trigger-modal');

    if (div) {
      window.onscroll = function() {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        if (window.pageYOffset > scrollableHeight - 1) {
          setShowModalContact(true);
        }
      }
    }
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
        name: data.name,
        email: data.email,
        hour: timeFormatted[0],
        minute: timeFormatted[1],
        date: selectedDate 
      })

      setShowModalConfirmed(true);

      if (document.querySelector('.input')) {
        (document.querySelector('.input') as HTMLInputElement).value = '';
      }

      await new Promise(resolve => {
        setTimeout(resolve, 3000);
      })
      
      setShowModalConfirmed(false);
    } catch (err) {
      setShowModalError(true);
      await new Promise(resolve => {
        setTimeout(resolve, 3000);
      })

      setShowModalError(false);
    }
  }, [selectedTime, selectedDate])

  const endModalContact = useCallback(() => {
    setShowModalContact(false);
  }, [])

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
    
              <CallToActionButton href='#info' >
                <h3>Fale conosco</h3>
              </CallToActionButton>
            </div>
    
            <img src={socialBoardSvg} alt="Social-Board"/>
          </CallToActionContainer>
        </FirstContainer>

        <SecondContainer data-aos="zoom-in" >
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
            <CallToActionButton href='#info' >
              <h3>Fale conosco</h3>
            </CallToActionButton>
          </SecretContainer>
        </SecondContainer>
        <ThirdContainer>
          <ScheduleContainer>
            <ScheduleInfo id='info' >
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
                <h4>Tem um site, mas não consegue atrair pessoas até ele.
                </h4>
              </CheckInfo>
              <CheckInfo data-aos="fade-right" >
                <div>
                  <FiCheckCircle />
                </div>
                <h4>​Querem ir para o online, mas não sabem como.
                </h4>
              </CheckInfo>
              <CheckInfo data-aos="fade-right" >
                <div>
                  <FiCheckCircle />
                </div>
                <h4>Buscam aumentar o faturamento do seu negócio.
                </h4>
              </CheckInfo>
              <CheckInfo data-aos="fade-right" >
                <div>
                  <FiCheckCircle />
                </div>
                <h4>Desejam um parceiro para fazer marketing para o seu negócio.
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
                    name='name'
                    className='input'
                    type='text' 
                    placeholder='Nome'
                  />
                  <Input 
                    name='email'
                    className='input'
                    type='text' 
                    placeholder='E-mail'
                  />
                  <button 
                    type='submit'
                    id='trigger-modal'
                  >
                    Send<FiSend />
                  </button>
                </Form>
              </FormEmail>
            </FillInformation>
          </ScheduleContainer>
        </ThirdContainer>
        <FourthContainer>
          <h3>© 2020 VP-media. All Rights Reserved</h3>
        </FourthContainer>
      </Container>

      {showModalConfirmed && 
      <ModalConfirmed>
        <div>
          <FiCheckCircle size={40} />
          <h1>Agendado</h1>
        </div>
      </ModalConfirmed>}

      {showModalError && 
      <ModalError>
        <div>
          <FiXCircle size={40} />
          <h1>E-mail incorreto</h1>
        </div>
      </ModalError>}

      {showModalContact && 
      <ContactModal>
        <Contact>
          <FiX 
            onClick={endModalContact}
          />
          <h1>Contato</h1>

          <div>
            <FiLinkedin/>
            <h2>Vitor Paes</h2>
          </div>
          <div>
            <FiMail/>
            <h2>vitorpaes@gmail.com</h2>
          </div>
          <div>
            <FiPhone/>
            <h2>+55 81 912345678</h2>
          </div>
        </Contact>
      </ContactModal>
      }
    </>
  )
}

export default VP;