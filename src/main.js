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
