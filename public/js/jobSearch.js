const searchBar = document.querySelector('#job-search-bar');
const searchBtn = document.querySelector('#job-search-button');


searchBtn.addEventListener('click', async (event)=> {
    event.preventDefault();
    const searchTerm =  searchBar.value.trim();

    const res = await fetch('/api/job-search', {
        method: 'POST',
        body: JSON.stringify({ searchTerm }),
        headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()


    if (res.ok){
        document.location.replace('/job-search/' + searchTerm)
        console.log(data)
    }
})