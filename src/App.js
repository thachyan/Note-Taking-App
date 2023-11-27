import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() 
{
  const [note, setNote] = useState('');
  const [currentNotes, setCurrentNotes] = useState([]);

  const handleChange = (event) => {
    setNote(event.target.value);
  }

  const handleClick = () => {
    setCurrentNotes([...currentNotes, note]);
    console.log(currentNotes);
  }
  
  return (
    <div className="App">
      <h1>Note Taker</h1>
      <p>A place to put your epic thoughts.</p>
      <div className="formHolder">
        <div className="mb-3">
          <label htmlFor='note' className='form-label'>Note:</label>
          <input 
          type="text"
          className='form-control'
          id="note"
          name="note"
          placeholder='Enter a note here...'
          onChange={handleChange}
          value={note}
          />
          <br></br>
          <button type="button" class="btn btn-outline-primary" onClick={handleClick}>Submit</button>
        </div>
      </div>

      <div className="mb-3">
        {
          currentNotes.length == 0
          ?
          <p>No notes to display</p>
          :
          <table>
            <thead>
              <th>Note</th>
            </thead>
            <tbody>
              {
                currentNotes.map((n) => (
                  <tr>
                    <td>{n}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
      </div>

    </div>
  );
}

export default App;
