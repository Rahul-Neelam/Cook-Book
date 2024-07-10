document.addEventListener('DOMContentLoaded', () => {
    const dishGrid = document.getElementById('dish-grid');
    const generateButton = document.getElementById('generate-recipe');
    const recipeContent = document.getElementById('recipe-content');
    const recipeDisplay = document.getElementById('recipe-display');

    const dishes = [
        {
            name: 'Pizza',
            image: 'assets/pizza.jpg',
            recipe: {
                ingredients: [
                    '1 pizza dough',
                    '1/2 cup tomato sauce',
                    '1 1/2 cups shredded mozzarella',
                    '1/4 cup grated Parmesan',
                    'Toppings of choice (e.g., pepperoni, mushrooms, bell peppers)'
                ],
                instructions: [
                    'Preheat oven to 450°F (230°C).',
                    'Roll out pizza dough on a baking sheet.',
                    'Spread tomato sauce evenly over the dough.',
                    'Sprinkle mozzarella and Parmesan cheeses.',
                    'Add your chosen toppings.',
                    'Bake for 12-15 minutes or until crust is golden and cheese is bubbly.'
                ]
            }
        },
        {
            name: 'Pie',
            image: 'assets/pie.jpg',
            recipe: {
                ingredients: [
                    '1 pie crust',
                    '2 cups filling of choice',
                    '1/4 cup sugar',
                    '1 tbsp butter'
                ],
                instructions: [
                    'Preheat oven to 375°F (190°C).',
                    'Place pie crust in a 9-inch pie dish.',
                    'Mix filling with sugar and pour into crust.',
                    'Dot with butter and bake for 45 minutes or until golden brown.'
                ]
            }
        },
        {
            name: 'Biryani',
            image: 'assets/biryani.jpeg',
            recipe: {
                ingredients: [
                    '2 cups basmati rice',
                    '500g chicken, cut into pieces',
                    '1 cup yogurt',
                    '2 onions, sliced',
                    '2 tbsp biryani masala',
                    '1/4 cup oil',
                    'Saffron strands soaked in milk'
                ],
                instructions: [
                    'Marinate chicken in yogurt and biryani masala for 2 hours.',
                    'Fry onions until golden brown.',
                    'Cook rice until 70% done.',
                    'In a large pot, layer half the rice, then the marinated chicken, then the rest of the rice.',
                    'Top with fried onions and saffron milk.',
                    'Cover and cook on low heat for 25-30 minutes.'
                ]
            }
        },
        {
            name: 'Crab',
            image: 'assets/crab.jpeg',
            recipe: {
                ingredients: [
                    '400g spaghetti',
                    '200g pancetta or bacon, diced',
                    '4 large eggs',
                    '100g Pecorino Romano cheese, grated',
                    '50g Parmesan cheese, grated',
                    'Freshly ground black pepper'
                ],
                instructions: [
                    'Cook spaghetti in salted water until al dente.',
                    'While pasta cooks, fry pancetta until crispy.',
                    'In a bowl, whisk eggs, grated cheeses, and black pepper.',
                    'Drain pasta, reserving 1/2 cup of pasta water.',
                    'Quickly toss hot pasta with pancetta, then mix in egg mixture.',
                    'Add pasta water as needed for creaminess. Serve immediately.'
                ]
            }
        },
        {
            name: 'Stir-Fry Noodles',
            image: 'assets/noodles.jpeg',
            recipe: {
                ingredients: [
                    '300g egg noodles',
                    '200g mixed vegetables (carrots, bell peppers, broccoli)',
                    '200g protein (chicken, shrimp, or tofu)',
                    '3 tbsp soy sauce',
                    '2 tbsp oyster sauce',
                    '2 cloves garlic, minced',
                    '2 tbsp oil'
                ],
                instructions: [
                    'Cook noodles according to package instructions, then drain.',
                    'Heat oil in a wok or large pan over high heat.',
                    'Add garlic and protein, cook until protein is nearly done.',
                    'Add vegetables and stir-fry for 2-3 minutes.',
                    'Add noodles, soy sauce, and oyster sauce. Toss everything together.',
                    'Cook for another 2 minutes and serve hot.'
                ]
            }
        },
        {
            name: 'Bread Omelette',
            image: 'assets/bo.jpeg',
            recipe: {
                ingredients: [
                    '2 slices of bread',
                    '2 eggs',
                    '2 tbsp milk',
                    '2 tbsp chopped onions',
                    '2 tbsp chopped tomatoes',
                    'Salt and pepper to taste',
                    '1 tbsp butter'
                ],
                instructions: [
                    'Beat eggs with milk, salt, and pepper.',
                    'Add chopped onions and tomatoes to the egg mixture.',
                    'Melt butter in a pan over medium heat.',
                    'Dip bread slices in the egg mixture, coating both sides.',
                    'Place coated bread in the pan and pour remaining egg mixture over.',
                    'Cook for 2-3 minutes, flip, and cook the other side until golden brown.'
                ]
            }
        }
    ];

    function createDishGrid() {
        dishes.forEach((dish, index) => {
            const image = document.createElement('img');
            image.src = dish.image;
            image.alt = dish.name;
            image.classList.add('dish-image');
            image.addEventListener('click', () => {
                generateRecipe(index);
                recipeDisplay.scrollIntoView({ behavior: 'smooth' });
            });
            dishGrid.appendChild(image);
        });
    }

    function generateRecipe(index) {
        const dish = dishes[index] || dishes[Math.floor(Math.random() * dishes.length)];
        
        const ingredientsList = dish.recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        const instructionsList = dish.recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('');
        
        const recipe = `
            <h3>${dish.name}</h3>
            <img src="${dish.image}" alt="${dish.name}" style="width: 200px; height: 200px; object-fit: cover; margin-bottom: 1rem;">
            <h4>Ingredients:</h4>
            <ul>${ingredientsList}</ul>
            <h4>Instructions:</h4>
            <ol>${instructionsList}</ol>
        `;
        recipeContent.innerHTML = recipe;
    }

    createDishGrid();
    generateButton.addEventListener('click', () => {
        generateRecipe(Math.floor(Math.random() * dishes.length));
        recipeDisplay.scrollIntoView({ behavior: 'smooth' });
    });
});
