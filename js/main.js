
function updateProfile(dataProfile){
    const photo = document.getElementById('profile.photo');

    const name = document.getElementById('profile.name');
    name.innerHTML = `<a href="https://github.com/Manoelllima">${dataProfile.name}</a>` ;

    const job = document.getElementById('profile.job');
    job.innerText = dataProfile.job;

    const location = document.getElementById('profile.location');
    location.innerText = dataProfile.location;

    const phone = document.getElementById('profile.phone');
    phone.innerHTML = `<a href="tel:+55${dataProfile.phone}">${dataProfile.phone}</a>` ;

    const email = document.getElementById('profile.email');
    email.innerHTML = `<a href="mailto:${dataProfile.email}">${dataProfile.email}</a>` ;

    
    
}

function skills(dataProfile){
    const hardSkills = document.getElementById('hardSkills').children[1]
    const softSkills = document.getElementById('softSkills').querySelector('ul');
    dataProfile.skills.hardSkills.map((value)=>{hardSkills.innerHTML += ` <div class="flex__icon"><img src="${value.logo}" alt="${value.name}"></div> <!-- icon -->`})
    dataProfile.skills.softSkills.map((value)=>{softSkills.innerHTML += `<li>${value}</li>`})
    
}

function portfolio(dataProfile){
    const portfolio = document.getElementById('portfolio').querySelector('.description ul')
    dataProfile.portfolio.map((value)=>{ portfolio.innerHTML += `
        <li>
            <h3>${value.name}</h3>
            <a href="${value.url}">${value.url}</a>
        </li>
        `})
    
}

function experience(dataProfile){
    const experience = document.getElementById('experience').querySelector('.description ul')
   
    
    dataProfile.experience.map((value)=>{ 
        experience.innerHTML += `<li><h3>${value.name}</h3></li>`
    })
}

(async ()=>{
    const data = await fetchProfile();
    updateProfile(data)
    skills(data);
    portfolio(data)
    experience(data)
})()

