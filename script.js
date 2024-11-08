let isSorted = false;

function filterProjects(category) {
    const projectsContainer = document.getElementById('projectsContainer');
    const projects = document.querySelectorAll('.project-card');

    if (category === 'all') {
        if (!isSorted) {
            projects.forEach(project => {
                project.style.display = 'block';
            });
            isSorted = true;
        } else {
            const sortedProjects = Array.from(projects).sort((a, b) => {
                const nameA = a.querySelector('h3').innerText.toUpperCase();
                const nameB = b.querySelector('h3').innerText.toUpperCase();
                return nameA.localeCompare(nameB);
            });

            projectsContainer.innerHTML = '';
            sortedProjects.forEach(project => {
                projectsContainer.appendChild(project);
            });
            isSorted = false;
        }
    } else {
        projects.forEach(project => {
            if (project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
        isSorted = false;
    }
}
