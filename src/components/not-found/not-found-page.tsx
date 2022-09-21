import {Link} from 'react-router-dom';

export default function NotFoundPage(): JSX.Element {
  return (

    <main className="page__main page__main--notfound">
        <title>Page not found</title>

        <div className="page__not-found-container container">
          <section className='{styles.notfound}'>
            <h1 className='{styles.title}'>Page not found</h1>
            <h2 className='{styles.title}'>404</h2>
            <span className='{styles.description}'>{'The link you followed may be broken, or the page have been removed or it\'s temporarily unavailable.'}</span>
            <h3>
              <Link className='{styles.button}' to="/#">Return to the main page</Link>
            </h3>
          </section>
        </div>
      </main>

  );
}
