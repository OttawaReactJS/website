import React from 'react';
import styled from 'styled-components';
import Concert from '../../assets/concert.jpg';
import KentImage from '../../assets/kent.png';
import colors from '../utils/colors';
const TitleBox = styled.div`
  text-align: center;
  padding: 20px;
  color: white;
  background: rgba(36, 39, 46, 0.9);
  border-radius: 20px;
  border: 3px solid ${colors.blue};
  margin-left: 5px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const AnnoucementBox = styled.div`
  position: relative;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: center
  
  width: 100vw%;
  
  margin-top: 20px;
  padding: 20px;
`;

const PictureBox = styled.div`
  background: #4c3a4c;

  border-radius: 20px;
  border: 3px solid ${colors.blue};
  margin-right: 15px;
  margin-top: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const ImageBox = styled.img`
  display: block;
  max-width: 300px;
  @media (max-width: 400px) {
    max-width: 250px;
  }
  margin: 10px;
`;

const BlurbBox = styled.div`
  background: ${colors.purple};
  padding: 20px;
  border-radius: 20px;
  border: 3px solid ${colors.blue};
  margin-left: 5px;
  margin-top: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  max-width: 650px;
  min-width: 200px;
`;

const Link = props => {
  const { children } = props;
  return <a {...props}>{children}</a>;
};

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`;

const Special = styled.div`
  display: block;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 30px;

  background: url(${Concert}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export default function Kent() {
  var divStyle = {
    marginBottom: '20px',
  };

  return (
    <Special>
      <TitleBox>
        <h1 style={divStyle}>Breaking News !!!</h1>
      </TitleBox>
      <AnnoucementBox>
        <PictureBox>
          <ImageBox src={KentImage} alt="Kent C. Dodds" />
        </PictureBox>
        <BlurbBox>
          <h2 style={{ marginBottom: '20px' }}>Special Guest</h2>

          <p class="css-yw8fqx e11rucy10">
            <span>
              <strong>Kent C. Dodds</strong> is a world renowned speaker,
              teacher, and trainer and he's actively involved in the{' '}
              <StyledLink href="https://github.com/kentcdodds">
                open source community
              </StyledLink>{' '}
              as a maintainer and contributor of hundreds of popular npm
              packages. Kent is the creator of{' '}
              <StyledLink href="https://testingjavascript.com/">
                TestingJavaScript.com
              </StyledLink>{' '}
              and he's an instructor on{' '}
              <StyledLink href="https://egghead.io/instructors/kentcdodds">
                egghead.io
              </StyledLink>{' '}
              and{' '}
              <StyledLink href="https://frontendmasters.com/">
                Frontend Masters
              </StyledLink>
              . He's also a{' '}
              <StyledLink href="https://developers.google.com/experts/people/kent-c-dodds">
                Google Developer Expert
              </StyledLink>
              . Kent is happily married and the father of four kids. He likes
              his family, code, JavaScript, and React.
            </span>
          </p>
        </BlurbBox>
      </AnnoucementBox>
    </Special>
  );
}
