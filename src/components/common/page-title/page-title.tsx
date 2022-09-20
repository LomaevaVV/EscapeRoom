import * as S from './page-title.styled';

type PageTitleProps = {
  children: JSX.Element | string;
}

const PageTitle = ({ children, ...props }: PageTitleProps) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
