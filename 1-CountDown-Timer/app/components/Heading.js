import { useRouter } from 'next/router'
import Title from './Title'

const Heading = ({ icon: Icon, title, ...props }) => {
  const router = useRouter()

  return (
    <div
      className="relative mb-6 flex flex-row items-center leading-[2.5rem] sm:h-14"
      {...props}
    >
      {Icon && (
        <Icon
          onClick={() => router.push('/')}
          className="left-0 w-12 h-12 mr-3 sm:absolute sm:inline sm:-left-24 sm:w-14 sm:h-14 hover:cursor-pointer"
        />
      )}
      <Title title={title} />
    </div>
  )
}
export default Heading
