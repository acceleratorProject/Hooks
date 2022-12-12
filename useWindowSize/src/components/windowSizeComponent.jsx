import useWindowSize from '../hooks/useWindowSize.js'

const WindowSizeComponent = () => {
  const { width, height } = useWindowSize()

  return (
    <div>
      Width: {width} | Height: {height}
    </div>
  )
}

export default WindowSizeComponent
