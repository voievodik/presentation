import { photo } from '../constants/index'

const Hobbies = () => {
  return (
    <div>
      <p className='mb-[40px]'>
        Since childhood, I have been traveling in the Carpathians, in Europe and throughout Ukraine. <br />
        Enjoying music while riding a bicycle.
        I like to play the guitar for peace.
        I love animals, photographing them and everything around.
        I am raising a little dog friend. I like pithiness.
      </p>
        
      <ul className='flex gap-10 flex-wrap items-center'>
        {photo.map((item) => (
          <li className='shadow'>              
            <img className='w-[150px] rounded-[10px]' src={item.link} />
          </li>
        ))}
      </ul> 
    </div> 
  )
}

export default Hobbies