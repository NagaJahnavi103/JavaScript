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
        // Clear the content area and add buttons dynamically
        contentArea.innerHTML = `
            <h2>${subjects.find(s => s.id === subjectId).name}</h2>
            <div id="buttonsArea"></div>
        `;

        const buttonsArea = document.getElementById('buttonsArea');

        // Add buttons with event listeners
        const lessonsButton = document.createElement('button');
        lessonsButton.textContent = "Lessons";
        lessonsButton.addEventListener('click', () => loadLessons(subjectId));
        buttonsArea.appendChild(lessonsButton);

        const testsButton = document.createElement('button');
        testsButton.textContent = "Test Papers";
        testsButton.addEventListener('click', () => loadTests(subjectId));
        buttonsArea.appendChild(testsButton);

        const bitsButton = document.createElement('button');
        bitsButton.textContent = "Bit Papers";
        bitsButton.addEventListener('click', () => loadBits(subjectId));
        buttonsArea.appendChild(bitsButton);

        const quizzesButton = document.createElement('button');
        quizzesButton.textContent = "Quizzes";
        quizzesButton.addEventListener('click', () => loadQuizzes(subjectId));
        buttonsArea.appendChild(quizzesButton);
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