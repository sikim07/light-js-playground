const rootDivElement = document.querySelectorAll("#root")[0];

// In case of hard data
const init = async () => {
    const r = await fetch("./data.json");
    const objectData = await r.json();
    const arrayData = Object.values(objectData);
    for (let i = 0; i < arrayData.length; i++) {
        const divElement = document.createElement("div");
        for (let j = 0; j < arrayData[i].length; j++) {
            divElement.textContent += `id: ${arrayData[i][0].at(0)}`;
            divElement.textContent += `객실 수: ${arrayData[i][0].at(1)}`;
            divElement.textContent += `체크인 날짜: ${arrayData[i][0].at(2)}`;
            divElement.textContent += `체크아웃 날짜: ${arrayData[i][0].at(3)}`;
        }
        rootDivElement.appendChild(divElement);
    }
};

// In case of using external API call
const callAPI = async () => {
    try {
        const r = await fetch("/api/start", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                problem: 1,
            }),
        });

        if (!r.ok) {
            console.log(await r.text());
        }
    } catch (e) {}
};

callAPI();
