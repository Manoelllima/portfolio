
function updateProfile(dataProfile){
    const photo = document.getElementById('profile.photo');

    const name = document.getElementById('profile.name');
    name.innerText = dataProfile.name;

    const job = document.getElementById('profile.job');
    job.innerText = dataProfile.job;

    const location = document.getElementById('profile.location');
    location.innerText = dataProfile.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = dataProfile.phone;

    const email = document.getElementById('profile.email');
    email.innerHTML = dataProfile.email;

    
    
}

function skills(dataProfile){
    const hardSkills = document.getElementById('hardSkills').children[1]
    
    dataProfile.skills.hardSkills.map((value)=>{
        console.log(value);
        
        hardSkills.innerHTML += ` <div class="flex__icon"><img src="${value.logo}" alt="${value.name}"></div> <!-- icon -->`
        
    })
    
}

(async ()=>{
    const data = await fetchProfile();
    
    updateProfile(data)
    skills(data);
})()

