import { Carier, Hobbies, Photo } from './index';
import  React, {useState} from 'react';
import styles from '../style';

const Main = () => {
  const [active, setActive] = useState(true);
  return (
    <div className={`${styles.flexStart} h-[100vh] bg-primary text-white`}>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>

        <Photo />

        <div className='ml-[400px]'>
          <div className='flex justify-center gap-10 mb-[20px]'>
            <button className={`${!active ? 'bg-transparent' : 'bg-picture'} py-[10px] px-[20px] rounded-[20px] `} onClick={() => setActive(true)}>
              Carier
            </button>
            <button className={`${active ? 'bg-transparent' : 'bg-picture'} py-[10px] px-[20px] rounded-[20px] `} onClick={() => setActive(false)}>
              Hobbies
            </button>
          </div>
      
          <div className={`${active ? 'block' : 'hidden'}`}>
            <Carier /> 
          </div>

          <div className={`${!active ? 'flex' : 'hidden'}`}>
            <Hobbies />
          </div>

        </div>
    </div> 
  </div>
  )
}

export default Main