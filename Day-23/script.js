// https://api.github.com/users/akash/repos?per_page=10


let heading = document.querySelector('.heading');
let transliteration = document.querySelector('.transliteration');

let input = document.querySelector('input');

let btn = document.querySelector('.btn');







btn.addEventListener('click', () => {
    async function abcd(chapterNo) {
        let data = await fetch(`https://vedicscriptures.github.io/chapter/${input.value}`);

        let result = await data.json();

        return result;
    }
    async function finalData(params) {
        let data = await abcd();
        console.log(data)
        heading.innerHTML = data.name + `(${data.translation})`
        transliteration.innerHTML = data.summary.en
    }


    finalData();
})

