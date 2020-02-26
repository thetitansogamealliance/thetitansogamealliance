$(document).ready(function(){
    //100156 - id Test
    const idPlayerTest = 100156;


    loadSimpleInfoUserWhitDefaultAlliance().then((responseSimplePlayers) => {
        for(var p=0;p<responseSimplePlayers.length;p++){
            loadFullInfoUserWhitByUsersId(responseSimplePlayers[p].id).then((responseFullPlayers) => {
                console.log(responseFullPlayers);
                $('#infoPlayersAlliance').append(loadCard(responseFullPlayers));
                for(var p=0;p<responseFullPlayers.planets.length;p++){
                    $(`div[data-id-player=${responseFullPlayers.id}] .planets-row`).append(addCoordPlanet(responseFullPlayers.planets[p].coord));
                }

            })
        }
    });



});






