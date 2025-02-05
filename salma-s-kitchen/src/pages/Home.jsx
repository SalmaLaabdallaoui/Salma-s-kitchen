import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h3 id="first-sentence">Top Recipes</h3>

      <div className="Home">

        <div className="images">
          <div className="recipe-item">
            <Link to="/recipes/Cinnamonrolls">
              <img src="/images/cinnamonrolls.jpg" alt="Cinnamon Rolls" />
            </Link>
            <p className="recipe-name">Cinnamon Rolls</p>
          </div>

          <div className="recipe-item">
            <Link to="/recipes/Shrimpsalad">
              <img src="/images/shrimpsalad.jpg" alt="Shrimp Salad" />
            </Link>
            <p className="recipe-name">Shrimp Salad</p>
          </div>

          <div className="recipe-item">
            <Link to="/recipes/Paella">
              <img src="/images/paella.jpg" alt="Paella" />
            </Link>
            <p className="recipe-name">Spanish Paella</p>
          </div>

          <div className="recipe-item">
            <Link to="/recipes/Chocolatecake">
              <img src="/images/choccake.jpg" alt="Chocolate Cake" />
            </Link>
            <p className="recipe-name">Chocolate Cake</p>
          </div>
        </div>
        
        

        
        <h3 id="first-sentence">Healthy Breakfast</h3>

        <div className="Home">

          <div className="images">
            <div className="recipe-item">
              <Link to="/recipes/Pancake">
                <img src="/images/pancake.jpg" alt="pancakes" />
              </Link>
              <p className="recipe-name">Fiber-rich pancakes</p>
            </div>

            <div className="recipe-item">
              <Link to="/recipes/Yoghurtbowl">
                <img src="/images/yoghurtbowl.jpg" alt="Yoghurt Bowl" />
              </Link>
              <p className="recipe-name">Yoghurt Bowl</p>
            </div>

            <div className="recipe-item">
              <Link to="/recipes/Parfait">
                <img src="/images/parfait.jpg" alt="Parfait" />
              </Link>
              <p className="recipe-name">Raspberry Parfait</p>
            </div>

          </div> 
          

        </div>
      </div>
    </div>
  );
}

export default Home;

