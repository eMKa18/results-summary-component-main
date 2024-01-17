function getData() {
    fetch('./data.json')
        .then((response) => response.json())
        .then((json) => {
            const reaction = json[0];
            const memory = json[1];
            const verbal = json[2];
            const visual = json[3];
            document.getElementById("reaction-img").src = reaction.icon;
            document.getElementById("memory-img").src = memory.icon;
            document.getElementById("verbal-img").src = verbal.icon;
            document.getElementById("visual-img").src = visual.icon;
            
            document.getElementById("reaction-score").innerHTML = reaction.score
            document.getElementById("memory-score").innerHTML = memory.score
            document.getElementById("verbal-score").innerHTML = verbal.score
            document.getElementById("visual-score").innerHTML = visual.score

            document.getElementById("summary-title-reaction").innerHTML = reaction.category;
            document.getElementById("summary-title-memory").innerHTML = memory.category;
            document.getElementById("summary-title-verbal").innerHTML = verbal.category;
            document.getElementById("summary-title-visual").innerHTML = visual.category;
            
        });
    }
getData();
