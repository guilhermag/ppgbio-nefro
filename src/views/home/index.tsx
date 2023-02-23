import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>NefroCheck</h1>
      <div className='content'>
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
        <div className='text-section'>
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

      <Link to={'questions'}>Perguntas</Link>
    </>
  );
}

export default Home;
