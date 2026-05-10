import { useState, useEffect, useRef } from 'react'

function App() {
  const [elapsed, setElapsed] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState([])
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => setElapsed(prev => prev + 10), 10)
    }
    return () => clearInterval(intervalRef.current)
  }, [isRunning])

  const formatTime = (ms) => {
    const mins = Math.floor(ms / 60000)
    const secs = Math.floor((ms % 60000) / 1000)
    const centis = Math.floor((ms % 1000) / 10)
    return `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}.${String(centis).padStart(2,'0')}`
  }

  const handleReset = () => { setIsRunning(false); setElapsed(0); setLaps([]) }

  return (
    <div className="stopwatch">
      <div className="time">{formatTime(elapsed)}</div>
      <div className="controls">
        {!isRunning
          ? <button className="btn-start" onClick={() => setIsRunning(true)}>Start</button>
          : <button className="btn-stop" onClick={() => setIsRunning(false)}>Stop</button>
        }
        <button className="btn-lap" onClick={() => setLaps(prev => [...prev, elapsed])} disabled={!isRunning}>Lap</button>
        <button className="btn-reset" onClick={handleReset}>Reset</button>
      </div>
      {laps.length > 0 && (
        <div className="laps">
          <h3>Laps</h3>
          <ol>{laps.map((lap, i) => <li key={i}>Lap {i+1}: {formatTime(lap)}</li>)}</ol>
        </div>
      )}
    </div>
  )
}

export default App
