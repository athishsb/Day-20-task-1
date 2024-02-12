// Fetch data using promises
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch data");
    }
}

// Function to display meme information on the webpage
function displayMemeInfo(element) {
    const mainRow = document.getElementById("mainrow");
    mainRow.innerHTML += `
        <div class="container col-sm" id="main">
            <div class="card" style="width: 18rem;" id="maincard">
                <img src="${element.url}" class="card-img-top img-thumbnail" id="img" alt="Meme Image">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text"><span>Width : </span>${element.width}</p>
                    <p class="card-text"><span>Height : </span>${element.height}</p>
                </div>
            </div>
        </div>
    `;
}

// Function to fetch memes and display them on the webpage
async function displayMemes() {
    try {
        // Fetch memes data from the Imgflip API
        const memesData = await fetchData("https://api.imgflip.com/get_memes");
        const memes = memesData.data.memes;

        // Display each meme
        memes.forEach((element) => {
            displayMemeInfo(element);
        });
    } catch (error) {
        console.error(error);
    }
}

// Call the function to display memes when the script is executed
displayMemes();
