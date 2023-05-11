export const API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5ac9df7cc7msh3c70aba07df2b47p16ed73jsn136f950af8b0",
    "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
  },
};
export const CATEGORIES = {
  fruits: {
    name: "fruits",
    color: "#FFA000",
    items: [
      {
        name: "apple",
        uri: "https://media.istockphoto.com/id/683494078/photo/red-apple-with-leaf.jpg?s=170667a&w=0&k=20&c=Gvhgzi2GX8Km6A212GIchBmAL0lyQ3xYz7J_woVrWaU=",
      },
      {
        name: "blueberry",
        uri: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      },
      {
        name: "banana",
        uri: "https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.jpg?b=1&s=170667a&w=0&k=20&c=uiSdjIQkTr7S4gEdW_oB_5zfFYhpfe0LP-CryQl49w4=",
      },
      {
        name: "orange",
        uri: "https://media.istockphoto.com/id/185284489/tr/foto%C4%9Fraf/orange.jpg?s=612x612&w=0&k=20&c=nPHn2c9Boi2WPIu6wk6tlIiFY3IT7xymRuAvKiVfYus=",
      },
      {
        name: "mango",
        uri: "https://n11scdn.akamaized.net/a1/602_857/04/62/51/40/38123498.png",
      },
      {
        name: "avocado",
        uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Avocados-3d84a3a.jpg",
      },
      {
        name: "pineapple",
        uri: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/10/pineapple-fruit-1296x728-header-1296x728.jpg?w=1155&h=1528",
      },
      {
        name: "strawberry",
        uri: "https://media.istockphoto.com/id/1157946861/photo/red-berry-strawberry-isolated.jpg?s=612x612&w=0&k=20&c=HyxZMbI_e-vDJbrzZkTz5zWCAo1mBEzWbvVlyigbi-E=",
      },
      {
        name: "cherry",
        uri: "https://img.freepik.com/free-vector/realistic-berries-composition-with-isolated-image-cherry-with-ripe-leaves-blank-background-vector-illustration_1284-66040.jpg?w=2000",
      },
      {
        name: "watermelon",
        uri: "https://thumbs.dreamstime.com/b/whole-watermelon-big-slice-isolated-white-background-as-package-design-element-77610622.jpg",
      },
      {
        name: "melon",
        uri: "https://media.istockphoto.com/id/1162476390/photo/canary-melon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=PTYJRAmUrZfgTdKw5FKrZaLJym3ozPiNU8NYEKI_3fw=",
      },
      {
        name: "kiwi",
        uri: "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
      },
      {
        name: "peach",
        uri: "https://static.libertyprim.com/files/familles/peche-large.jpg?1574630286",
      },
      {
        name: "guava",
        uri: "https://thumbs.dreamstime.com/b/isolated-green-guava-pink-flesh-one-whole-fruit-half-white-background-clipping-path-173876537.jpg",
      },
      {
        name: "grape",
        uri: "https://media.istockphoto.com/id/803721418/photo/grape-dark-grape-grapes-with-leaves-isolated-with-clipping-path-full-depth-of-field.jpg?s=612x612&w=0&k=20&c=-jAJlO3WbgFzxwwSmG3pc7bqUva117TYUKKrQW3-RK8=",
      },
      {
        name: "grapefruit",
        uri: "https://i.ndtvimg.com/mt/cooks/2014-11/grapefruit.jpg",
      },
    ],
  },
  vegetables: {
    name: "vegetables",
    color: "#5FFF42",
    items: [
      {
        name: "cabbage",
        uri: "https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg",
      },
      {
        name: "spinach",
        uri: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/spinach-1296x728-header.jpg?w=1155&h=1528",
      },
      {
        name: "lettuce",
        uri: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg",
      },
      {
        name: "turnip",
        uri: "http://cdn.shopify.com/s/files/1/0498/5903/5292/products/White-Turnip-Diakon_1200x1200.jpg?v=1606946206",
      },
      {
        name: "potato",
        uri: "https://stoller.com.au/wp-content/uploads/2019/03/potato_crop.jpg",
      },
      {
        name: "ginger",
        uri: "https://images.heb.com/is/image/HEBGrocery/000448930-1",
      },
      {
        name: "pumpkin",
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pumpkin_Field.jpg/620px-Pumpkin_Field.jpg",
      },
      {
        name: "tomato",
        uri: "https://saverafresh.com/wp-content/uploads/2021/08/istockphoto-466175630-612x612-1.jpg",
      },
      {
        name: "eggplant",
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Eleven_long_purple_eggplants.jpg/440px-Eleven_long_purple_eggplants.jpg",
      },
      {
        name: "onion",
        uri: "https://www.macmillandictionary.com/external/slideshow/full/135967_full.jpg",
      },
      {
        name: "garlic",
        uri: "https://theforkedspoon.com/wp-content/uploads/2021/11/Garlic-24.jpg",
      },
      {
        name: "lemon",
        uri: "https://www.tastingtable.com/img/gallery/31-types-of-lemons-and-what-makes-them-unique/l-intro-1656086555.jpg",
      },
    ],
  },
  grains: {
    name: "grains",
    color: "#F5DEB3",
    items: [
      {
        name: "barley",
        uri: "https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295268/barley-grains-in-a-wooden-bowl.jpg",
      },
      {
        name: "wheat",
        uri: "https://www.vidhaiorganicstore.in/files/the-wheat-allergy-diet-guide-1324279-primary-recirc-70ef0114e17e4f7b9a1faeab8b516e1e-11-19-2020,2:39:12PM.jpg",
      },
      {
        name: "quinoa",
        uri: "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/quinoa.jpg",
      },
      {
        name: "oatmeal",
        uri: "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/oatmeal.jpg",
      },
      {
        name: "farro",
        uri: "https://playswellwithbutter.com/wp-content/uploads/2021/03/Greek-Farro-Salad-7.jpg",
      },
      {
        name: "rice",
        uri: "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg?crop=0.565xw:1.00xh;0.218xw,0&resize=1200:*",
      },
    ],
  },
  proteinFoods: {
    name: "protein foods",
    color: "#F9906F",
    items: [
      {
        name: "egg",
        uri: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWdnc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      {
        name: "beef",
        uri: "https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg",
      },
      {
        name: "pork",
        uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roast-rack-of-pork-with-wild-garlic-stuffing-f0a6a27.jpg",
      },
      {
        name: "turkey",
        uri: "https://www.foodnetwork.com/content/dam/images/food/fullset/2008/11/24/0/IG1C11_Roast-Turkey.jpg",
      },
      {
        name: "peanut",
        uri: "https://peanut-institute.com/wp-content/uploads/2017/08/peanut-home-focus.png",
      },
      {
        name: "chicken",
        uri: "https://149353356.v2.pressablecdn.com/wp-content/uploads/2019/02/shutterstock_531404539-1024x684.jpg",
      },
      {
        name: "salmon",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomzZDiBzug8Hu_1U6fv2hyWNPQevUa0xVtA&usqp=CAU",
      },
      {
        name: "almond",
        uri: "https://images.unsplash.com/photo-1583126379180-ec70bb3178b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWxtb25kfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      },
      {
        name: "sunflower seeds",
        uri: "https://rukminim1.flixcart.com/image/416/416/ka5oia80/pet-food/y/q/g/5-bird-sunflower-seeds-touch-of-life-original-imafrsgbjaesf5u2.jpeg?q=70",
      },
      {
        name: "cashew",
        uri: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/09/bag-cashews.jpg?quality=82&strip=1",
      },
      {
        name: "nut",
        uri: "https://cdn.britannica.com/75/174375-050-BC6968AE/Hazelnuts-fruit-compound-ovary-seed.jpg",
      },
      {
        name: "walnut",
        uri: "https://static.toiimg.com/photo/msid-81211850/81211850.jpg",
      },
    ],
  },
  dairy: {
    name: "dairy",
    color: "#FDFFF5",
    items: [
      {
        name: "milk",
        uri: "https://www.heritagefoods.in/blog/wp-content/uploads/2020/12/shutterstock_539045662.jpg",
      },
      {
        name: "yogurt",
        uri: "https://www.daringgourmet.com/wp-content/uploads/2021/01/How-to-Make-Yogurt-7.jpg",
      },
      {
        name: "cheese",
        uri: "https://media.istockphoto.com/id/1127471287/photo/cheese-on-white.jpg?s=170667a&w=0&k=20&c=LV6av_3X5Q1bxzqSV9FPhF_eoqWtE6YGyjK6CCNvzlM=",
      },
      {
        name: "cream",
        uri: "https://www.biggerbolderbaking.com/wp-content/uploads/2016/07/IMG_4834.jpg",
      },
      {
        name: "butter",
        uri: "https://media.istockphoto.com/id/1338222224/photo/butter-blocks-and-pieces-on-wooden-table-copy-space.jpg?s=612x612&w=0&k=20&c=65ZYwALchrY4iXYkfrchnnWKCpuP20TZvXnSSmWnBPM=",
      },
      {
        name: "custard",
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Custard.jpg/1024px-Custard.jpg",
      },
    ],
  },
  fastFood: {
    name: "fast food",
    color: "#DCA009",
    items: [
      {
        name: "hamburger",
        uri: "https://cdn.britannica.com/31/122031-050-F8FCA663/Hamburger-cheeseburger.jpg",
      },
      {
        name: "pizza",
        uri: "https://media.istockphoto.com/id/1083487948/photo/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-concrete-background-top.jpg?s=612x612&w=0&k=20&c=E5rcp7F5y3SII4AYFmxFfcnkh6_LtVO4dzvjJDkXook=",
      },
      {
        name: "sandwich",
        uri: "https://insanelygoodrecipes.com/wp-content/uploads/2022/01/Homemade-Indian-Sandwich-with-Cottage-Cheese-and-Tomatoes.jpg",
      },
      {
        name: "taco",
        uri: "https://www.tacobueno.com/assets/food/tacos/Taco_Crispy_Beef_990x725.jpg",
      },
      {
        name: "muffin",
        uri: "https://img.lovepik.com/photo/20211204/small/lovepik-chocolate-muffin-picture_501505474.jpg",
      },
      {
        name: "burrito",
        uri: "https://upload.wikimedia.org/wikipedia/commons/6/60/Burrito.JPG",
      },
      {
        name: "cookie",
        uri: "https://insanelygoodrecipes.com/wp-content/uploads/2022/01/Homemade-Sweet-Assorted-Italian-Cookies-in-a-Plate.jpg",
      },
      {
        name: "donut",
        uri: "https://media.istockphoto.com/id/538335769/photo/donut-with-sprinkles-isolated.jpg?s=612x612&w=0&k=20&c=rCA_fEe8H3qwXT20aYfRJTrMHpSB8deFuiKK0ygQLwg=",
      },
      {
        name: "onion rings",
        uri: "https://www.mylatinatable.com/wp-content/uploads/2016/01/foto-heroe-1024x693-2.jpg",
      },
      {
        name: "noodle",
        uri: "https://tiffycooks.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-08-at-11.46.08-PM-480x270.png",
      },
    ],
  },
}; 
