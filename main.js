console.log("hello");
var categories = [];
var types = [];
var products = [];


function getCategories () {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "https://fir-101-6671c.firebaseio.com/categories.json"
		}).done( (categoriesData) => {
			resolve(categoriesData);
		}).fail( (error) => {
		    reject(error);
		});
	});
}

function getTypes (catData) {
	return new Promise ((resolve, reject) => {
		$.ajax({
			url: "https://fir-101-6671c.firebaseio.com/types.json"
		}).done( (typesData) => {
			resolve(typesData);
		}).fail( (error) => {
			reject(error);
		});
	});
}


function getProducts (catData, typData) {
	return new Promise ((resolve, reject) => {
		$.ajax({
			url: "https://fir-101-6671c.firebaseio.com/products.json"
		}).done( (productsData) => {
			resolve(productsData);
		}).fail( (error) => {
		    reject(error);
		});
	});
}

getCategories()
.then(function(categoriesData) {
	categories = categoriesData;
	return getTypes()
})
.then(function(typesData) {
	types = typesData;
	return getProducts();
})
.then(function(productsData) {
	products = productsData;
	console.log("category data?", categories);
	console.log("type data?", types);
	console.log("product data?", products);
	makeCards(categories, types, products)
	//here call a function that requires all of the data
})
.catch(function(error) {
	console.log("error", error);
});

//let $prodContDiv = $('#product-container');

function makeCards (categoryData, types, products)  {
//need to use$prodContDiv =  the type_id to find the category, to prep for DOM
  $.each(products, function(){
  	$.each(types, function(products) {
  		//find what piece of the array fits the products.type_id
  		//maybe .filter
  	if (products.type_id === Object.keys(types)) {
		console.log("bothsies", products.name);
  	}
  }
  );


  })


  // let card = '';
  // card += `<div class="prodCard">
		// 		<h2>{products.name}</h2>
		// 		<h4>Type</h4>
		// 		<h3>Category</h3>
		//   </div>`
}