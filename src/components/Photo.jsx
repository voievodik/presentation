import { myPhoto } from '../assets/index'

const Photo = () => {
  return (
    <div className='relative mt-[150px]'>
      <img className='absolute left-[0px] top-[0px] z-[10] w-[350px] rounded-[20px]' src={myPhoto} />
      <div className='absolute z-[5] w-[350px] h-[305px] bg-picture rounded-[20px] rotate-[7deg] picture'></div>
    </div>
  )
}

export default Photo