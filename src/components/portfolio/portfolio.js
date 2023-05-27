import pokedex from '../../gifs/pokedex.gif'
import gitBrowser from '../../gifs/github.gif'
import xyz from '../../gifs/agencia-xyz.gif'
import adviceGenerator from '../../gifs/advice-generator.gif'

import Image from 'next/image'

const cards = [
    {
        image: pokedex,
        title: 'Pokedex',
        linkGHub: 'https://henriquealgauer.github.io/pokedex/',
        linkPage: 'https://github.com/HenriqueAlgauer/pokedex',
        info: 'Projeto de uma pokedex feita com JS vanilla ',
        techs: ['HTML', 'CSS', 'JAVASCRIPT']
    },
    {
        image: gitBrowser,
        title: 'Buscador de usuário GitHub API',
        linkGHub: 'https://henriquealgauer.github.io/pokedex/',
        linkPage: 'https://github.com/HenriqueAlgauer/pokedex',
        info: 'Projeto que consome a API do GitHub e rotorna o informações do usuário, 10 repositórios com a quantidade de forks, stars, views e a linguagem e também os últimos 10 eventos do tipo CreateEvent e PushEvent.',
        techs: ['HTML', 'CSS', 'JAVASCRIPT']
    },
    {
        image: xyz,
        title: 'Landing Page XYZ',
        linkGHub: 'https://henriquealgauer.github.io/pokedex/',
        linkPage: 'https://github.com/HenriqueAlgauer/pokedex',
        info: '',
        techs: ['HTML', 'CSS']
    },
    {
        image: adviceGenerator,
        title: 'Advice Generator API',
        linkGHub: 'https://henriquealgauer.github.io/pokedex/',
        linkPage: 'https://github.com/HenriqueAlgauer/pokedex',
        info: 'Projeto que consome uma API que gera conselhos aleatórios, ela retorna o conselho com o ID referente a ele.',
        techs: ['HTML', 'CSS', 'JAVASCRIPT']
    }
]


function Portfolio() {
    return (
        <div className='bg-zinc-700 px-8 sm:px-36 py-28 border-y border-sky-300'>
            <div className='mb-20'>
                <h2 className='mb-8 text-sky-300 font-bold text-6xl'>Portfólio</h2>
                <p className='text-xl text-sky-300'>Aqui estão alguns projetos que desenvolvi.
                    <br />
                    <br />
                    Você pode observá-los na galeria e ser direcionado para ele.
                    <br />
                    Também tem o repositório no GitHub
                </p>
            </div>
            <div className='lg:grid flex flex-col lg:grid-cols-2 gap-12 justify-between'>
                {cards.map((card, index) => {
                    return (
                        <div key={index} className='font-bold bg-zinc-700 text-sky-300 w-full h-full flex flex-col  border border-sky-300' >
                            <div className="flex items-center justify-center">
                                <Image className='p-4' src={card.image} width={600} height={300} alt='js logo' />
                            </div>
                            <div className='p-4 border-t flex flex-col gap-4 justify-between border-sky-300'>
                                <div className='my-4'>
                                    <h2>{card.title}</h2>
                                    <p className='my-4'>{card.info}</p>
                                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 ">
                                        <a target="_blank" href={card.linkGHub} className='border hover:bg-sky-300 hover:text-zinc-700 mr-4 text-center transition-all delay-100 border-sky-300 p-2'>Repositório GitHub</a>
                                        <a target="_blank" href={card.linkPage} className='border hover:bg-sky-300 hover:text-zinc-700 mr-4 text-center transition-all delay-100 border-sky-300 p-2'>Página do Projeto</a>
                                    </div>
                                </div>
                                <div className='flex gap-4 flex-wrap '>
                                    {card.techs.map((tech, index) => {
                                        return (
                                            <>
                                                <p key={index} className=' border border-sky-300 p-2'>{tech}</p>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export { Portfolio }