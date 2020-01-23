const container = document.querySelector("#container")


document.querySelector("#saveButton").addEventListener("click", event => {

    const favThing = document.querySelector("#thing").value;

    const location = document.querySelector("#store").value;

    container.innerHTML += `
        <section>
            <h1>${favThing}</h1>
            <div>${location}</div>
        </section>
`
})