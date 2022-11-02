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
    <div className="block">
      <div className="mt-2">
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox"
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              checked="" />
            <span className="ml-2">Email me news and special offers</span>
          </label>
        </div>
      </div>
    </div>
  </form>

)
export default CardFrom
