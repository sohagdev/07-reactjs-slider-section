import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h2>
            <span>/</span> Reviews
          </h2>
        </div>
        <div className='section-center'>
          {people.map((person, personIndex) => {
            return <article className='nextSlide' key={personIndex}></article>
          })}
        </div>
      </section>
    </main>
  )
}

export default App
