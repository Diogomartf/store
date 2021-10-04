products = Product.create([
  {name: "The Minimalist Entrepreneur", price: 29.99, description: "The simplest framework to owning a business—without it owning you back"},
  {name: "Zero to one", price: 12.00},
  {name: "Courage: The Joy of Living Dangerously", price: 10.00, description: "Courage is not the absence of fear, says Osho. It is, rather, the total presence of fear, with the courage to face it."},
  {name: "How to DeFi", price: 9.99},
  {name: "The 7 Habits of Highly Effective People", price: 29.99},
  {name: "The Art of War", price: 19.99},
  {name: "The Innovator's Dilemma", price: 12.00}
])

products[0].reviews.create([
  {rating: 5, comment: "I love this book"},
  {rating: 3, comment: "Not quite what I expected"},
  {rating: 5, comment: "Helped me start my business"},
  {rating: 4, comment: "Cool book"},
  {rating: 2, comment: "Full of fluf"}
])

products[1].reviews.create([
  {rating: 4, comment: "Business degree"},
  {rating: 5, comment: "Recommend a lot!"}
])

products[2].reviews.create([
  {rating: 5, comment: "Poetic"}
])

products[3].reviews.create([
  {rating: 4, comment: "Good intro to DeFi"},
  {rating: 4, comment: "Good."},
  {rating: 3, comment: "fluf."}
])

products[5].reviews.create([
  {rating: 5, comment: "I love this book"},
  {rating: 4, comment: "Cool book"},
  {rating: 3, comment: "Not quite what I expected"},
  {rating: 2, comment: "Full of fluf"}
])
