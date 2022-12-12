import { useRef } from 'react'
import image from '../../public/brett-li-OKnHPvpwGQM-unsplash.jpg'
import useOnScreen from '../hooks/useOnScreen'

const OnScreenComponent = () => {
  const section2Ref = useRef()
  const section2Visible = useOnScreen(section2Ref, '100px')

  return (
    <>
      <section>
        <h2>Title 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
          incidunt, nam id itaque error dicta? Numquam earum iusto optio
        </p>
        <img src={image} alt="image1" />
      </section>

      <section ref={section2Ref}>
        {section2Visible && (
          <div>
            <h2>Title 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              incidunt, nam id itaque error dicta? Numquam earum iusto optio
            </p>
            <img src={image} alt="image1" />
          </div>
        )}
      </section>
    </>
  )
}

export default OnScreenComponent
