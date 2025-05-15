import "../index.css"
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

function AnotherAI() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [prompt, setPrompt] = useState('')


    const handleSubmit = async () => {
      if (!prompt.trim()) {
        return
      }
      try {
        setLoading(true)
        setResponse('')
        const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'})
        const result = await model.generateContent(prompt)
        const geminiResponse = await result.response
        setResponse(await geminiResponse.text())
        
      } catch (error) {
        console.error("error from response AI " + error)
        setResponse('Error. Check your API key and region')
      }finally{
        setLoading(false)
      }


    }
   

  return (<>
      <div className=' w-380 h-170 flex justify-center items-center flex-col gap-5 '>

          <input
          className='border-1 p-3 w-100'
          type="text"
          placeholder='Write what you want...'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          /> 

          <button onClick={handleSubmit} type='submit' className='text-white bg-pink-800 p-2 w-40 rounded-2xl' >Send</button>
          <div>
           {loading ? 
           <div> Печатает...</div>
          :
          <div className=' bg-sky-300 rounded-md p-3' >{response}</div>}
          </div>

      </div>

  </>)
}

export default AnotherAI