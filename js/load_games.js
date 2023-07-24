const game_container = document.getElementById("games");

async function loadGames() {
    const games_json = (await (await fetch("/games/all.json")).text());
    const games = JSON.parse(games_json);
    for(i in games) {
        // name, thumbnail, slug, desc
        var game = games[i];

        var game_subcontainer = document.createElement("div");

        var game_name = document.createElement("i");
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

        var fragment = document.createDocumentFragment();
        fragment.appendChild(game_name);
        fragment.appendChild(game_thumbnail);
        fragment.appendChild(game_desc);
        fragment.appendChild(game_redirect);

        game_subcontainer.appendChild(fragment);
        game_container.appendChild(game_subcontainer);
    }
}

loadGames();