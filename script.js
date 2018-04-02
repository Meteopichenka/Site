function showSubmit(){
	var elem = document.getElementById("submit_id");
	elem.style.display = "block";
}
function hideSubmit(){
	var elem = document.getElementById("submit_id");
	elem.style.display = "none";
}

function showForm(){
	var block = document.getElementById("set_block");
	var but = document.getElementById("set_but");
	block.style.display = 'block';
	setTimeout(moveLeft(), 10);
	but.style.display = "none";
}
function hideForm(){
	var block = document.getElementById("set_block");
	var but = document.getElementById("set_but");
	block.style.right = "-100vw";
	block.style.display = "none";
	but.style.display = "block";
}
function moveLeft(){
	var block = document.getElementById("set_block");
	block.style.right = "0";
}

var items = document.getElementsByClassName("data_item");
var iArray = Array.from(items);

var gItems = document.getElementsByClassName("graphic_block");
var gArray = Array.from(gItems);

function change(elemnt) {
	for(var i = 0; i < iArray.length; i++){
		iArray[i].style.backgroundColor = '';
		iArray[i].style.borderBottomColor = '';
	}
	elemnt.style.backgroundColor = "#b9f0b4";
	elemnt.style.borderBottomColor = "#b9f0b4";
	var k;
	for(var i = 0; i < iArray.length; i++){
		if(iArray[i] === elemnt) {
			k = i;
			break;
		}
	}
	var bHolder = document.getElementById("holder");
	if(document.documentElement.clientWidth <= 750){
		for(var i = 0; i < iArray.length; i++) {
			iArray[i].style.marginBottom = "0";
		}

		 if(elemnt.style.marginBottom > "0px"){
		 	iArray[k].style.marginBottom = "";
		 	bHolder.style.height = "";
		} else {
			iArray[k].style.marginBottom = "200px";
			bHolder.style.height = "500px";
		}
	}
	for(var i = 0; i < gArray.length; i++){
		gArray[i].style.display = "";
	}
	gArray[k].style.display = "block";
}
var ctx1 = document.getElementById("myChart1");
var myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
						label: "temperature",
            data: [3, 5, 55, 12, 30, -7, 5, 40, 20, 33],
            backgroundColor: "transparent",
            borderColor: "black",
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var ctx2 = document.getElementById("myChart2");
var myChart = new Chart(ctx2, {
    type: 'line',
		intersect: 'false',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
						label: "temperature",
            data: [3, 5, 55, 12, 30, -7, 5, 40, 20, 33],
            backgroundColor: "transparent",
            borderColor: "red",
            borderWidth: 3
        }]
    },
    options:{
        scales: {
            yAxes: [{
								stacked: true,
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
