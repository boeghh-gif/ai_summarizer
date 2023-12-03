/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() => window.open('')}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Summarize articles with the most advanced text summarization model
        available. Sumz uses OpenAI's GPT-4 to summarize articles in a way that
        makes sense.
      </h2>
    </header>
  )
}

export default Hero