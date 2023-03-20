import './App.css';
import { useState } from 'react';
import axios  from 'axios';

function App() {
  const [quote, setQuote] = useState('')
  const [date, setDate] = useState('')
  const [author, setAuthor] = useState('')

  const getQuote = async () => {
      await axios.get('https://api.quotable.io/random')
      .then(res => {
         console.log(res.data);
         setQuote (res.data.content);
         setDate (res.data.dateAdded);
         setAuthor (res.data.author);
      }).catch(err => {
          console.log(err);
      })
  }

  return (
    <div className="App">
       { quote && <p>{quote}</p> }
       { author && <p>Author : {author}</p> }
       { date && <p>Date : {date}</p> }

       <button onClick={getQuote}>Click To Get Quote</button>
    </div>
  );
}

export default App;
