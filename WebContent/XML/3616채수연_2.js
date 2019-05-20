function load(btnVl) {
    var interval = setInterval(handleRefresh, 3000);
    handleRefresh(btnVl);
}
function handleRefresh(btnVl) {
	//추가 1
		var url = "http://openapi.seoul.go.kr:8088/677766796d636f743232446f765077/xml/RealtimeCityAir/1/25/";
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if( this.readyState == 4 && this.status == 200){
				if(btnVl=='mise')
					updatestatus(this);
				else if(btnVl=='all')
					updatestatus2(this);
			}
		};
		xhttp.open("GET",url,true);
		xhttp.send();
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
						+"초미세먼지농도는"+row.getElementsByTagName("PM25")[0].childNodes[0].nodeValue+"입니다.<br>"
						+"통합 대기환경 등급 : "+row.getElementsByTagName("IDEX_NM")[0].childNodes[0].nodeValue
						+"<br>통합 대기환경 지수 :"+row.getElementsByTagName("IDEX_MVL")[0].childNodes[0].nodeValue;

		AirDiv.appendChild(div);
	}
}
function updatestatus2(xml){
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
						+"미세먼지 농도는 "+row.getElementsByTagName("PM10")[0].childNodes[0].nodeValue+" " 
						+"초미세먼지농도는"+row.getElementsByTagName("PM25")[0].childNodes[0].nodeValue+" "
						+"오존농도는"+row.getElementsByTagName("O3")[0].childNodes[0].nodeValue+" "
						+"이산화질소농도는"+row.getElementsByTagName("NO2")[0].childNodes[0].nodeValue+" "
						+"일산화탄소농도는"+row.getElementsByTagName("CO")[0].childNodes[0].nodeValue+" "
						+"아황산가스농도는"+row.getElementsByTagName("SO2")[0].childNodes[0].nodeValue+" "
						+"<br>통합 대기환경 등급 : "+row.getElementsByTagName("IDEX_NM")[0].childNodes[0].nodeValue
						+"<br>통합 대기환경 지수 :"+row.getElementsByTagName("IDEX_MVL")[0].childNodes[0].nodeValue;

		AirDiv.appendChild(div);
	}
}
