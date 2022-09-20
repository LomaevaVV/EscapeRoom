import * as S from './container.styled';

type ContainerProps = {
  children: Array<JSX.Element>;
}

const Container = ({ children, ...props }: ContainerProps) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
