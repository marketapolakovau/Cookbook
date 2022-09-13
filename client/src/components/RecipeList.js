import React from 'react'
import RecipeCard from './RecipeCard'
import Row from 'react-bootstrap/Row';


function RecipeList({recipes}) {
  return (
    <Row style={{margin:"1rem", backgroundColor:"#f8edeb"}} xs={1} md={3} className="g-4">
    {recipes.map((recipe)=>{
        return<RecipeCard key={recipe.id} recipe={recipe} />
         
    })}
    </Row>
  )
}

export default RecipeList