async function fetchApplications() {
    const response = await fetch('http://localhost:3000/api/admin/applications', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch applications');
    }

    return await response.json();
}

async function updateApplicationStatus(id, status) {
    const response = await fetch('http://localhost:3000/api/admin/applications/status', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({ id, status })
    });

    if (!response.ok) {
        throw new Error('Failed to update application status');
    }
}

async function deleteApplicationById(id) {
    const response = await fetch('http://localhost:3000/api/admin/applications', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({ id })
    });

    if (!response.ok) {
        throw new Error('Failed to delete application');
    }
}