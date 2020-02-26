async function loadSimpleInfoUserWhitDefaultAlliance(){

    var promise = await new Promise(((resolve, reject) => {
        $.ajax({
            url: 'https://s166-es.ogame.gameforge.com/api/players.xml',
            type: 'get',
            crossDomain: true,
            header:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            contentType: 'text/xml',
            success: function (data) {

                var xml = $(data);
                var playersAlliance = xml.find('player[alliance=500013]');
                var jsonPlayerAlliance = [];
                for(var i=0;i<playersAlliance.length;i++){
                    jsonPlayerAlliance.push(new PlayerSimpleInfo(playersAlliance[i]));
                }
                playerInfoString = JSON.stringify(jsonPlayerAlliance);
                resolve(JSON.parse(playerInfoString));
            },
            error: function (error){
                reject(error);
            }
        });
    }));
    return promise;
}

async function loadFullInfoUserWhitByUsersId(idUser){

    var promise = new Promise(((resolve, reject) => {
        $.ajax({
            url: `https://s166-es.ogame.gameforge.com/api/playerData.xml?id=${idUser}`,
            type: 'get',
            header:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            crossDomain: true,
            contentType: 'text/xml',
            success: function (data) {
                var xml = $(data).find('playerData')[0];
                var playerfullInfoObject = new PlayerFullInfo(xml);
                resolve(playerfullInfoObject);
            },
            error: function (error){
                reject(error);
            }
        });
    }));

    return promise;
}
