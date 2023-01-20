import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [index, setIndex] = useState(0)
  const { id, image, name, title, quote } = data[index]

  const handlePrev = () => {
    setIndex((index + data.length - 1) % data.length)
  }
  const handleNext = () => {
    setIndex((index + 1) % data.length)
  }
  useEffect(() => {
    const interVal = setInterval(handleNext, 5000)
    return () => clearInterval(interVal)
  }, [index])
  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h2>
            <span>/</span> Reviews
          </h2>
        </div>
        <div className='section-center'>
          <article className={id === index ? 'activeSlide' : 'nextSlide'}>
            <img src={image} alt={title} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>

          <button>
            <FiChevronLeft className='prev' onClick={handlePrev} />
          </button>
          <button>
            <FiChevronRight className='next' onClick={handleNext} />
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
