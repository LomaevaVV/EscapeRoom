import MainLayout from '../common/main-layout/main-layout';
import PageTitle from '../common/page-title/page-title';
import { Heading } from '../common/page-heading/page-heading';
import PageSubtext from '../common/page-subtext/page-subtext';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import { FetchStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getQuestsFetchStatus } from '../../store/data-quests/selectors';
import Loader from '../common/loader/loader';
import { fetchQuestsAction } from '../../store/api-actions';
import { store } from '../../store';


const HomePage = () => {
  const questsFetchStatus = useAppSelector(getQuestsFetchStatus);

  if (
    questsFetchStatus === FetchStatus.Idle ||
    questsFetchStatus === FetchStatus.Loading
  ) {
    return <Loader />;
  }

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <Heading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </Heading>
        {questsFetchStatus === FetchStatus.Rejected
          ? <S.NotQuestsBtn onClick={() => {store.dispatch(fetchQuestsAction());}}>
              Попробовать загрузить квесты еще раз
            </S.NotQuestsBtn>
          : <QuestsCatalog />
        }
      </S.Main>
    </MainLayout>
  )
};

export default HomePage;
