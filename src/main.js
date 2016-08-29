var hooks={};
var hooknames=["attackHook","chatHook","continueDestroyBlock","destroyBlock","projectileHitEntityHook","eatHook","entityAddedHook","entityHurtHook","entityRemovedHook","explodeHook","serverMessageReceiveHook","deathHook","playerAddExpHook","playerExpLevelChangeHook","redstoneUpdateHook","screenChangeHook","newLevel","startDestroyBlock","projectileHitBlockHook","modTick","useItem"];
var i = 0;
	while(i < hooknames.length) {
    	hooks[hooknames[i]]=[];
    	i=(i+1)|0;
	}
i=null;
function addHook(hookname,callback){
	switch(hookname){
		case "attackHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "chatHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "continueDestroyBlock":
		hooks[hookname].push(callback);
		return true;
		break;
		case "destroyBlock":
		hooks[hookname].push(callback);
		return true;
		break;
		case "projectileHitEntityHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "eatHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "entityAddedHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "entityHurtHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "entityRemovedHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "explodeHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "serverMessageReceiveHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "deathHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "playerAddExpHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "playerExpLevelChangeHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "redstoneUpdateHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "screenChangeHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "newLevel":
		hooks[hookname].push(callback);
		return true;
		break;
		case "startDestroyBlock":
		hooks[hookname].push(callback);
		return true;
		break;
		case "projectileHitBlockHook":
		hooks[hookname].push(callback);
		return true;
		break;
		case "modTick":
		hooks[hookname].push(callback);
		return true;
		break;
		case "useItem":
		hooks[hookname].push(callback);
		return true;
		break;
		default:
		return false;
		break;
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
