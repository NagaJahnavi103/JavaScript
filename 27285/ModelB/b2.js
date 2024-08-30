document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'timeGridWeek',
        editable: true,
        droppable: true,
        eventReceive: function(info) {
            let outfit = JSON.parse(info.event.title);
            info.event.setProp('title', 'Outfit: ' + outfit.name);
        },
        events: loadEventsFromStorage(),
        eventClick: function(info) {
            if (confirm('Remove this outfit from the day?')) {
                info.event.remove();
                saveEventsToStorage(calendar.getEvents());
            }
        }
    });

    calendar.render();

    // Mock wardrobe items
    const wardrobeItems = [
        {id: 1, name: "White Shirt", type: "top"},
        {id: 2, name: "Blue Jeans", type: "bottom"},
        {id: 3, name: "Sunglasses", type: "accessory"}
    ];

    // Populate wardrobe
    wardrobeItems.forEach(item => {
        let div = document.createElement('div');
        div.className = 'wardrobe-item';
        div.draggable = true;
        div.textContent = item.name;
        div.dataset.item = JSON.stringify(item);
        document.getElementById('wardrobe').appendChild(div);
    });

    // Drag and drop functionality
    document.querySelectorAll('.wardrobe-item').forEach(item => {
        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', e.target.dataset.item);
        });
    });

    // Weather integration (this would typically call an API)
    function updateWeather() {
        // Mock weather update
        const weather = { condition: "Sunny", temp: 75 };
        document.getElementById('weather-info').innerHTML = `Weather: ${weather.condition}, ${weather.temp}°F`;
        suggestOutfit(weather);
    }

    function suggestOutfit(weather) {
        let suggestion;
        if (weather.temp > 70) {
            suggestion = {name: "Summer Outfit", items: ["White Shirt", "Blue Jeans", "Sunglasses"]};
        } else {
            suggestion = {name: "Winter Outfit", items: ["Sweater", "Coat", "Scarf"]}; // Mock items
        }
        alert(`Suggested outfit for today: ${suggestion.name}`);
        // Here you could automatically add this suggestion to the calendar or show it to the user
    }

    // Initial weather update
    updateWeather();

    // Save events to local storage
    function saveEventsToStorage(events) {
        localStorage.setItem('calendarEvents', JSON.stringify(events.map(event => ({
            title: event.title,
            start: event.start,
            end: event.end
        }))));
    }

    function loadEventsFromStorage() {
        return JSON.parse(localStorage.getItem('calendarEvents')) || [];
    }

    // Save events when changed
    calendar.on('eventChange', function() {
        saveEventsToStorage(calendar.getEvents());
    });
});