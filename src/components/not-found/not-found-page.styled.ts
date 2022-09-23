import styled from 'styled-components';
import { Heading } from '../common/page-heading/page-heading';
import contactsBg from '../../assets/img/contacts-bg.jpg';
import Button from '../common/button/button';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;

  background-image: url(${contactsBg});
  background-repeat: no-repeat;
  background-position: top left;
  background-color: ${({ theme }) => theme.color.nero};
  background-size: cover;
`;

const ContentWrapper = styled.div`
  max-width: 1080px;
  flex-shrink: 0;
  width: 100%;
  margin: 0 auto;
  margin-top: 136px;
  margin-bottom: 40px;
`;

const PageHeading = styled(Heading)`
  margin-bottom: 46px;
  padding-bottom: 29px;
  padding-left: 6px;

  border-bottom: 0.5px solid rgba(230, 230, 230, 0.25);
`;

const NotFoundPageBtn = styled(Button).attrs({ type: 'button' })`
  margin-left: 2px;
`;

export {
  Main,
  ContentWrapper,
  PageHeading,
  NotFoundPageBtn
};
