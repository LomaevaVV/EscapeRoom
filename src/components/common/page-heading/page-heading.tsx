import * as S from './page-heading.styled';

type PageHeadingProps = {
  children: Array<JSX.Element>;
}

const PageHeading = ({ children, ...props }: PageHeadingProps) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export { PageHeading as Heading };
