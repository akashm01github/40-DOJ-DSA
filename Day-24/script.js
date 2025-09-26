let heading = document.querySelector('.heading');
let p = document.querySelector('p');


let ol = document.querySelector('ol')
async function getData() {
    const url = 'https://quizmania-api.p.rapidapi.com/trivia-filtered?category=geography&difficulty=easy';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4fbb53aaefmshef8bdf56f7733b0p1ae01bjsn5fa1ede1a4f0',
            'x-rapidapi-host': 'quizmania-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        heading.innerHTML = result.question.question;
        // p.innerHTML = result.question.explanation
        console.log(result)
        let optionsAnswer = result.question.answers;

        
        optionsAnswer.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML = `${element}`
            ul.appendChild(li);
        });
        
    } catch (error) {
        console.error(error);
    }
}




getData();