var hooks={};
var hooknames=["attackHook","chatHook","continueDestroyBlock","destroyBlock","projectileHitEntityHook","eatHook","entityAddedHook","entityHurtHook","entityRemovedHook","explodeHook","serverMessageReceiveHook","deathHook","playerAddExpHook","playerExpLevelChangeHook","redstoneUpdateHook","screenChangeHook","newLevel","startDestroyBlock","projectileHitBlockHook","modTick","useItem"];
var i = 0;
	while(i < hooknames.length) {
    	hooks[hooknames[i]]=[];
    	i=(i+1)|0;
	}
i=null;
function addHook(hookname, callback){
	if(hooknames.indexOf(hookname)>=0){
		hooks[hookname].push(callback);
		return true;
	}else{
		return false;
	}
}


// can use preventDefault()
function attackHook(attacker, victim){
	var i = 0;
	while(i < hooks["attackHook"].length) {
    	hooks["attackHook"][i](attacker,victim);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function chatHook(str){
	var i = 0;
	while(i < hooks["chatHook"].length) {
    	hooks["chatHook"][i](str);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function continueDestroyBlock(x, y, z, side, progress){
	var i = 0;
	while(i < hooks["continueDestroyBlock"].length) {
    	hooks["continueDestroyBlock"][i](x,y,z,side,progress);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function destroyBlock(x, y, z, side){
	var i = 0;
	while(i < hooks["destroyBlock"].length) {
    	hooks["destroyBlock"][i](x,y,z,side);
    	i=(i+1)|0;
	}
}
function projectileHitEntityHook(projectile, targetEntity){
	var i = 0;
	while(i < hooks["projectileHitEntityHook"].length) {
    	hooks["projectileHitEntityHook"][i](projectile,targetEntity);
    	i=(i+1)|0;
	}
}
function eatHook(hearts, saturationRatio){
	var i = 0;
	while(i < hooks["eatHook"].length) {
    	hooks["eatHook"][i](hearts,saturationRatio);
    	i=(i+1)|0;
	}
}
function entityAddedHook(entity){
	var i = 0;
	while(i < hooks["entityAddedHook"].length) {
    	hooks["entityAddedHook"][i](entity);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function entityHurtHook(attacker, victim, halfhearts){
	var i = 0;
	while(i < hooks["entityHurtHook"].length) {
    	hooks["entityHurtHook"][i](attacker,victim,halfhearts);
    	i=(i+1)|0;
	}
}
function entityRemovedHook(entity){
	var i = 0;
	while(i < hooks["entityRemovedHook"].length) {
    	hooks["entityRemovedHook"][i](entity);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function explodeHook(entity, x, y, z, power, onFire){
	var i = 0;
	while(i < hooks["explodeHook"].length) {
    	hooks["explodeHook"][i](entity,x,y,z,power,onFire);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function serverMessageReceiveHook(str){
	var i = 0;
	while(i < hooks["serverMessageReceiveHook"].length) {
    	hooks["serverMessageReceiveHook"][i](str);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function deathHook(attacker, victim){
	var i = 0;
	while(i < hooks["deathHook"].length) {
    	hooks["deathHook"][i](attacker,victim);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function playerAddExpHook(player, experienceAdded){
	var i = 0;
	while(i < hooks["playerAddExpHook"].length) {
    	hooks["playerAddExpHook"][i](player,experienceAdded);
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function playerExpLevelChangeHook(player, levelsAdded){
	var i = 0;
	while(i < hooks["playerExpLevelChangeHook"].length) {
    	hooks["playerExpLevelChangeHook"][i](player,levelsAdded);
    	i=(i+1)|0;
	}
}
function redstoneUpdateHook(x, y, z, newCurrent, someBooleanIDontKnow, blockId, blockData){
	var i = 0;
	while(i < hooks["redstoneUpdateHook"].length) {
    	hooks["redstoneUpdateHook"][i](x,y,z,newCurrent,someBooleanIDontKnow,blockid,blockData);
    	i=(i+1)|0;
	}
}
function screenChangeHook(screenName){
	var i = 0;
	while(i < hooks["screenChangeHook"].length) {
    	hooks["screenChangeHook"][i](screenName);
    	i=(i+1)|0;
	}
}
function newLevel(){
	var i = 0;
	while(i < hooks["newLevel"].length) {
    	hooks["newLevel"][i]();
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function startDestroyBlock(x, y, z, side){
	var i = 0;
	while(i < hooks["startDestroyBlock"].length) {
    	hooks["startDestroyBlock"][i](x,y,z,side);
    	i=(i+1)|0;
	}
}
function projectileHitBlockHook(projectile, blockX, blockY, blockZ, side){
	var i = 0;
	while(i < hooks["projectileHitBlockHook"].length) {
    	hooks["projectileHitBlockHook"][i](projectile,blockX,blockY,blockZ,side);
    	i=(i+1)|0;
	}
}
function modTick(){
	var i = 0;
	while(i < hooks["modTick"].length) {
    	hooks["modTick"][i]();
    	i=(i+1)|0;
	}
}
// can use preventDefault()
function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage){
	var i = 0;
	while(i < hooks["useItem"].length) {
    	hooks["useItem"][i](x,y,z,itemid,blockid,side,itemDamage,blockDamage);
    	i=(i+1)|0;
	}
}
