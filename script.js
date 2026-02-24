// Initial Data from provided Design 
let jobs = [
    { id: 1, company: "Mobile First Corp", title: "React Native Developer", info: "Remote - Full-time - $130,000 - $175,000", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "all" },
    { id: 2, company: "WebFlow Agency", title: "Web Designer & Developer", info: "Los Angeles, CA - Part-time - $80,000 - $120,000", desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "all" },
    { id: 3, company: "DataViz Solutions", title: "Data Visualization Specialist", info: "Boston, MA - Full-time - $125,000 - $155,000", desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "all" },
    { id: 4, company: "CloudFirst Inc", title: "Backend Developer", info: "Seattle, WA - Full-time - $140,000 - $190,000", desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status: "all" },
    { id: 5, company: "Innovation Labs", title: "UI/UX Engineer", info: "Austin, TX - Full-time - $110,000 - $150,000", desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "all" },
    { id: 6, company: "MegaCorp Solutions", title: "JavaScript Developer", info: "New York, NY - Full-time - $130,000 - $170,000", desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation and professional development opportunities.", status: "all" },
    { id: 7, company: "StartupXYZ", title: "Full Stack Engineer", info: "Remote - Full-time - $120,000 - $160,000", desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: "all" },
    { id: 8, company: "TechCorp Industries", title: "Senior Frontend Developer", info: "San Francisco, CA - Full-time - $130,000 - $175,000", desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status: "all" }
];

let currentTab = 'all';

function render() {
    const list = document.getElementById('jobs-list');
    const emptyMsg = document.getElementById('no-jobs-msg');
    const filtered = currentTab === 'all' ? jobs : jobs.filter(j => j.status === currentTab);

    // Update Dashboard 
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
            card.innerHTML = `
                <button class="delete-btn" onclick="deleteJob(${job.id})">🗑️</button>
                <h3 class="company-name">${job.company}</h3>
                <p class="position">${job.title}</p>
                <p class="job-info">${job.info}</p>
                <div class="status-tag">${job.status === 'all' ? 'NOT APPLIED' : job.status.toUpperCase()}</div>
                <p class="description">${job.desc}</p>
                <div class="card-actions">
                    <button class="btn-interview" onclick="updateStatus(${job.id}, 'interview')">INTERVIEW</button>
                    <button class="btn-rejected" onclick="updateStatus(${job.id}, 'rejected')">REJECTED</button>
                </div>
            `;
            list.appendChild(card);
        });
    }
}

// Functionalities
window.updateStatus = (id, status) => {
    const job = jobs.find(j => j.id === id);
    job.status = (job.status === status) ? 'all' : status; // Toggle logic
    render();
};

window.deleteJob = (id) => {
    jobs = jobs.filter(j => j.id !== id);
    render();
};

// Tab Switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.tab-btn.active').classList.remove('active');
        e.target.classList.add('active');
        currentTab = e.target.dataset.tab;
        render();
    });
});

render();