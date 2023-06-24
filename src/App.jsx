import { useState } from 'react'
import { checkWilayah } from './helpers.js'
import { FaCity, FaTreeCity } from "react-icons/fa6";

const App = () => {
  const [firstLetter, setFirstLetter] = useState('')
  const [secondLetter, setSecondLetter] = useState(0)
  const [thirdLetter, setThirdLetter] = useState('')
  const [result, setResult] = useState({
    wilayah: null
  })
  
  const checkPlat = () => {
    let wilayah = checkWilayah(firstLetter)
    
    if(wilayah) {
      setResult({
        ...result,
        wilayah: wilayah.name
      })
    } else {
      setResult({
        ...result,
        wilayah: null
      })
    }
  }
  
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center font-poppins">
        <div className="w-1/3 min-h-48 drop-shadow-xl bg-gray-100 rounded-xl p-7">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">Cek Plat Nomor</h2>
            <p className="text-sm font-light">Cek informasi mengenai plat nomor anda</p>
          </div>
          <div className="flex justify-between mb-5">
            <input type="text"
              className={`
                px-4 py-3
                w-1/5 text-gray-500 caret-gray-500 drop-shadow-lg
                focus:outline-0 focus:ring-1 focus:ring-gray-300
              `}
               placeholder="AB" value={firstLetter}
               onChange={(e) => setFirstLetter(e.target.value)}
            />
            <input type="number"
              className={`
                px-4 py-3
                w-2/5 text-gray-500 caret-gray-500 drop-shadow-lg
                focus:outline-0 focus:ring-1 focus:ring-gray-300
              `}
              placeholder="1234" value={secondLetter}
              onChange={(e) => setSecondLetter(e.target.value)}
            />
            <input type="text"
              className={`
                px-4 py-3
                w-1/5 text-gray-500 caret-gray-500 drop-shadow-lg
                focus:outline-0 focus:ring-1 focus:ring-gray-300
              `}
              placeholder="XP" value={thirdLetter}
              onChange={(e) => setThirdLetter(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <button className="
              p-3 bg-blue-400 text-white w-100
              hover:rounded-xl hover:bg-blue-500
              transition-all ease-in-out duration-300
            "
            onClick={() => checkPlat()}>
              Submit
            </button>
          </div>
        </div>
        
        <div className="w-1/3 p-7">
          <h3 className="text-lg font-semibold mb-5">Result</h3>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <FaCity className="w-4 h-4"/>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Wilayah</span>
                <span className="text-sm font-light">{(result.wilayah) ? result.wilayah : '-'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App