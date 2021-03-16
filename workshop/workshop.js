navService = 
{

    url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",

    init: () => 
    {
        apiService.getBands(navService.url)
        navService.searchBtn.addEventListener('click', () =>
        {
            console.log("Search Input")
        })
    }
}

fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json')
  .then(response => response.json())
  .then(data => console.log(data));

apiService = 
{
    getBands:(url) => 
    {
        fetch(url)
        .then(response => response.json())
        .then(data => uIService.showBands(uIService.sortByName(data)))
        .catch(error => console.log(error));
    }
}

uIService = 
{
    result: document.getElementById('results'),

    showBands: (data) =>
    {
        let counter = 0;
        for(let band of data)
        {
            counter++;
            uIService.result.innerHTML += (
                `
                <div class="col-2">${counter}</div>
                <div class="col-2">${band.name}</div>
                <div class="col-2">${band.active === true}</div>
                <div class="col-2">${band.tags.map(tag => `${tag}`)}</div>
                <div class="col-2">${band.members.map((member) => 
                {
                    if(member.forever){
                        return
                    } else {
                        return (`${member.name} <br>`)
                    }
                }).join("")}</div>
                <div class="col-2">${band.albums.length}</div>
                `
            )
        }
    }
}




