import React, { useMemo, useState, useCallback } from 'react';

import Slider, { CustomArrowProps, Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import './styles.css';

interface CarouselProps {
  handleTimePick(time: string): void;
}

const PreviousArrow = (props: CustomArrowProps) => {
  const { className, onClick, style } = props;

  return(
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    />
  )
}

const NextArrow = (props: CustomArrowProps) => {
  const { className, onClick, style } = props;

  return(
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    />
  )
}

const timeAvaiable = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30'
]

const Carousel: React.FC<CarouselProps> = ({ handleTimePick }) => {
  const settings = useMemo(() => {
    const creatingSettings: Settings = {
      infinite: false,
      speed: 150,
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow/>,
      prevArrow: <PreviousArrow/>,
      vertical: true,
      verticalSwiping: true,
      className: 'slider',
      afterChange: (current) => {
        handleTimePick(timeAvaiable[current])
      }
    }

    return creatingSettings;
  }, [handleTimePick])

  return (
    <Slider 
      {...settings}
    >
      {timeAvaiable.map(time => (
        <div className='time-container' key={time}>
          <div>
            <h1>{time}</h1>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default Carousel;