document.addEventListener('DOMContentLoaded', function() {
    const subjects = [
        {name: "Mathematics", id: "math"},
        {name: "Physics", id: "physics"},
        {name: "Biology", id: "biology"}
    ];

    const subjectList = document.getElementById('subjectList');
    const contentArea = document.getElementById('contentArea');

    // Populate subjects
    subjects.forEach(subject => {
        let li = document.createElement('li');
        li.textContent = subject.name;
        li.onclick = () => loadSubjectContent(subject.id);
        subjectList.appendChild(li);
    });

    function loadSubjectContent(subjectId) {
        // Here, you would fetch the content dynamically or load from static files
        // For brevity, we'll use static content
        contentArea.innerHTML = `
            <h2>${subjects.find(s => s.id === subjectId).name}</h2>
            <button onclick="loadLessons('${subjectId}')">Lessons</button>
            <button onclick="loadTests('${subjectId}')">Test Papers</button>
            <button onclick="loadBits('${subjectId}')">Bit Papers</button>
            <button onclick="loadQuizzes('${subjectId}')">Quizzes</button>
        `;
    }

    // These functions would load respective content
    function loadLessons(subjectId) {
        contentArea.innerHTML = `<div>Sample lesson for ${subjectId}. Here could be videos or text.</div>`;
    }

    function loadTests(subjectId) {
        contentArea.innerHTML = `<div>Sample tests for ${subjectId}.</div>`;
    }

    function loadBits(subjectId) {
        contentArea.innerHTML = `<div>Bit papers for quick revision in ${subjectId}.</div>`;
    }

    function loadQuizzes(subjectId) {
        contentArea.innerHTML = `<div>Short quizzes for ${subjectId}.</div>`;
    }
});