let jobs = [
    { id: 1, company: "Mobile First Corp", title: "React Native Developer", info: "Remote - Full-time", desc: "Build cross-platform mobile applications using React Native.", status: "all" },
    { id: 2, company: "WebFlow Agency", title: "Web Designer & Developer", info: "Los Angeles, CA - Part-time", desc: "Create stunning web experiences for high-profile clients.", status: "all" },
    { id: 3, company: "DataViz Solutions", title: "Data Visualization Specialist", info: "Boston, MA - Full-time", desc: "Transform complex data into compelling visualizations.", status: "all" },
    { id: 4, company: "CloudFirst Inc", title: "Backend Developer", info: "Seattle, WA - Full-time", desc: "Design and maintain scalable backend systems.", status: "all" },
    { id: 5, company: "Innovation Labs", title: "UI/UX Engineer", info: "Austin, TX - Full-time", desc: "Create beautiful and functional user interfaces.", status: "all" },
    { id: 6, company: "MegaCorp Solutions", title: "JavaScript Developer", info: "New York, NY - Full-time", desc: "Build enterprise applications with JavaScript.", status: "all" },
    { id: 7, company: "StartupXYZ", title: "Full Stack Engineer", info: "Remote - Full-time", desc: "Join our fast-growing startup and work on our core platform.", status: "all" },
    { id: 8, company: "TechCorp Industries", title: "Senior Frontend Developer", info: "San Francisco, CA - Full-time", desc: "Build scalable web applications using React and TypeScript.", status: "all" }
];

let currentTab = 'all';

function render() {
    const list = document.getElementById('jobs-list');
    const emptyMsg = document.getElementById('no-jobs-msg');
    
    const filtered = currentTab === 'all' ? jobs : jobs.filter(j => j.status === currentTab);

    document.getElementById('total-stat').innerText = jobs.length;
    document.getElementById('interview-stat').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-stat').innerText = jobs.filter(j => j.status === 'rejected').length;
    document.getElementById('job-count-text').innerText = `${filtered.length} jobs`;

    list.innerHTML = '';

    if (filtered.length === 0) {
        emptyMsg.classList.remove('hidden');
    } else {
        emptyMsg.classList.add('hidden');
        filtered.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card';
            
            // Logic for status text and visual class
            const statusLabel = job.status === 'all' ? 'Not Applied' : job.status;
            const statusClass = `tag-${job.status}`; // Example: tag-interview, tag-rejected, tag-all

            card.innerHTML = `
                <button class="delete-btn" onclick="deleteJob(${job.id})" title="Remove Job">🗑️</button>
                <h3 class="company-name">${job.company}</h3>
                <p class="position">${job.title}</p>
                <p class="job-info">${job.info}</p>
                <div class="status-tag ${statusClass}">${statusLabel}</div>
                <p class="description">${job.desc}</p>
                <div class="card-actions">
                    <button class="btn-interview" onclick="updateStatus(${job.id}, 'interview')">
                        ${job.status === 'interview' ? 'UNMARK' : 'INTERVIEW'}
                    </button>
                    <button class="btn-rejected" onclick="updateStatus(${job.id}, 'rejected')">
                        ${job.status === 'rejected' ? 'UNMARK' : 'REJECTED'}
                    </button>
                </div>
            `;
            list.appendChild(card);
        });
    }
}

window.updateStatus = (id, status) => {
    const jobIndex = jobs.findIndex(j => j.id === id);
    if (jobIndex !== -1) {
        jobs[jobIndex].status = (jobs[jobIndex].status === status) ? 'all' : status;
        render();
    }
};

window.deleteJob = (id) => {
    if(confirm("Are you sure?")) {
        jobs = jobs.filter(j => j.id !== id);
        render();
    }
};

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.tab-btn.active').classList.remove('active');
        e.target.classList.add('active');
        currentTab = e.target.dataset.tab;
        render();
    });
});

render();