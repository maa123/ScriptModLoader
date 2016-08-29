connect.get=function(url){
	var httpGet = new org.apache.http.client.methods.HttpPost(url);
	var httpClient = new org.apache.http.impl.client.DefaultHttpClient();
	httpGet.setHeader("Connection", "Keep-Alive");
	var response = httpClient.execute(httpGet);
	var status = response.getStatusLine().getStatusCode();
	if(status != org.apache.http.HttpStatus.SC_OK){
		return false;
	}else{
		return org.apache.http.util.EntityUtils.toString(response.getEntity(), "UTF-8");
	}
};