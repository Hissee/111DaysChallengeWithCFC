function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Fetched data for user ${userId}`);
        }, 2000);
    });
}

async function displayUserData() {
    const output = document.getElementById("output");
    output.innerHTML += "<p>Fetching user 1...</p>";
    let data1 = await fetchUserData(1);
    output.innerHTML += `<p>${data1}</p>`;

    output.innerHTML += "<p>Fetching user 2...</p>";
    let data2 = await fetchUserData(2);
    output.innerHTML += `<p>${data2}</p>`;

    output.innerHTML += "<p>Fetching user 3...</p>";
    let data3 = await fetchUserData(3);
    output.innerHTML += `<p>${data3}</p>`;

    output.innerHTML += "<p>All users fetched successfully!</p>";
}

displayUserData();
