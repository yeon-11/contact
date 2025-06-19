function includeHTML(){

    var z, i, elmnt, file, xhttp;
    // 변수선언

    z = document.getElementsByTagName("*");
    // 모든 영역(*)에서 태그네임을 얻음

    for(i=0; i < z.length; i++){
    // z의 length보다 작을 때까지 i는 개별증가해라 : i는 가지고 있는 만큼 반복

        elmnt = z[i];
        // 변수 elmnt에 z의 개별을 대입

        file = elmnt.getAttribute("w3-include-html");
        // 모든 요소를 순회하면서 w3-include-html 속성이 있는지 검사

        if (file){
        // 파일에 속성이 존재한다면
        // if (!=null) << 이건 "존재한다면"이라는 의미(null을 부정하는 것이므로)
            xhttp = new XMLHttpRequest();
            // 속성이 있다면 Ajax 요청을 준비한다
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4){
                // 요청이 완료되면
                    if(this.status == 200){ //성공
                        elmnt.innerHTML = this.responseText;
                    }
                    if(this.status == 404){ //실패
                        elmnt.innerHTML = "Page not found"
                    }
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML(); //재귀호출(자기 스스로를 호출함)
                }
            }
            xhttp.open("GET", file, true); //비동기 (true) 방식으로 요청을 보냄
            xhttp.send();
            return; //리턴으로 함수 종료하여 현재 요소만 처리
        }
    }
}
