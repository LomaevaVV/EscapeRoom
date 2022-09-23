import { useAppSelector, useAppDispatch } from '../../../../hooks/index';
import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { selectCurrentQuests } from '../../../../store/data-quests/selectors';
import { AppRoute } from '../../../../const';
import { generatePath } from 'react-router-dom';
import { Genres } from '../../../../const';
import { changeGenre } from '../../../../store/app-process/app-process';
import { getGenre } from '../../../../store/app-process/selectors';

export default function QuestsCatalog(): JSX.Element {
  const dispatch = useAppDispatch();

  const currentGenre = useAppSelector(getGenre);
  const currentQuests = useAppSelector(selectCurrentQuests);

  const getGenreIcon = (genre: string) => {
    switch(genre) {
      case 'all-quests':
        return <IconAllQuests />;
      case 'adventures':
          return <IconAdventures />;
      case 'horror':
        return <IconHorrors />;
      case 'mystic':
        return <IconMystic />;
      case 'detective':
        return <IconDetective />;
      case 'sci-fi':
        return <IconScifi />;
      default:
        throw new Error(`Genre ${genre} does not exist.`);
    }
  }

  return (
    <>
      <S.Tabs>
      {Genres.map((genre) => (
          <S.TabItem key={genre.genreEng}>
            <S.TabBtn onClick={() => dispatch(changeGenre(genre.genreEng))} isActive={genre.genreEng === currentGenre} >
              {getGenreIcon(genre.genreEng)}
              <S.TabTitle>{genre.genreRus}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        ))}
      </S.Tabs>

      <S.QuestsList>
        {currentQuests.map((quest) =>
          (
            <S.QuestItem key={quest.title}>
              <S.QuestItemLink to={generatePath(AppRoute.Quest, {id: String(quest.id)})}>
                <S.Quest>
                  <S.QuestImage
                    src={quest.previewImg}
                    width="344"
                    height="232"
                    alt={`квест ${quest.title}`}
                  />

                  <S.QuestContent>
                    <S.QuestTitle>{quest.title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {`${quest.peopleCount[0]}-${quest.peopleCount[1]} чел`}
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {quest.level}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          ))}
      </S.QuestsList>
    </>
  )
};
