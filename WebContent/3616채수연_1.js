function load(btnVl) {
    var interval = setInterval(handleRefresh, 3000);
    handleRefresh(btnVl);
}
function handleRefresh(btnVl) {
//추가 1
	console.log("here");
	var url = "http://openapi.seoul.go.kr:8088/677766796d636f743232446f765077/json/RealtimeCityAir/1/25/";
	if(btnVl=='mise')
		$.getJSON(url,updatestatus);
	else if(btnVl=='all')
		$.getJSON(url,updatestatus2);
	
}	
/*		
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
*/
var date;
function updatestatus(status) {
	var statusDiv = document.getElementById("status");
	status = status.RealtimeCityAir.row;
		
	for (var i = 0; i < status.length; i++) {
		var state = status[i];
		var div = document.createElement("div");
		div.setAttribute("class", "status");
		date = state.MSRDT.substring(0,4)+"-"+state.MSRDT.substring(4,6)+"-"+
		state.MSRDT.substring(6,8)+" "+state.MSRDT.substring(8,10)+":"+state.MSRDT.substring(10,12);

		div.innerHTML =  date+" 에 "+state.MSRRGN_NM+" "+state.MSRSTE_NM+"에서 측정한 " +
				"미세먼지 농도는 "+state.PM10+"이고, 초미세먼지농도는 "+state.PM25+"입니다.<br>"
				+"통합 대기환경 등급 : "+state.IDEX_NM+" <br>통합 대기환경 지수 :"+state.IDEX_MVL;

		
		if (statusDiv.childElementCount == 0) {
			statusDiv.appendChild(div);
		}
		else {
			statusDiv.insertBefore(div, statusDiv.firstChild);
		}
	}

}
function updatestatus2(status) {
	var statusDiv = document.getElementById("status");
	status = status.RealtimeCityAir.row;
		
	for (var i = 0; i < status.length; i++) {
		var state = status[i];
		var div = document.createElement("div");
		div.setAttribute("class", "status");
		date = state.MSRDT.substring(0,4)+"-"+state.MSRDT.substring(4,6)+"-"+
		state.MSRDT.substring(6,8)+" "+state.MSRDT.substring(8,10)+":"+state.MSRDT.substring(10,12);

		div.innerHTML =  date+" 에 "+state.MSRRGN_NM+" "+state.MSRSTE_NM+"에서 측정한 " +
				"미세먼지 농도는 "+state.PM10+" 초미세먼지농도는 "+state.PM25+" "
				+" 오존농도는 "+state.O3+" 이산화질소농도 "+state.NO2
				+" 일산화탄소농도는 "+state.CO	+" 아황산가스농도는 "+state.SO2
				+"통합 대기환경 등급 : "+state.IDEX_NM+" <br>통합 대기환경 지수 :"+state.IDEX_MVL;

		
		if (statusDiv.childElementCount == 0) {
			statusDiv.appendChild(div);
		}
		else {
			statusDiv.insertBefore(div, statusDiv.firstChild);
		}
	}

}