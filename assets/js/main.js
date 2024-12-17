document.addEventListener('DOMContentLoaded', () => {
    // PROJECT MANIPULATION
    const projectContainer = document.getElementById('project-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-white text-black p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform hover:cursor-pointer';

        projectCard.addEventListener('click', (event) => {
            if(project.site_link !== 'unknown') {
                window.location.href = project.site_link
            } else {
                event.preventDefault()
                alert('No link available')
            }
        })

        projectCard.innerHTML = `
            <h2 class="text-xl font-bold mb-2">${project.title}</h2>
            <p class="text-sm mb-4">${project.description}</p>
        `;

        projectContainer.appendChild(projectCard);
    });

    // ICON MANIPULATION
    const iconContainer = document.getElementById('icon-container')
    icons.forEach(icon => {
        const svgIcon = document.createElement('div')
        svgIcon.className = 'relative group'

        svgIcon.innerHTML = icon.html

        iconContainer.appendChild(svgIcon)
    })

    // SOCIAL MEDIA MANIPULATION
    const socmedContainer = document.getElementById('socmed-container')
    socmed.forEach(socmed => {
        const svgIcon = document.createElement('div')
        svgIcon.className = 'hover:cursor-pointer'
        svgIcon.setAttribute('onclick', "window.location.href = 'https://instagram.com/bagus.jpeg'")

        svgIcon.innerHTML = socmed.html

        socmedContainer.appendChild(svgIcon)
    })
});
