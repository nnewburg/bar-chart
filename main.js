function addElement () {
  var node = document.createElement("div");
  node.appendChild( document.createTextNode( '\u00A0' ) );
  document.getElementById("chart").appendChild(node);

  var width = document.getElementById("size").value;
  node.style.width = (width * 10) + 'px';


  node.style.backgroundColor = document.getElementById('color').value;


}


/*
if(width < 5){
    node.style.width = 100 + 'px';
  } else if(width >= 5 && width < 10){
    node.style.width = 200 + 'px';
  } else if(width >= 10 && width < 20){
    node.style.width = 300 + 'px';
  } else if(width >= 20){
    node.style.width = 400 + 'px';
  }
  */
