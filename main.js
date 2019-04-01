$(function() {


  $.get("https://obscure-tundra-54269.herokuapp.com/fine-dining", function(data) {
     var app = document.querySelector(".menuitem")
     
    
     

     $('#apps').on('click', function(){
        

        var htmlstr = data.appetizers.map(function(item){
            if (item.extra.spicy === true){
            var spicy = 'Sp'} else {var spicy = ''}
            if (item.extra.glutenfree === true){
            var gf = 'GF'} else {var gf = ''}
            if (item.extra.vegetarian === true){
            var vegan = 'V'} else {var vegan = ''}

            return `<div class="menuitem">
            <div class="foodname"><p>${item.name}...........................................................................</p><p>$${item.price}</p></div>
            <div class="description">
                <p>
                    ${item.description}
                </p>
            
            <div class="right-box">
                <div class="food-icons">
                    <div class="food-icon"><p>${spicy}</p></div>
                    <div class="food-icon" id='gf'><p>${gf}</p></div>
                    <div class="food-icon" id='vegan'><p>${vegan}</p></div>
                    <div class="food-icon"><p></p></div>
                </div>
            </div>
            </div>
            </div>`
            
            
        }).join('')
        
        app.innerHTML = htmlstr 
     })
    
     $('#dinner').on('click', function(){

        var htmlstr2 = data.entrees.map(function(item){
            if (item.extra.spicy === true){
                var spicy = 'Sp'} else {var spicy = ''}
                if (item.extra.glutenfree === true){
                var gf = 'GF'} else {var gf = ''}
                if (item.extra.vegetarian === true){
                var vegan = 'V'} else {var vegan = ''}
            return `<div class="menuitem">
            <div class="foodname"><p>${item.name}...........................................................................</p><p>$${item.price}</p></div>
            <div class="description">
                <p>
                    ${item.description}
                </p>
            
            <div class="right-box">
                <div class="food-icons">
                    <div class="food-icon"><p>${spicy}</p></div>
                    <div class="food-icon" id='gf'><p>${gf}</p></div>
                    <div class="food-icon" id='vegan'><p>${vegan}</p></div>
                    <div class="food-icon"><p></p></div>
                </div>
            </div>
            </div>
            </div>`
            
            
        }).join('')
        
         app.innerHTML = htmlstr2
     



  })

  $('#dessert').on('click', function(){

    var htmlstr3 = data.desserts.map(function(item){
        if (item.extra.spicy === true){
            var spicy = 'Sp'} else {var spicy = ''}
            if (item.extra.glutenfree === true){
            var gf = 'GF'} else {var gf = ''}
            if (item.extra.vegetarian === true){
            var vegan = 'V'} else {var vegan = ''}
        return `<div class="menuitem">
        <div class="foodname"><p>${item.name}...........................................................................</p><p>$${item.price}</p></div>
        <div class="description">
            <p>
                ${item.description}
            </p>
        
        <div class="right-box">
            <div class="food-icons">
                <div class="food-icon"><p>${spicy}</p></div>
                <div class="food-icon" id='gf'><p>${gf}</p></div>
                <div class="food-icon" id='vegan'><p>${vegan}</p></div>
                <div class="food-icon"><p></p></div>
            </div>
        </div>
        </div>
        </div>`
        
        
    }).join('')
    
     app.innerHTML = htmlstr3
})
})
})


// {/* <div id="disqus_thread"></div>
// <script>

// /**
// *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
// *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
// /*
// var disqus_config = function () {
// this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
// this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
// };
// */
// (function() { // DON'T EDIT BELOW THIS LINE
// var d = document, s = d.createElement('script');
// s.src = 'https://italiana.disqus.com/embed.js';
// s.setAttribute('data-timestamp', +new Date());
// (d.head || d.body).appendChild(s);
// })();
// </script>
// <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
//  */}    ********where disqus loads******

/* <script id="dsq-count-scr" src="//italiana.disqus.com/count.js" async></script>   *****last script */





/* <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBe5CsprDyIARIjNsrohRExQ&key=AIzaSyD6VImWKzsNcq76jemUdj5j6qkgofPlcqc" allowfullscreen></iframe> */