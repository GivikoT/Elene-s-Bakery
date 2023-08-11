const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback)
  }
}

const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar = function () {
  navbar.classList.toggle("active")
  overlay.classList.toggle("active")
  document.body.classList.toggle("nav-active")
}

addEventOnElements(navTogglers, "click", toggleNavbar)

const foods = [
  {
    id: "applePie",
    title: "Apple Pie",
    instructions:
      "Peel, core and slice the apples. In a large mixing bowl, gently toss the apple slices, granulated sugar, light brown sugar, flour, cinnamon, nutmeg, lemon zest and lemon juice until well combined and set aside. Place the oven rack in the center position and preheat your oven to 400°F. Remove the discs of pie crust from the fridge and let set at room temperature for 5-10 minutes. On a lightly floured surface, roll one of the discs into a 12  thick. Place the crust into the bottom of the deep dish pie plate.Spoon the apple pie filling into the crust, discarding any liquid at the bottom of the mixing bowl. Spread the apple slices evenly.On a lightly floured surface, roll the second disc of pie dough into a 12 thick. Place the crust over the apple pie filling.",
    imageSrc: "./images/details/applePie.jpg",
    video:
      "https://www.tiktok.com/@elenetarkhnishvili/video/7204123153906388229",
    facebook: "https://www.facebook.com/profile.php?id=100000920810805",
    instagram: "https://www.instagram.com/elenetarkhnishvili/",
    tiktok: "https://www.tiktok.com/@elenetarkhnishvili",
  },
  {
    id: "maritozzi",
    title: "Maritozzi",
    instructions: `Dissolve the yeast separately with a little warm milk and sugar. Let's leave for 10 minutes. Mix flour, sugar, vanilla, salt separately. Add yeast liquid, remaining warm milk, oil, eggs and honey. let's knead Transfer to an oiled bowl and leave for 1 hour. When the mass of the dough doubles, cut it into 12 pieces, round it and leave it for another 1 hour. Then pour over the egg mixture and bake at 180 degrees for 15 minutes.When it cools down to the end, we will also apply the cream`,
    imageSrc: "./images/details/maritozzi.jpg",
    video:
      "https://www.tiktok.com/@elenetarkhnishvili/video/7256343805333425435",
    facebook: "https://www.facebook.com/profile.php?id=100000920810805",
    instagram: "https://www.instagram.com/elenetarkhnishvili/",
    tiktok: "https://www.tiktok.com/@elenetarkhnishvili",
  },
  {
    id: "ricottaCookie",
    title: "Ricotta Cookie",
    instructions: `In a large bowl whisk together the ricotta, sugar, lemon zest, and egg. Sift the flour and baking powder into the bowl. Mix all the ingredients until you have a compact and soft dough. Use your hands to form small balls (around 24 grams/0.8 oz each), you can also use a cookie scoop. Arrange them on a baking tray, then refrigerate them for 15 minutes. Bake the cookies for 17 minutes. Cool the cookies on a wire rack, then sprinkle them with powdered sugar, or dip the cookies in the glaze and top with sprinkles or lemon zest.`,
    imageSrc: "./images/details/cookie.jpg",
    video: "https://www.tiktok.com/@elenetarkhnishvili",
    facebook: "https://www.facebook.com/profile.php?id=100000920810805",
    instagram: "https://www.instagram.com/elenetarkhnishvili/",
    tiktok: "https://www.tiktok.com/@elenetarkhnishvili",
  },
  {
    id: "carrotCake",
    title: "Carrot Cake",
    instructions: `Dry ingredients in one bowl, wet ingredients in another: I like to whisk my dry ingredients together in one bowl until they are well blended. Then I whisk all the wet ingredients together in another bowl. Fold the dry and wet ingredients together: Then I switch to a rubber spatula or large spoon and fold the two — wet and dry ingredients — together until I don’t see any large streaks of flour. (We use the same method when making this cinnamon coffee cake, our pineapple upside-down cake, and this buttery blueberry cake. Both recipes are so good!) Add carrots, nuts, and raisins: When I’ve got the batter ready, I fold in the carrots, and if I’m using them, the nuts and raisins. When it comes to baking the carrot cake, divide the batter between two buttered and floured cake pans and bake until done. The cake layers bake in the oven for 35 to 40 minutes (they smell fantastic). After baking, let the layers cool then frost with your favorite frosting.`,
    imageSrc: "./images/details/carrot.jpg",
    video:
      "https://www.tiktok.com/@elenetarkhnishvili/video/7209293202413702406",
    facebook: "https://www.facebook.com/profile.php?id=100000920810805",
    instagram: "https://www.instagram.com/elenetarkhnishvili/",
    tiktok: "https://www.tiktok.com/@elenetarkhnishvili",
  },
  {
    id: "strawberry",
    title: "Strawberry Tiramisu",
    instructions: `First prepare the strawberries. So wash them carefully then cut them into very small pieces. Set aside 6 or 8 strawberries and cut them into thin slices. The latter serve as decoration. Then prepare the syrup to soak the ladyfingers. Pour the strawberry syrup into the milk and mix well. If you prefer a stronger taste, you can use a liqueur instead of syrup. For example Alchermes or Limoncello. Now separate the egg whites from the yolks and remember that to whip the whites firm enough there must be no trace of yolk. Take a bowl and whip the egg whites until stiff: you will get at it when the egg whites will not move if you turn the bowl over. When ready, set aside. Now in another bowl (or the clean same one) whisk the egg yolks with the sugar until pale and smooth, 3 to 5 minutes. When ready add mascarpone cheese. Whisk the cream slowly with the electric mixer. Now add stiffen egg whites. Mix with a wooden spoon, from bottom to top. Mix slowly until it’s smooth and creamy. Mascarpone cream for tiramisu is ready. Now quickly dip Savoiardi in the milk with the strawberry syrup. IMPORTANT! The biscuits should not take too much liquid, otherwise the tiramisu will be too soggy. Then put them in a ceramic or glass pan. Spread 4/5 tablespoons of mascarpone cream on the biscuits surface. Add chopped strawberries and some chocolate chips. Add another layer of Savoiardi and then cover with more mascarpone cream, strawberries and chocolate chips and so on until the container is full. Finally decorate your Strawberry Tiramisu with strawberries cut into thin slices and if you want with other chocolate chips. For decoration step, let your imagination run wild! Let it rest for 3 hours in the fridge before serving (even better if you make the tiramisu the day before, letting it rest overnight in the fridge).`,
    imageSrc: "./images/details/strawberry.jpg",
    video:
      "https://www.tiktok.com/@elenetarkhnishvili/video/7235607900968750362",
    facebook: "https://www.facebook.com/profile.php?id=100000920810805",
    instagram: "https://www.instagram.com/elenetarkhnishvili/",
    tiktok: "https://www.tiktok.com/@elenetarkhnishvili",
  },
  {
    id: "focaccia",
    title: "Focaccia",
    instructions: `In the warm water and sugar. (I highly recommend using a thermometer to measure the temperature of the water, so that it is not too hot or too cold.)  Gradually add in the flour, olive oil and salt. Then knead for 5 minutes using the dough attachment or a stand mixer, or knead the dough by hand. Shape the dough into a ball and place it in a greased mixing bowl, and cover with a damp towel. Let the dough rest in a warm location for 45-60 minutes, or until it has doubled in size. Shape the dough into a large circle or rectangle until that the dough is about 1/2-inch thick*. Cover and let the dough continue to rise for another 20 minutes. Heat oven to 400°F. Transfer the dough to a large parchment-covered baking sheet (or press it into a 9 x 13-inch baking dish). Use your fingers to poke deep dents — like seriously, poke all the way down until you touch the baking sheet — all over the surface of the dough. Then drizzle a tablespoon or two of olive oil evenly all over the top of the dough, and sprinkle evenly with the fresh rosemary needles and sea salt. Bake for 20 minutes, or until the dough is slightly golden and cooked through. Remove from the oven, and drizzle with a little more olive oil if desired. Slice, and serve warm.`,
    imageSrc: "./images/details/focaccia.jpg",
    video: "https://www.tiktok.com/@elenetarkhnishvili",
    facebook: "https://www.facebook.com/profile.php?id=100000920810805",
    instagram: "https://www.instagram.com/elenetarkhnishvili/",
    tiktok: "https://www.tiktok.com/@elenetarkhnishvili",
  },
  {
    id: "bread",
    title: "Bread",
    instructions: "We need recipe here...",
    imageSrc: "./images/details/bread.jpg",
    video: "https://www.tiktok.com/@elenetarkhnishvili",
    facebook: "https://www.facebook.com/profile.php?id=100000920810805",
    instagram: "https://www.instagram.com/elenetarkhnishvili/",
    tiktok: "https://www.tiktok.com/@elenetarkhnishvili",
  },
  {
    id: "brownie",
    title: "Brownie Cake",
    instructions: `We need recipe here...`,
    imageSrc: "./images/details/brownie.jpg",
    video:
      "https://www.tiktok.com/@elenetarkhnishvili/video/7206652951375383813",
    facebook: "https://www.facebook.com/profile.php?id=100000920810805",
    instagram: "https://www.instagram.com/elenetarkhnishvili/",
    tiktok: "https://www.tiktok.com/@elenetarkhnishvili",
  },
  {
    id: "berries",
    title: "Berry Cream Tart",
    instructions: `In a medium heatproof bowl, whisk together the sugar, flour, cornstarch, and salt. Add the egg, whisking until the mixture is smooth. In a small (1 1/2-quart) saucepan, bring the milk to a boil. Add the hot milk to the egg mixture gradually, whisking continually to make everything smooth. Pour the hot milk/egg mixture back into the saucepan, return to the heat, and bring to a boil, whisking continually. The mixture will thicken quickly and whisking vigorously will keep it from getting lumpy. Once you see the filling come to a boil across its entire surface, cook for another minute, then remove from the heat. Stir in the butter and extract. Pour the filling into the baked tart shell. Place a piece of plastic wrap directly on the surface to prevent a skin from forming and refrigerate. When you’re ready to serve the tart, remove the wrap from the filling and top the tart with sliced strawberries and blueberries in alternating rows; or simply arrange the fruit artfully atop the filling. If you're using jam or preserves, warm them gently and thin with a little water if necessary to loosen them up. Strain or scoop out and discard any solids, then brush the remaining glaze over the berries. If you're using jelly, simply warm it and brush it atop the berries. Slice the tart into wedges and serve with whipped cream, if desired.  Store any leftover tart, covered, in the refrigerator for several days. We don't advise freezing this tart. Tips from our Bakers`,
    imageSrc: "./images/details/tart.jpg",
    video:
      "https://www.tiktok.com/@elenetarkhnishvili/video/7253811702599339290",
    facebook: "https://www.facebook.com/profile.php?id=100000920810805",
    instagram: "https://www.instagram.com/elenetarkhnishvili/",
    tiktok: "https://www.tiktok.com/@elenetarkhnishvili",
  },
]

function populateFoodDetails() {
  const urlParams = new URLSearchParams(window.location.search)
  const selectedFood = urlParams.get("food")

  const food = foods.find((item) => item.id === selectedFood)

  if (food) {
    document.title = `Elene's Bakery | ${food.title}`
    document.getElementById("foodImage").src = food.imageSrc
    document.getElementById("foodTitle").textContent = food.title
    document.getElementById("foodInstructions").textContent = food.instructions
    document.getElementById("videoLink").href = food.video
    document.getElementById("facebookLink").href = food.facebook
    document.getElementById("instagramLink").href = food.instagram
    document.getElementById("tiktokLink").href = food.tiktok
  }
}

populateFoodDetails()
