import React from 'react'
import './home.css'

function Home(props) {


  const popular_films = props.popular_films;
  const openModal = (id)=>{
    props.openModal('open') 
    const clickedMovie =  popular_filmss.find(elem => elem.id === id);
    props.getClickedMovie(clickedMovie);
    }

  return (
    <div id = 'most_popular_films'>
      <h1>Top 20 Of The Week!</h1>
        <div className="popular_films">

         {popular_films.map(movie =>(
           
           <div key={movie.id} className='popular_films_item' onClick = {()=>{openModal(movie.id)}}>
             <h3>{movie.title}</h3>
             <img src={imgBaseUrl + movie.poster_path} alt={movie.title} className='most_popular_img'/>
             <br />
             <span className='avg_rating'> Rate: {movie.vote_average} </span>
           </div>
           ))}
        </div>
        
      

    </div>
  )
}

export default Home