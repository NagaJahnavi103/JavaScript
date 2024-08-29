document.addEventListener('DOMContentLoaded', function() {
    const subjects = [
        {id: 'math', name: 'Mathematics', content: 'Here are some math lessons...'},
        {id: 'science', name: 'Science', content: 'Explore the wonders of science...'},
        {id: 'history', name: 'History', content: 'Learn about historical events...'}
    ];

    const subjectList = document.getElementById('subjectList');
    const mainContent = document.getElementById('mainContent');

    // Populate the navigation with subjects
    subjects.forEach(subject => {
        const listItem = document.createElement('li');
        listItem.textContent = subject.name;
        listItem.onclick = function() {
            loadSubjectContent(subject);
        };
        subjectList.appendChild(listItem);
    });

    // Function to load subject content into the main area
    function loadSubjectContent(subject) {
        mainContent.innerHTML = `
            <h2>${subject.name}</h2>
            <div>${subject.content}</div>
            <!-- Here you could include links or buttons for lessons, quizzes, etc. -->
        `;
        
        // Example: Adding a button to simulate lesson completion or further navigation
        const lessonButton = document.createElement('button');
        lessonButton.textContent = 'View Lessons';
        lessonButton.onclick = function() {
            mainContent.innerHTML += `<p>Loading lessons for ${subject.name}...</p>`;
            // Here would go the logic to load lessons or other materials
        };
        mainContent.appendChild(lessonButton);
    }

    // Initial content load (optional)
    if (subjects.length > 0) {
        loadSubjectContent(subjects[0]);
    }
});