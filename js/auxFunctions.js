function loadCard(infoPlayer){

    return `<div data-id-player="${infoPlayer.id}" class="col-4 pb-3">
                <div class="card  bg-card-color">
                    <div class="card-header text-center">
                        <h5 class="text-white">${infoPlayer.name}</h5>
                    </div>
                    <div class="card-body">

                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-3">
                                    <img src="img/galaxy-icon-white.png" class="w-100"/>
                                </div>
                                <div class="col-9">
                                    <h5 class="text-white text-uppercase">Planetas</h5>
                                </div>
                            </div>

                            <div class="row planets-row">
                                <!-- Planetas -->
                            </div>

                            

                        </div>

                        <div class="row pb-1">
                            <div class="col-3">
                                <img src="img/graphic.png" class="w-50"/>
                            </div>
                            <div class="col-9">
                                <h5 class="text-white text-uppercase">PUNTOS</h5>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <p class="text-white">Total: </p>
                            </div>
                            <div class="col-6">
                                <p class="text-white">${infoPlayer.positions[0].value}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <p class="text-white">Economia: </p>
                            </div>
                            <div class="col-6">
                                <p class="text-white">${infoPlayer.positions[1].value}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <p class="text-white">Investigacion: </p>
                            </div>
                            <div class="col-6">
                                <p class="text-white">${infoPlayer.positions[2].value}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <p class="text-white">Flota: </p>
                            </div>
                            <div class="col-6">
                                <p class="text-white">${infoPlayer.positions[3].value}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <p class="text-white">Flota (Lost): </p>
                            </div>
                            <div class="col-6">
                                <p class="text-white">${infoPlayer.positions[4].value}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <p class="text-white">Flota (Build): </p>
                            </div>
                            <div class="col-6">
                                <p class="text-white">${infoPlayer.positions[5].value}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <p class="text-white">Flota (Destroy): </p>
                            </div>
                            <div class="col-6">
                                <p class="text-white">${infoPlayer.positions[6].value}</p>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-6">
                                <p class="text-white">Honor: </p>
                            </div>
                            <div class="col-6">
                                <p class="text-white">${infoPlayer.positions[7].value}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>`;
}


function addCoordPlanet(coordPlanet){
    return `<div class="col-4">
                <p class="planet-info-cards">
                ${coordPlanet}
                </p>
            </div>`;
}