// https://api.github.com/users/akash/repos?per_page=10


// let heading = document.querySelector('.heading');
// let transliteration = document.querySelector('.transliteration');

// let input = document.querySelector('input');

// let btn = document.querySelector('.btn');







// btn.addEventListener('click', () => {
//     async function abcd(chapterNo) {
//         let data = await fetch(`https://vedicscriptures.github.io/chapter/${input.value}`);

//         let result = await data.json();

//         return result;
//     }
//     async function finalData(params) {
//         let data = await abcd();
//         console.log(data)
//         heading.innerHTML = data.name + `(${data.translation})`
//         transliteration.innerHTML = data.summary.en
//     }


//     finalData();
// })


// async function getData() {
//     const url = 'https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/history/india/delhi/delhi';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '4fbb53aaefmshef8bdf56f7733b0p1ae01bjsn5fa1ede1a4f0',
//             'x-rapidapi-host': 'daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getData();


async function getData() {
   const url = 'https://background-removal4.p.rapidapi.com/v1/results?mode=fg-image';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '4fbb53aaefmshef8bdf56f7733b0p1ae01bjsn5fa1ede1a4f0',
		'x-rapidapi-host': 'background-removal4.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({
        image_url: 'https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg'
    })
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

getData();







