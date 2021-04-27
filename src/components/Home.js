import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import QR from '../assets/qr/qr-code.png';

export default function Home() {
  const [progress, setProgress] = useState(0);

  const randomStep = Math.floor(Math.random() * 6) + 1;
  const randomInterval = Math.floor(Math.random() * 1000);

  useEffect(() => {
    progress >= 0 &&
      progress < 100 &&
      setTimeout(() => setProgress(progress + randomStep), randomInterval);
    progress > 100 && setProgress(100);
  }, [randomInterval, randomStep, progress]);

  progress === 100 &&
    setTimeout(function () {
      window.location.href = 'https://github.com/peter-stuhlmann/ScreenOfDeath';
    }, 3000);

  return (
    <Container onContextMenu={(e) => e.preventDefault()}>
      <Content>
        <Smiley>:(</Smiley>
        <Text>
          Your PC ran into a problem and needs to restart. We're just collecting
          some error info, and then we'll restart for you.
        </Text>
        <Text>{progress}% complete</Text>
        <Footer>
          <QRCode src={QR} alt="QR" />
          <div>
            <SmallText>
              For more information about this issue and possible fixes, visit
              https://www.windows.com/stopcode
            </SmallText>
            <div>
              <VerySmallText>
                If you call a support person, give them this info:
              </VerySmallText>
              <VerySmallText>Stop code: CRITICAL_PROCESS_DIED</VerySmallText>
            </div>
          </div>
        </Footer>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 20px;
  box-sizing: border-box;
`;

const Smiley = styled.h1`
  font-size: 130px;
  max-width: 900px;
  display: block;
  margin: 0;
`;

const Text = styled.p`
  font-size: 35px;
  max-width: 900px;
`;

const SmallText = styled.p`
  font-size: 15px;
  max-width: 900px;
  margin: 0;
`;

const VerySmallText = styled.p`
  font-size: 12px;
  max-width: 900px;
  margin: 0;
`;

const QRCode = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

const Footer = styled.footer`
  display: flex;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
      p {
        &:first-child {
          margin-bottom: 5px;
        }
      }
    }
  }
`;
