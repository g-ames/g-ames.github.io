const game_container = document.getElementById("games");

async function loadGames() {
    const games_json = (await (await fetch("/games/all.json")).text());
    const games = JSON.parse(games_json);
    for(i in games) {
        // name, thumbnail, slug, desc
        var game = games[i];

        var game_subcontainer = document.createElement("div");
        game_subcontainer.classList = ["game_container"];

        var game_name = document.createElement("h3");
        game_name.innerText = game["name"];
        game_name.for = `thumbnail_${i}`;

        var game_thumbnail = document.createElement("img");
        game_thumbnail.src = game["thumbnail"];
        game_thumbnail.id = `thumbnail_${i}`;

        game_thumbnail.style.width = "204px";
        game_thumbnail.style.height = "152px";

        var game_desc = document.createElement("p");
        game_desc.innerText = game["desc"];

        var game_redirect = document.createElement("a");
        game_redirect.href = `/games/game/${game["slug"]}`;

        game_redirect.appendChild(game_name);
        game_redirect.appendChild(game_thumbnail);
        game_subcontainer.appendChild(game_redirect);

        game_container.appendChild(game_subcontainer);
    }
}

loadGames();