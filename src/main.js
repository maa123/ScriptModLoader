var hooks={};

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
