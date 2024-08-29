document.addEventListener('DOMContentLoaded', function() {
    const subjects = [
        {name: "Mathematics", id: "math", progress: 0},
        {name: "Physics", id: "physics", progress: 0},
        {name: "Biology", id: "biology", progress: 0}
    ];

    const subjectList = document.getElementById('subjectList');
    const contentArea = document.getElementById('contentArea');
    const progressBarContainer = document.getElementById('progressBarContainer');

    // Initialize progress bars
    subjects.forEach(subject => {
        const progressBar = document.createElement('progress');
        progressBar.value = subject.progress;
        progressBar.max = "100";
        progressBar.id = `progress-${subject.id}`;
        progressBarContainer.appendChild(progressBar);
    });

    // Populate subjects
    subjects.forEach(subject => {
        const li = document.createElement('li');
        li.textContent = subject.name;
        li.onclick = () => loadSubjectContent(subject.id);
        subjectList.appendChild(li);
    });

    function updateProgress(subjectId, increment) {
        const subject = subjects.find(s => s.id === subjectId);
        if (subject) {
            subject.progress += increment;
            if (subject.progress > 100) subject.progress = 100;
            const progressBar = document.getElementById(`progress-${subjectId}`);
            if (progressBar) {
                progressBar.value = subject.progress;
            }
        }
    }

    // Assume loadSubjectContent, loadLessons, loadTests, loadBits, loadQuizzes are implemented
    // Here's an example of how to call updateProgress from within these functions:
    function loadQuizzes(subjectId) {
        // Quiz logic here, then:
        updateProgress(subjectId, 20); // Update progress by 20% for example
    }

    // Example function to simulate completing a quiz or lesson
    function simulateProgress(subjectId) {
        const randomIncrement = Math.floor(Math.random() * 20) + 10; // 10-30% random increment
        updateProgress(subjectId, randomIncrement);
    }

    // Simulate progress updates for demonstration purposes
    subjects.forEach(subject => {
        const simulateButton = document.createElement('button');
        simulateButton.textContent = `Simulate Progress in ${subject.name}`;
        simulateButton.onclick = () => simulateProgress(subject.id);
        progressBarContainer.appendChild(simulateButton);
    });
});