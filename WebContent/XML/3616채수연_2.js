window.onload = function() {
    var interval = setInterval(handleRefresh, 3000);
    handleRefresh();
}

function handleRefresh() {
	//추가 1
		var url = "http://openapi.seoul.go.kr:8088/677766796d636f743232446f765077/xml/RealtimeCityAir/1/25/";
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if( this.readyState == 4 && this.status == 200){
				updatestatus(this);
			}
		};
		xhttp.open("GET",url,true);
		xhttp.send();
}

function updatestatus(xml){
	var xmlDoc = xml.responseXML;
	var AirDiv = document.getElementById("Airstate");
	state = xmlDoc.getElementsByTagName("row");
	for(var i=0; i<state.length; i++){
		var row = state[i];
		var div = document.createElement("div");
		div.setAttribute("class","stateItem");
		
		div.innerHTML = row.getElementsByTagName('MSRDT')[0].childNodes[0].nodeValue+"에"
						+row.getElementsByTagName("MSRRGN_NM")[0].childNodes[0].nodeValue+" "
						+row.getElementsByTagName("MSRSTE_NM")[0].childNodes[0].nodeValue+"에서 측정한 " 
						+"미세먼지 농도는 "+row.getElementsByTagName("PM10")[0].childNodes[0].nodeValue+"이고, " 
						+"초미세먼지농도는"+row.getElementsByTagName("PM25")[0].childNodes[0].nodeValue+"입니다."
						+"통합 대기환경 등급 : "+row.getElementsByTagName("IDEX_NM")[0].childNodes[0].nodeValue
						+"통합 대기환경 지수 :"+row.getElementsByTagName("IDEX_MVL")[0].childNodes[0].nodeValue;

		AirDiv.appendChild(div);
	}
}
/*
function updatestatus(status) {
	var statusDiv = document.getElementById("status");
	status = status.RealtimeCityAir.row;

	
	for (var i = 0; i < status.length; i++) {
		var state = status[i];
		var div = document.createElement("div");
		div.setAttribute("class", "status");
			
		MSRDT	측정일시
		MSRRGN_NM	권역명
		MSRSTE_NM	측정소명
		PM10	미세먼지(㎍/㎥)
		PM25	초미세먼지농도(㎍/㎥)
		O3	오존(ppm)
		NO2	이산화질소농도(ppm)
		CO	일산화탄소농도(ppm)
		SO2	아황산가스농도(ppm)
		IDEX_NM	통합대기환경등급
		IDEX_MVL	통합대기환경지수
		ARPLT_MAIN	지수결정물질
		
		//추가2
		div.innerHTML = state.MSRDT+"에"+state.MSRRGN_NM+" "+state.MSRSTE_NM+"에서 측정한 '" +
				"미세먼지 농도는 "+state.PM10+"이고, 초미세먼지농도는"+state.PM25+"입니다.";
		//+state.+state.+
		
		if (statusDiv.childElementCount == 0) {
			statusDiv.appendChild(div);
		}
		else {
			statusDiv.insertBefore(div, statusDiv.firstChild);
		}
	}

}
*/