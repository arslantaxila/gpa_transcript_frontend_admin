document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('token')) {
        window.location.href = 'login.html';
    } else {
        loadApplications();
    }
});

function loadApplications() {
    fetchApplications().then(applications => {
        const applicationsDiv = document.getElementById('applications');
        applicationsDiv.innerHTML = '';
        applications.forEach(application => {
            const applicationCard = document.createElement('div');
            applicationCard.className = 'card mt-3';
            applicationCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${application.student_name}</h5>
                    <p class="card-text">Student ID: ${application.student_id}</p>
                    <p class="card-text">Program: ${application.program}</p>
                    <p class="card-text">Contact Info: ${application.contact_info}</p>
                    <p class="card-text">Status: ${application.status}</p>
                    <button class="btn btn-success" onclick="updateStatus(${application.id}, 'Ready to Collect')">Mark as Ready to Collect</button>
                    <button class="btn btn-danger" onclick="deleteApplication(${application.id})">Delete</button>
                </div>
            `;
            applicationsDiv.appendChild(applicationCard);
        });
    });
}

function updateStatus(id, status) {
    updateApplicationStatus(id, status).then(() => {
        loadApplications();
    });
}

function deleteApplication(id) {
    deleteApplicationById(id).then(() => {
        loadApplications();
    });
}