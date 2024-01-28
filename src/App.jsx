function App() {
  return (
    <>
      <main className="bg-roseWhite  w-full flex flex-col md:justify-center md:items-center">
        {/* container wrapper */}
        <div className="bg-white w-full md:w-1/2 mx-auto md:my-3.5 md:p-6 md:rounded-xl">
          {/* image container */}
          <div className="w-full md:p-6 md:min-h-64">
            <img
              src="./assets/images/image-omelette.jpeg"
              alt=""
              className="object-cover w-full h-full md:rounded-xl"
            />
          </div>

          {/* Recipe section container */}
          <div className="flex flex-col w-full px-6 my-10 md:my-0 gap-6">
            {/* Recipe section */}
            <h1 className="text-4xl font-youngSerif font-bold">Simple Omelette Recipe</h1>
            <p className="text-16">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

            {/* preparation time section */}
            <div className="w-full bg-roseWhite p-5 rounded-xl flex flex-col gap-3">
              <h3 className="title__secondary">Preparation time</h3>
              <ul className="list-disc pl-4 flex flex-col gap-2">
                <li><span className="font-bold ml-5">Total</span>: Approximately 10 minutes</li>
                <li><span className="font-bold ml-5">Preparation</span>: 5 minutes</li>
                <li><span className="font-bold ml-5">Cooking</span>: 5 minutes</li>
              </ul>
            </div>

            {/* ingredients section */}
            <h2 className="title__secondary">Ingredients</h2>
            <ul className="list-disc pl-4 flex flex-col gap-2">
              <li className="ps-5">2-3 large eggs</li>
              <li className="ps-5">  Salt, to taste</li>
              <li className="ps-5">  Pepper, to taste</li>
              <li className="ps-5">    Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>

            <hr />

            {/* INstructions  section */}
            <h2 className="title__secondary">Instructions</h2>
            <ol className="list-decimal pl-4 flex flex-col gap-2">
              <li className="ps-5"><span className="font-bold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                You can add a tablespoon of water or milk for a fluffier texture.</li>
              <li className="ps-5"><span className="font-bold">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>
              <li className="ps-5"><span className="font-bold">  Cook the omelette: </span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                the eggs evenly coat the surface.</li>
              <li className="ps-5"><span className="font-bold">  Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the
                middle, sprinkle your chosen fillings over one half of the omelette.</li>
              <li className="ps-5"><span className="font-bold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the
                fillings. Let it cook for another minute, then slide it onto a plate.</li>
              <li className="ps-5"><span className="font-bold">Enjoy:</span>   Serve hot, with additional salt and pepper if needed.</li>

            </ol>

            <hr />

            {/* Nutrition Section */}
            <h2 className="title__secondary">Nutrition</h2>
            <p>The table below shows nutritional values per serving without the additional fillings.</p>


            {/* Nutrition table */}
            <div className="grid grid-cols-2  mt-4">
              <div className=" p-5 border-b-2">Calories</div>
              <div className="font-bold p-5 border-b-2 text-darkRaspberry">277kcal</div>
            
              <div className=" p-5 border-b-2">Carbs</div>
              <div className="font-bold p-5 border-b-2 text-darkRaspberry">0g</div>

              <div className=" p-5 border-b-2">Protein</div>
              <div className="font-bold p-5 border-b-2 text-darkRaspberry">20g</div>

              <div className=" p-5 border-b-2">Fat</div>
              <div className="font-bold p-5 border-b-2 text-darkRaspberry">10g</div>
            </div>


          </div>

          
          {/* footer section */}
          <div className="attribution bg-white p-4 mt-auto">
            Challenge by{' '}
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
              Frontend Mentor
            </a>
            . Coded by <a href="https://github.com/Avwaveaf" target="_blank" rel="noreferrer"  className="underline">Afif Fadillah</a>.
          </div>

        </div>
      </main>

    </>
  );
}

export default App;
