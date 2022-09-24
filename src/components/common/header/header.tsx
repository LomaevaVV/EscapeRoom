import { Link, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../assets/img/logo.svg';
import { AppRoute } from '../../../const';
import * as S from './header.styled';

const Header = () => {
  const { path } = useRouteMatch()

  const handleLinkClick = () => {
    toast.warn('Страницы "Новичкам", "Отзывы", "Акции" находятся в разработке', {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo to={AppRoute.Home}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>


        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link
                $isActiveLink={path === AppRoute.Home}
                to={AppRoute.Home}
              >
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                onClick={handleLinkClick}
                to="#"
              >
                Новичкам
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                onClick={handleLinkClick}
                to="#"
              >
                Отзывы
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                onClick={handleLinkClick}
                to="#"
              >
                Акции
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={path === AppRoute.Contacts}
                to={AppRoute.Contacts}
              >
                Контакты
              </S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  )
};

export default Header;
