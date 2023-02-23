import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  return (
    <>
      <div className='center-content'>
        <img src='src/assets/logo.png' alt='logo nefrocheck' className='logo' />
        <Link to={'questions'}>
          <div className='app-button center-content'>Ir para a aplicação</div>
        </Link>
        <div className='text-section'>
          <p>
            Idealizado e pensado por{' '}
            <a
              href='https://www.linkedin.com/in/karina-litchteneker-a9b0a187/'
              target='_blank'
            >
              Karina Litcheneker
            </a>
            , com base em seu trabalho no{' '}
            <a
              href='http://www.utfpr.edu.br/cursos/coordenacoes/stricto-sensu/ppgbio-td/ppgbio-td'
              target='_blank'
            >
              PPGBio
            </a>
            , da UTFPR - Toledo.
          </p>
        </div>
        <div className='text-section center-content'>
          <p>
            Aplicação desenvolvida por Guilherme de Araujo Gabriel, tecnologias
            utilizadas :
          </p>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>CSS</li>
          </ul>
          <a href='https://github.com/guilhermag/ppgbio-nefro' target='_blank'>
            Repositório do projeto.
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
