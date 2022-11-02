import { techstack } from '../constants/index';

const Carier = () => {
  return (
    <div>
        <h2 className='font-bold text-[35px]'>
          My name is Taras! 
        </h2>
        <p className='mb-[20px]'>
          I graduated from college this year and became interested in web technologies in my last year of study, and it's been more than 6 months
          I am studying in this direction. I used to study c++ on my own, but I didn't decide what to do and gave it up.
          In parallel with the front-end direction, I started studying the .NET platform for server applications.
          A strange tandem with React, but I was interested in the c# language. I am currently studying at a Polish university,
          but I only hope for independent implementation of studies.
        </p>

        <div className='mb-[20px]'>A tech stack that I learned to use during studying in the front-end direction:</div>
          <ul className='flex gap-4'>
            {techstack.map((item) => (
              <li key={item.id}>
                <img className='w-[30px]' src={item.link} />
              </li>
            ))}
          </ul>
    </div>
  )
}

export default Carier