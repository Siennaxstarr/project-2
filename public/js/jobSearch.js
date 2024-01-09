const searchBar = document.querySelector('#job-search-bar');
const searchBtn = document.querySelector('#job-search-button');
let resultList;
if (document.querySelector('#result-list') !== null) {
    resultList = document.querySelector('#result-list').children;
    //Give each result in list id based on name
    Array.from(resultList).forEach(item => {
        const itemTitle = item.children[0].children[1].children[0].textContent;
        item.id = itemTitle.split(' ').join('-');

        item.addEventListener('click', async () => {
            const searchTerm = decodeURIComponent(document.location.pathname.split('/')[2]);

            if (window.innerWidth >= 640) {
                document.location.href = `/job-search/${searchTerm}/${itemTitle}/false`; 

            } else {
                document.location.href = `/job-search/${searchTerm}/${itemTitle}/true`
            }
        })
    });
}




searchBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const searchTerm = searchBar.value.trim();
    console.log('sending search')

    const res = await fetch('/job-search/' + searchTerm);
    console.log('turning json')
    const data =  res.json()
    
    if (data) {
        document.location.href ='/job-search/' + searchTerm

    } else {

        const res2 = await fetch('/api/job-search', {
            method: 'POST',
            body: JSON.stringify({ searchTerm }),
            headers: { 'Content-Type': 'application/json' },
        })
    
    
        if (res2.ok) {
            document.location.href = `/job-search/ + ${searchTerm}`
            console.log(data)
        }
    }

})
