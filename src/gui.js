var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

GUI_listal("タイトル","はい","いいえ",["項目1","項目2"],function(d){print(d);});

function GUI_listal(title,yes,no,items,callback){
ctx.runOnUiThread(new java.lang.Runnable({
        run: function(){
try{

    var alerts=new android.app.AlertDialog.Builder(ctx);
    alerts.setTitle(title);
alerts.setItems(
items,
new android.content.DialogInterface.OnClickListener(){
        onClick: function(dialog,which){
callback(which);
}}
);
    alerts.setPositiveButton(yes,new android.content.DialogInterface.OnClickListener(){
        onClick: function(dialog,whichButton){
callback(true);
            }
        });
    alerts.setNegativeButton(no,new android.content.DialogInterface.OnClickListener(){
        onClick: function(dialog,whichButton){
callback(false);
}
        });
    alerts.show();
}catch(emr){
        print(emr);
        }
}}));
    }
