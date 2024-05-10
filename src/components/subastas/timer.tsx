import React from "react";
import { injectIntl } from "gatsby-plugin-intl"
import styled from "@emotion/styled"
import colors from "../../utils/colors"
import fonts from "../../utils/fonts"
import moment from 'moment'

const Timer = ({deadline, onBidEnded, intl}) => {
  const [currentTime, setCurrentTime] = React.useState(moment());
  var timeBetween = moment.duration(deadline.diff(currentTime));

  if (deadline.diff(currentTime) <= 0){
    timeBetween = moment.duration(0);
    onBidEnded()
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
      <Content>
        <div className="textTimer">{intl.formatMessage({ id: "subastas.timerTitle" })}</div>
        <div className="timer">
          <div className="containerTime">
            <div className="formatNumbers">{Math.round(timeBetween.asDays()) < 10 ? `0${Math.round(timeBetween.asDays())}` : Math.round(timeBetween.asDays())}</div>
            <div className="formatText">{intl.formatMessage({ id: "subastas.days" })}</div>
          </div>
          <div className="containerTime">
            <div className="formatNumbers">{timeBetween.hours() < 10 ? `0${timeBetween.hours()}` : timeBetween.hours()}</div>
            <div className="formatText">{intl.formatMessage({ id: "subastas.hours" })}</div>
          </div>
          <div className="containerTime">
            <div className="formatNumbers">{timeBetween.minutes() < 10 ? `0${timeBetween.minutes()}` : timeBetween.minutes()}</div>
            <div className="formatText">{intl.formatMessage({ id: "subastas.minutes" })}</div>
          </div>
          <div className="containerTime">
            <div className="formatNumbers">{timeBetween.seconds() < 10 ? `0${timeBetween.seconds()}` : timeBetween.seconds()}</div>
            <div className="formatText">{intl.formatMessage({ id: "subastas.seconds" })}</div>
          </div>
        </div>
      </Content>
  );
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    width: 223px;
    height: 98px;
  
    background: ${colors.bluredBackground};
    backdrop-filter: blur(10px);
    border-radius: 5px;
  
  .timer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px;
    gap: 8px;
  }
  
  .textTimer {
    font-family: ${fonts.secondary};
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: ${colors.black};
    width: 95%;
  }
  
  .containerTime {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    width: 45px;
    height: 56px;
    background: ${colors.goldBackgroud};
    border-radius: 5px;
  }
  
  .formatNumbers {
    width: 26px;
    height: 26px;
  
    font-family: ${fonts.secondary};
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: ${colors.white};
  }
  
  .formatText {
    width: 29px;
    height: 18px;
  
    font-family: ${fonts.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
  
    color: ${colors.white};
  }` 

export default injectIntl(Timer);
