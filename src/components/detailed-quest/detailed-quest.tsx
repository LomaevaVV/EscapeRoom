// import { useState } from 'react';
import MainLayout from '../common/main-layout/main-layout';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchQuestAction } from '../../store/api-actions';
import { getQuest, getQuestFetchStatus } from '../../store/data-quest/selectors';
import { useEffect, useRef, useState } from 'react';
import { FetchStatus, GenreList } from '../../const';
import Loader from '../common/loader/loader';
import NotFoundPage from '../not-found/not-found-page';
import { BookingModal } from './components/components';

export default function DetailedQuest(): JSX.Element {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onModalCloseBtnClick = () => {
    setIsBookingModalOpened(false);
  };

  const QuestParams: {id: string} = useParams();
  const id = QuestParams.id;

  const dispatch = useAppDispatch();
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!isRenderedRef.current) {
      dispatch(fetchQuestAction(Number(id)));
      isRenderedRef.current = true;
    }
  }, [dispatch, id]);

  const currentQuest = useAppSelector(getQuest);
  const questFetchStatus = useAppSelector(getQuestFetchStatus);

  if (
    questFetchStatus === FetchStatus.Idle ||
    questFetchStatus === FetchStatus.Loading
  ) {
    return <Loader />;
  }

  if (!currentQuest || questFetchStatus === FetchStatus.Rejected) {
    return <NotFoundPage />;

  }

  const genre = GenreList.filter((genre) => genre.genreEng === currentQuest.type)

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`http://localhost:3000/${currentQuest.coverImg}`}
          alt={`квест ${currentQuest?.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{currentQuest?.title}</S.PageTitle>
            <S.PageSubtitle>{genre[0].genreRus}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{currentQuest?.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>
                  {`${currentQuest?.peopleCount[0]}-${currentQuest?.peopleCount[1]} чел`}
                </S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>средний</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              В комнате с приглушённым светом несколько человек, незнакомых друг
              с другом, приходят в себя. Никто не помнит, что произошло прошлым
              вечером. Руки и ноги связаным, но одному из вас получилось
              освободиться. На стене висит пугающий таймер и запущен отстёт
              60&nbsp;минут. Сможете ли вы разобраться в стрессовой ситуации,
              помочь другим, разобраться что произошло и выбраться из комнаты?
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal id={id} onModalCloseBtnClick={onModalCloseBtnClick}/>}
      </S.Main>
    </MainLayout>
  );
};
