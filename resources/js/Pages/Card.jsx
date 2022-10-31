import React from 'react'
import LikeIcon from './LikeIcon'

export default function Card() {
  return (
    <>
      <div className="mt-2 flex">
        <img
          className="mb-3 mr-2 h-24 w-24 rounded-full shadow-lg"
          src="/image/ChampSquares/AatroxSquare.png"
          alt="AatroxSquare"
        />
        <div className="relative block w-1/2 rounded-lg border border-gray-200 bg-white p-6 shadow-md before:absolute before:top-1/4 before:-left-[15px] before:border-8 before:border-solid before:border-transparent before:border-r-gray-800 before:content-[''] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-200 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            タイトルが入ります
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            紹介文が入ります
          </p>
          <LikeIcon />
        </div>
      </div>
      <div className="mt-2 flex">
        <div className="mb-3 mr-2 h-24 w-24" />
        <div className="relative block w-1/2 rounded-lg border border-gray-200 bg-white p-6 shadow-md before:absolute before:top-1/4 before:-right-[15px] before:border-8 before:border-solid before:border-transparent before:border-l-gray-800 before:content-[''] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-200 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            タイトルが入ります
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            紹介文が入ります
          </p>
          <LikeIcon />
        </div>
        <img
          className="mb-3 ml-2 h-24 w-24 rounded-full shadow-lg"
          src="/image/ChampSquares/AhriSquare.png"
          alt="AhriSquare"
        />
      </div>
    </>
  )
}
