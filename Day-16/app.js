
let searchBtn =  document.querySelector('.search');
let  usernameinp =  document.querySelector('.usernameinp');
let  card =  document.querySelector('.card');




function getProfileData(userName){
    return fetch(`https://api.github.com/users/${userName}`)
    .then((raw) => {
        if(!raw.ok) throw new Error("User Not Found");
        return raw.json();
    })
}



function getRepos(userName){
    return fetch(`https://api.github.com/users/${userName}/repos?per_page=5`)
    .then((raw) => {
        if(!raw.ok) throw new Error("Faild to Fetch Repos");
        return raw.json();
    })
}



function decorateProfileData(details){
    console.log(details);
    
    let data = `<div class="flex items-center space-x-4">
        <img
          src="${details.avatar_url}"
          alt="Octocat"
          class="w-16 h-16 rounded-full"
        />
        <div>
          <h2 class="text-lg font-semibold text-gray-800">${details.name}</h2>
          <p class="text-gray-600">@${details.login}</p>
        </div>
      </div>

      <div class="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <span class="font-semibold">Public Repos:</span>${details.public_repos}
        </div>
        <div>
          <span class="font-semibold">Followers:</span> ${details.followers}
        </div>
        <div>
          <span class="font-semibold mr-2">Following:</span>${details.following}
        </div>
        <div>
          <span class="font-semibold mr-2">Location:</span>${details.location ? details.location: "Not available"}
        </div>
        <div class="col-span-2">
          <span class="font-semibold mr-2 ">Bio:</span>${details.bio ? details.bio : "Not available"}
        </div>
      </div>`

      card.innerHTML = data;
}





searchBtn.addEventListener('click',()=>{
    let username = usernameinp.value.trim();
    if(username.length > 0){
        getProfileData(username).then((data)=>{
            // console.log(data);
            decorateProfileData(data);
        })
    }
    else{
        alert("No Username Found");
    }
})