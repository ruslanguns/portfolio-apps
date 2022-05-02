import { useMediaQuery } from 'react-responsive'

const useResponsiveMQ = () => {
  const isSmall = useMediaQuery({ query: '(max-width: 680px)' })

  return {
    isSmall,
  }
}

export default useResponsiveMQ
