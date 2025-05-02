const date = new Date();
    const day = date.getDate();
    const weekday = date.toLocaleString('default', { weekday: 'long' });
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    document.getElementById("day").textContent = day;
    document.getElementById("weekday").textContent = weekday;
    document.getElementById("month").textContent = month;
    document.getElementById("year").textContent = year;