import React from 'react';
import styled from 'styled-components';

const AboutText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
  width: 100%;
  margin-left: 20vw;
`;

const Abouth = styled.h4`
  font-size: 30px;
  height: 20vh;

  margin-top: -30vh;
  width: 105vh;
`;

const AboutPara = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 40vh;
  /* margin-top: 25vh; */
  margin-right: 10vw;
`;

const About: React.FunctionComponent = () => {
  return (
    <AboutText>
      <br />
      <Abouth>Crimial Law.</Abouth>

      <div>
        <AboutPara>
          <AboutPara>
            Learn everything about criminal law. Whether you're studying to be a
            criminal lawyer or just need to ace the exam, these study guides
            have got you covered. Top Criminal Law Flashcards Ranked by Quality
          </AboutPara>
        </AboutPara>
      </div>
    </AboutText>
  );
};

export default About;
