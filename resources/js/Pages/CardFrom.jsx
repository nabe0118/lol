import React from 'react'

const CardFrom = () => (
  <form className="m-16 grid grid-cols-1 gap-6">
    <label className="block">
      <span className="text-gray-700">サモナーネーム</span>
      <input type="text"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="" />
    </label>
    <label className="block">
      <span className="text-gray-700">ロール</span>
      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option>FILL</option>
        <option>TOP</option>
        <option>JG</option>
        <option>MID</option>
        <option>ADC</option>
        <option>SUP</option>
      </select>
    </label>
    <label className="block">
      <span className="text-gray-700">discord ユーザー名</span>
      <input type="text"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="" />
    </label>
    <label className="block">
      <span className="text-gray-700">募集内容</span>
      <textarea
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        rows="3" />
    </label>
  </form>

)
export default CardFrom
