import React, { useState } from 'react'
import styled from 'styled-components'

// initial our images array is undefine after we get images of array that's we define images as empty array in props
const ProductImages = ( {images = [{url:''}]} ) => {
  const [main, setMain] = useState(images[0]);
  
  return(
    <Wrapper>
      <img src={main.url} alt='main' className='main' />
      <div className="gallery">
        {
          images.map((image, index) => {
            return(
              <img key={index} src={image.url} alt={image.filename} 
                onClick={ () => setMain(images[index])}
                className={`${image.url === main.url ? 'active' : null}`} 
              />
            )
          })
        }
      </div>
    </Wrapper>
  )

}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 2px 3px 3px var(--clr-primary-1);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
