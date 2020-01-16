import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ResultList from './Components/ResultList/ResultList';
import Input from './Components/Input/Input';
import Pagination from './Components/Pagination/Pagination';
import './App.css';


class App extends Component {
  constructor() {
  super();
  this.state = {
    input: '',
    movies: [],
    totalResults: 0,
    currentPage: 1,
    route: 'mainpage'
  }
    this.apiKey = process.env.REACT_APP_API
  }

nextPage = (pageNumber) => {
  fetch(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${this.state.input}&page=${pageNumber}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    this.setState({ movies: [...data.results], currentPage: pageNumber })
    this.setState({route: 'search'})
  })
  } 
  
  onInputChange = (event) => {
    console.log(event.target.value)
    this.setState({input: event.target.value})
  }

  onButtonSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${this.state.input}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({ movies: [...data.results], totalResults: data.total_results})
      this.setState({route: 'search'})
    })
    } 
    
    onRouteChange =() => {
      this.setState({route: 'search'})
    }

  
  render() {
    const numberPages = Math.floor(this.state.totalResults / 20) 
  return (
    <div className="App">
    <Navigation />
    { this.state.route === 'search'
    ? <div><Input />
    {this.state.totalResults > 20 
    ? <Pagination  pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
    <ResultList  movies={this.state.movies}/>
    <Footer /> </div>
    : <div>
      <Header />
    <Input onInputChange={this.onInputChange} onButtonSearch={this.onButtonSearch} onRouteChange={this.onRouteChange}/>
    <Footer />
    </div>
    }
    </div>
  );
  }
}

export default App;
