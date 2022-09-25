document.addEventListener('DOMContentLoaded', load)

function load(){
  'use strict'
  const movieList = document.querySelector('.movie_list')
  const movieContent = document.querySelector('.movie_content')

  function getData(){
    try{
      const get = fetch('json/data.json')
      get
        .then((response) => response.json())
        .then((data) => {
          renderList(data, 1)
          renderContent(data, 1)
        })
        .catch(err => {
          console.log(err)
        })
    }
    catch(err){
      console.log(err)
    }
  }
  getData()
}