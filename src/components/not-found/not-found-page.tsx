import MainLayout from '../common/main-layout/main-layout';
import PageTitle from '../common/page-title/page-title';
import PageSubtext from '../common/page-subtext/page-subtext';
import * as S from './not-found-page.styled';
import { AppRoute } from '../../const';

export default function NotFoundPage(): JSX.Element {
  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>404</PageTitle>
          <PageSubtext>Страница не найдена</PageSubtext>
        </S.PageHeading>

        <S.NotFoundPageBtn>
          <S.Link to={AppRoute.Home} >
            Вернуться на главную страницу
          </S.Link>
        </S.NotFoundPageBtn>

        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
}
