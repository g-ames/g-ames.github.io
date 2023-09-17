// too lazy so I just copy pasted

function linkToName(link) {
    const cleanedLink = link.replace(/^(https?:\/\/)?(www\.)?/, ''); // Remove "http://" or "https://", and "www."
    const parts = cleanedLink.split('/');
    let name = parts.slice(-3).join('/').replace('index.html', '').replace(/\/+$/, '');
        
    if (parts.length > 3) {
        name += ` (${parts.slice(0, -3).join(', ')})`;
    }
        
    return name.charAt(0).toUpperCase() + name.slice(1);    
}

function setDetailSidebar(details) {
    const { rlink, imagePath, description } = details;
    const link = `/games/${rlink}`;
    const name = linkToName(link);

    detailSidebarName.textContent = name;
    detailSidebarThumbnail.src = imagePath;
    detailSidebarDesc.textContent = description;
    detailSidebarGo.href = link;
    detailSidebarGo.children[0].textContent = `Go to ${name}!`;
    detailSidebarGo.style.display = '';
}


async function loadGames() {
    const games_json = (await (await fetch("/games/all.json")).text());
    const games = JSON.parse(games_json);

    const gameDataList = games.map(game => {
      return {
        link: `/${game.slug}`, // Assuming the link should include the slug
        imagePath: game.thumbnail || example_image, // Use example_image if thumbnail is empty
        description: game.slug // Use the slug for description
      };
    });
    createGameContainers(gameDataList);
}

loadGames();
