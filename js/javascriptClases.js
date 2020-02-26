class PlayerSimpleInfo {
    id;
    name;
    alliance;

    constructor(playerArray) {
        this.getId(playerArray);
        this.getName(playerArray);
        this.getAlliance(playerArray);
    }

    getId = function (playerArray){
        this.id = playerArray.getAttribute('id');
    }
    getName = function (playerArray){
        this.name = playerArray.getAttribute('name');
    }
    getAlliance = function (playerArray){
        this.alliance = playerArray.getAttribute("alliance");
    }
    getJson = function (){
        return {
            'id':this.id,
            'name':this.name,
            'alliance_id':this.alliance
        }
    }
}

class PlayerFullInfo {
    id;
    name;
    positions;
    planets;
    alliance;

    constructor(playerFullInfo) {
        this.id = this.getId(playerFullInfo);
        this.name = this.getName(playerFullInfo);
        this.positions = this.getPositions(playerFullInfo);
        this.planets = this.getPlanets(playerFullInfo);
        this.alliance = this.getAlliance(playerFullInfo);
    }

    getId = function(playerFullInfo){
        return playerFullInfo.getAttribute('id');
    }
    getName = function (playerFullInfo){
        return playerFullInfo.getAttribute('name');
    }
    getPositions = function (playerFullInfo){
        var positions = playerFullInfo.getElementsByTagName('position');
        var positionsJsons = [];
        for(var i=0;i<positions.length;i++){
            var object = new Position(positions[i]);
            positionsJsons.push(object.getJson());
        }
        return positionsJsons;
    }
    getPlanets = function (playerFullInfo){
        var planetsXml = playerFullInfo.getElementsByTagName('planet');
        var planetsJson = [];
        for (var i=0;i<planetsXml.length;i++){
            var planetObjectTmp = new Planet(planetsXml[i])
            planetsJson.push(planetObjectTmp.toJson());
        }
        return planetsJson;
    }
    getAlliance = function (playerFullInfo){
        var allianceXml = playerFullInfo.getElementsByTagName('alliance')[0];
        var allianceObject = new Alliance(allianceXml);
        var allianceJson = allianceObject.toJson();
        return allianceJson;
    }

}


class Position {
    type;
    score;
    value;

    constructor(position) {
        this.type = this.getType(position);
        this.score = this.getScore(position);
        this.value = this.getValue(position);
    }

    getType = function (position){
        return position.getAttribute('type');
    }
    getScore = function (position) {
        return position.getAttribute('score');
    }
    getValue = function (position) {
        return position.innerHTML;
    }
    getJson = function (){
        return {
            'type':this.type,
            'score':this.score,
            'value':this.value
        }
    }
}

class Planet {
    id;
    name;
    coord;
    moon;

    constructor(planet) {
        this.id = this.getId(planet);
        this.name = this.getName(planet);
        this.coord = this.getCoords(planet);
        this.moon = this.getMoon(planet);
    }

    getId = function(planet){
        return planet.getAttribute('id');
    }
    getName = function(planet){
        return planet.getAttribute('name');
    }
    getCoords = function(planet){
        return planet.getAttribute('coords');
    }
    getMoon = function(planet){
        var moon = planet.getElementsByTagName('moon');
        if(moon.length > 0){
            var moonObject = new Moon(moon[0]);
            moon = moonObject.toJson();
            return moon;
        }
        return {};
    }
    toJson = function (){
        return {
            'id':this.id,
            'name':this.name,
            'coord':this.coord,
            'moon':this.moon
        }
    }
}
class Moon {
    id;
    name;
    size;

    constructor(moon) {
        this.id = this.getId(moon);
        this.name = this.getName(moon);
        this.size = this.getSize(moon);
    }

    getId = function(moon){
        return moon.getAttribute('id');
    }
    getName = function(moon){
        return moon.getAttribute('name');
    }
    getSize = function(moon){
        return moon.getAttribute('size');
    }
    toJson = function (){
        return {
            'id':this.id,
            'name':this.name,
            'size':this.size
        }
    }
}
class Alliance {
    id;
    name;
    tag;

    constructor(alliance) {
        this.id = this.getId(alliance);
        this.name = this.getName(alliance);
        this.tag = this.getTag(alliance);
    }

    getId = function(alliance){
        return alliance.getAttribute('id');
    }
    getName = function(alliance){
        return alliance.getElementsByTagName('name')[0].innerHTML
    }
    getTag = function(alliance){
        return alliance.getElementsByTagName('tag')[0].innerHTML
    }
    toJson = function (){
        return {
            'id':this.id,
            'name':this.name,
            'tag':this.tag
        }
    }
}