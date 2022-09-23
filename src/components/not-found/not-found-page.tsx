import MainLayout from '../common/main-layout/main-layout';
import PageTitle from '../common/page-title/page-title';
import PageSubtext from '../common/page-subtext/page-subtext';
import * as S from './not-found-page.styled';
import { AppRoute } from '../../const';
import { redirectToRoute } from '../../store/action';
import { useAppDispatch } from '../../hooks';

export default function NotFoundPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const onBtnClick = () => {
    dispatch(redirectToRoute(AppRoute.Home));
  }

  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>404</PageTitle>
          <PageSubtext>Страница не найдена</PageSubtext>
        </S.PageHeading>

        <S.NotFoundPageBtn onClick={onBtnClick}>
          Вернуться на главную страницу
        </S.NotFoundPageBtn>

        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
}
