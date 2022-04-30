import { useRouter } from 'next/router'

const Heading = ({ icon: Icon, title }) => {
  const router = useRouter()

  return (
    <div className="relative flex flex-row items-center leading-[2.5rem]  sm:h-14 ">
      <Icon
        onClick={() => router.push('/')}
        className="left-0 w-9 h-9 sm:absolute sm:inline sm:-left-24 sm:w-14 sm:h-14 hover:cursor-pointer"
      />
      <h1 className="text-2xl font-normal text-left sm:text-4xl">{title}</h1>
    </div>
  )
}
export default Heading
