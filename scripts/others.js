var myothers = '<h2>In press</h2> \
<ul> \
  <li> \
  <a href=" http://www.diretodaciencia.com/2020/03/04/protecao-do-codigo-florestal-para-lagos-e-represas-e-insuficiente-no-semiarido"> \
  Forest Code Protection for lakes and dams is insufficient in the Semiarid Region – National press release</a> \
  </li> \
  <li> \
  <a href="https://abori.com.br/ambiente/area-de-conservacao-de-entorno-de-lagos-e-represas-precisa-ser-maior-do-que-diz-codigo-florestal/"> \
  Conservation area around lakes and dams needs to be larger than what Forest Code states – National press release </a> \
  </li> \
</ul> \
<br>'

$(document).ready(function(){
  $("#others").click(function(){
    $(".content").empty();
    $(".content").append(myothers);
  });
});

