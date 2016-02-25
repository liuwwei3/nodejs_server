function submit_label(){

   var nodes = document.getElementsByTagName("input");
   var dict = '';
   for (i=0; i < nodes.length; i++){
      ele = nodes[i];
      if (ele.type == "radio" && ele.checked){
         dict = dict + ele.name + ':' + ele.value + '\t';
      }
   }
   dict = dict + '__rootquery:' + document.getElementById("__rootquery").innerHTML;
   $.post("/label", {"data" : dict } , function(data, status){alert(data);});
}
