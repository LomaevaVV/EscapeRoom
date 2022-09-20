import MainLayout from '../common/main-layout/main-layout';
import PageTitle from '../common/page-title/page-title';
import { Heading } from '../common/page-heading/page-heading';
import PageSubtext from '../common/page-subtext/page-subtext';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

const HomePage = () => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <Heading>
        <PageTitle>Выберите тематику</PageTitle>
        <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
      </Heading>
      <QuestsCatalog />
    </S.Main>
  </MainLayout>
);

export default HomePage;
