import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FcLikePlaceholder } from 'react-icons/fc'

const LikeIcon = () => {
  const [isLike, setLike] = useState(true)

  console.log(isLike)
  return (
    <>
      { isLike ?
        <div className="mt-2">
          <div className="flex">
            <div className="pt-0.5" onClick={ () => setLike(!isLike) }>
              <FcLikePlaceholder />
            </div>
            <p className="ml-2">21</p>
          </div>
        </div>
        :
        <div className="mt-2" >
          <AiOutlineHeart />
        </div>
      }
    </>
  )
}
export default LikeIcon
