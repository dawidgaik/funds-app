import React from 'react';
import { Container } from 'assets/styles/GlobalStyle';
import { Heading, Paragraph, Wrapper } from './HeroBanner.styles';
import { ReactComponent as HeroBannerLogo } from 'assets/images/hero-banner-logo.svg';

const HeroBanner = () => {
  return (
    <Wrapper>
      <Container>
        <HeroBannerLogo />
        <Heading>Our funds</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          elementum ultricies nisi, fermentum bibendum lacus fermentum
          venenatis.
        </Paragraph>
      </Container>
    </Wrapper>
  );
};

export default HeroBanner;
