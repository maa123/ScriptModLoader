var sml.name="ScriptMODLoader";
var sml.version=1;
var sml.hooks={};
var sml.hooknames=["attackHook","chatHook","continueDestroyBlock","destroyBlock","projectileHitEntityHook","eatHook","entityAddedHook","entityHurtHook","entityRemovedHook","explodeHook","serverMessageReceiveHook","deathHook","playerAddExpHook","playerExpLevelChangeHook","redstoneUpdateHook","screenChangeHook","newLevel","startDestroyBlock","projectileHitBlockHook","modTick","useItem"];
var i = 0;
	while(i < sml.hooknames.length) {
    	sml.hooks[sml.hooknames[i]]=[];
    	i=(i+1)|0;
	}
i=null;
function addHook(hookname, callback){
	if(sml.hooknames.indexOf(hookname)>=0){
		sml.hooks[hookname].push(callback);
		return true;
	}else{
		return false;
	}
}


// can use preventDefault()
function attackHook(attacker, victim){
	var i = 0;
	while(i < sml.hooks["attackHook"].length) {
    	sml.hooks["attackHook"][i](attacker,victim);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function chatHook(str){
	var i = 0;
	while(i < sml.hooks["chatHook"].length) {
    	sml.hooks["chatHook"][i](str);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function continueDestroyBlock(x, y, z, side, progress){
	var i = 0;
	while(i < sml.hooks["continueDestroyBlock"].length) {
    	sml.hooks["continueDestroyBlock"][i](x,y,z,side,progress);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function destroyBlock(x, y, z, side){
	var i = 0;
	while(i < sml.hooks["destroyBlock"].length) {
    	sml.hooks["destroyBlock"][i](x,y,z,side);
    	i=(i+1)|0;
	}
}
function projectileHitEntityHook(projectile, targetEntity){
	var i = 0;
	while(i < sml.hooks["projectileHitEntityHook"].length) {
    	sml.hooks["projectileHitEntityHook"][i](projectile,targetEntity);
    	i=(i+1)|0;
	}
}
function eatHook(hearts, saturationRatio){
	var i = 0;
	while(i < sml.hooks["eatHook"].length) {
    	sml.hooks["eatHook"][i](hearts,saturationRatio);
    	i=(i+1)|0;
	}
}
function entityAddedHook(entity){
	var i = 0;
	while(i < sml.hooks["entityAddedHook"].length) {
    	sml.hooks["entityAddedHook"][i](entity);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function entityHurtHook(attacker, victim, halfhearts){
	var i = 0;
	while(i < sml.hooks["entityHurtHook"].length) {
    	sml.hooks["entityHurtHook"][i](attacker,victim,halfhearts);
    	i=(i+1)|0;
	}
}
function entityRemovedHook(entity){
	var i = 0;
	while(i < sml.hooks["entityRemovedHook"].length) {
    	sml.hooks["entityRemovedHook"][i](entity);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function explodeHook(entity, x, y, z, power, onFire){
	var i = 0;
	while(i < sml.hooks["explodeHook"].length) {
    	sml.hooks["explodeHook"][i](entity,x,y,z,power,onFire);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function serverMessageReceiveHook(str){
	var i = 0;
	while(i < sml.hooks["serverMessageReceiveHook"].length) {
    	sml.hooks["serverMessageReceiveHook"][i](str);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function deathHook(attacker, victim){
	var i = 0;
	while(i < sml.hooks["deathHook"].length) {
    	sml.hooks["deathHook"][i](attacker,victim);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function playerAddExpHook(player, experienceAdded){
	var i = 0;
	while(i < sml.hooks["playerAddExpHook"].length) {
    	sml.hooks["playerAddExpHook"][i](player,experienceAdded);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function playerExpLevelChangeHook(player, levelsAdded){
	var i = 0;
	while(i < sml.hooks["playerExpLevelChangeHook"].length) {
    	sml.hooks["playerExpLevelChangeHook"][i](player,levelsAdded);
    	i=(i+1)|0;
	}
}
function redstoneUpdateHook(x, y, z, newCurrent, someBooleanIDontKnow, blockId, blockData){
	var i = 0;
	while(i < sml.hooks["redstoneUpdateHook"].length) {
    	sml.hooks["redstoneUpdateHook"][i](x,y,z,newCurrent,someBooleanIDontKnow,blockid,blockData);
    	i=(i+1)|0;
	}
}
function screenChangeHook(screenName){
	var i = 0;
	while(i < sml.hooks["screenChangeHook"].length) {
    	sml.hooks["screenChangeHook"][i](screenName);
    	i=(i+1)|0;
	}
}
function newLevel(){
	var i = 0;
	while(i < sml.hooks["newLevel"].length) {
    	sml.hooks["newLevel"][i]();
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function startDestroyBlock(x, y, z, side){
	var i = 0;
	while(i < sml.hooks["startDestroyBlock"].length) {
    	sml.hooks["startDestroyBlock"][i](x,y,z,side);
    	i=(i+1)|0;
	}
}
function projectileHitBlockHook(projectile, blockX, blockY, blockZ, side){
	var i = 0;
	while(i < sml.hooks["projectileHitBlockHook"].length) {
    	sml.hooks["projectileHitBlockHook"][i](projectile,blockX,blockY,blockZ,side);
    	i=(i+1)|0;
	}
}
function modTick(){
	var i = 0;
	while(i < sml.hooks["modTick"].length) {
    	sml.hooks["modTick"][i]();
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage){
	var i = 0;
	while(i < sml.hooks["useItem"].length) {
    	sml.hooks["useItem"][i](x,y,z,itemid,blockid,side,itemDamage,blockDamage);
    	i=(i+1)|0;
	}
}
