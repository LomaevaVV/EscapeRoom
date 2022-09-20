import Header from '../header/header';
import Footer from '../footer/footer';

type MainLayoutProps = {
  children: JSX.Element;
}

const MainLayout = ({children}: MainLayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
