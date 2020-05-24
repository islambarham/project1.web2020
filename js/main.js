document.getElementById("history").onclick =function () {
  console.log("I am here")
    if(document.getElementById("profile_slider").style.visibility != "visible"){
      console.log("i want change");
        document.getElementById("profile_slider").style.visibility = "visible";
    }else{
      console.log("i dont want change");
        document.getElementById("profile_slider").style.visibility = "hidden";
    }
};

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // $(document).ready(function(){
  //   $("#btn1").click(function(){
  //     $("ol").prepend("<b>Prepended text</b>. ");
  //   })
  // });


 
var json = (function() { 
   var json = null;
    $.ajax({
      'async': false,
      'global': false,
      'url': "../jsons/history.json",
      'dataType': "json",
      'success': function(data) {
        json = data;
      }
    });
    var historyHTML = document.getElementById("profile_slider");
    var ul = document.createElement("ul");
    for(var key in json)
    {
      var li = document.createElement("li");
      var slider_item = document.createElement("div")
      slider_item.className = "slider_item";
      var item = document.createElement("div")
      item.className = "item";
      var item_date = document.createElement("div");
      item_date.className = "item_date";
      var item_hospital_number = document.createElement("div");
      item_hospital_number.className = "item_hospital_number";
      item_date.appendChild(document.createTextNode('hospitalization:' +json[key]["hospitalization"]));
      item_hospital_number.appendChild(document.createTextNode('hospital number:' +json[key]["hospital number"]));
      item.appendChild(item_date); item.appendChild(item_hospital_number);
      slider_item.appendChild(item);
      li.appendChild(slider_item);
      ul.appendChild(li);
    }
    historyHTML.appendChild(ul);
    return json;
})();

console.log(json["1"]["hospitalization"]);

json.style.display = "block";
json.style.ul.position = "absolute";


