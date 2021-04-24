import { Button } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
//   useEffect( () => { 
// const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9b8bbc5aac52486580f076e08a2d2692';
// fetch(url)
// .then (res => res.json())
// .then(data => setArticles(data.articles))
//   },[])
  useEffect (() =>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9b8bbc5aac52486580f076e08a2d2692';
    axios(url)
    .then(data => setArticles(data.data.articles))
  },[])
  return (
    <div>
     <h2>Headlines:{articles.length}</h2>
     {
       articles.map(article => <News article = {article}></News>)
     }
    </div>
  );
}

export default App;
