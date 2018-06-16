searchForm.addEventListener('submit', submitSearch)

function submitSearch(e) {
    pageNumber = 0;
    fetchResults(e);
  }
  
  function fetchResults(e) {

    e.preventDefault();

    url = developers.giphy.com+'?api-key=' + key + '&q='+ searchTerm.value + '&fq=document_type:("image")';

    fetch(url).then(function(result) {
        return result.json();
      }).then(function(json) {
        displayResults(json);
      });
      
     

  