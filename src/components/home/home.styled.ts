import styled from 'styled-components';
import Button from '../common/button/button';
import Container from '../common/container/container';

const Main = styled(Container)`
  max-width: 1080px;
  margin-top: 120px;
  margin-bottom: 120px;

  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    max-width: initial;
    padding-left: 32px;
    padding-right: 33px;
  }

  &:after {
    content: '';
    z-index: 4;
    position: fixed;
    display: block;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 80px;

    background: linear-gradient(180deg, rgba(19, 18, 18, 0) 0%, #131212 100%);
    opacity: 0.8;
    pointer-events: none;
  }
`;

const NotQuestsBtn = styled(Button).attrs({ type: 'button' })`
  margin-left: 2px;
  max-width: 500px;
`;

export { Main, NotQuestsBtn };
