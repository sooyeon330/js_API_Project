window.onload = function() {
    var interval = setInterval(handleRefresh, 3000);
    handleRefresh();
}
function handleRefresh() {
//추가 1
	console.log("here");
	var url = "http://openapi.seoul.go.kr:8088/677766796d636f743232446f765077/json/RealtimeCityAir/1/25/";
	$.getJSON(url,updatestatus);
}	


function updatestatus(status) {
	var statusDiv = document.getElementById("status");
	status = status.RealtimeCityAir.row;

	
	for (var i = 0; i < status.length; i++) {
		var state = status[i];
		var div = document.createElement("div");
		div.setAttribute("class", "status");
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