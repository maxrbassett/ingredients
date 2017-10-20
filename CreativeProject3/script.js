angular.module('Recipes', [])
.controller('MainCtrl', function($scope) {
    $('#results').hide();
    $scope.submitter = function(){
        $('#results').hide();
         $('#results').empty();
         var url = "https://api.edamam.com/search?app_id=45bda3e2&app_key=f5ec2b5e911e79c0b132921adc9432cd%20&q="+$scope.foodVal
        $.getJSON(url, function(data){
            var recipeList = document.createElement("ul");
            var greaterDiv = document.getElementById("results");
            for(var i=0; i<data.hits.length; i++){
                var smallDiv = document.createElement("div");
                smallDiv.id="smallerDiv";
                var recipeName = data.hits[i].recipe.label;
                    if(recipeName.length > 20){
                        recipeName = recipeName.substring(0,19)+"...";
                    }
                var recipeImage = data.hits[i].recipe.image;
                var recipeArray = data.hits[i].recipe.ingredients;
                var recipeURL = data.hits[i].recipe.url
                smallDiv.innerHTML = `<a href="${recipeURL}"><img class="images" src="${recipeImage}"/></a><p> ${recipeName}</p>`;
                greaterDiv.appendChild(smallDiv);
            }
            $('#results').show();
            
        })
    }
})

