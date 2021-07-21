var mypubli = '<h2>Publications</h2>\
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20"> \
<tr> \
  <td width="25%" valign="top"> <h2>2020</h2></td> \
  <td width="75%" valign="top"> \
  <p align="justify"> \
      <b><papertitle>)Precipitation, landscape properties and land use interactively affect water quality of tropical freshwaters</papertitle></b> \
  <br> \
  Nobre, R. L. G., Caliman, A., Cabral, C., Guérin, Carneiro, L.S., Vanni, M., et al.\
  <br> \
  <em>Science of the total environment, 716, 137044</em>, 2020 \
  <br> \
   <br><br><br> \
     <b><papertitle>)A conceptual model to assess the impact of anthropogenic drivers on water-related ecosystem services in the Brazilian Cerrado.</papertitle></b> \
  <br> \
  Resende, F., Denman, L., Selva, G., Campanhão, L., Nobre, R. L. G., et al. \
  <em>Biota Neotropica,20 (suppl. 1): e20190899 </em>, 2020 \
  </p></td> \
</tr> \
<tr> \
  <td width="25%" valign="top"> <h2>2019</h2></td> \
  <td width="75%" valign="top"> \
  <p align="justify"> \
      <b><papertitle>Fish, including their carcasses, are net nutrient sources to the water column of a eutrophic lake</papertitle></b> \
  <br> \
  Nobre, R. L. G., Carneiro, L. S., González, M. J., Vanni, M. J., & Panek, S. E.\
  <br> \
  <em>Frontiers in Ecology and Evolution, 7, 340 </em> (2019) \
  <br> \
  <br><br><br> \
      <b><papertitle>)Effects of the introduction of an omnivorous fish on the biodiversity and functioning of an upland Amazonian Lake</papertitle></b> \
  <br> \
Nobre, R. L.G., Caliman, A., Guariento, R. D., Bozelli, R. L., & Carneiro, L. S. \
  <br> \
  <em>Acta Amazonica, 49(3), 221-231 </em>, 2019 \
  <br> \
  <br><br><br> \
      <b><papertitle>Are the patterns of zooplankton community structure different between lakes and reservoirs?  A local   and regional assessment across tropical ecosystems.</papertitle></b> \
  <br> \
Cabral, C. R., Guariento, R. D., Ferreira, F. C., Amado, A. M., Nobre, R. L.G., Carneiro, L. S., & Caliman, A.\
  <br> \
  <em> Aquatic Ecology, 53(3), 335-346</em>, 2019 \
  <br> \
  <br><br><br> \
      <b><papertitle>Effects of seasonality, trophic state and landscape proper- ties on CO2 saturation in low-latitude lakes and reservoirs.</papertitle></b> \
  <br> \
  Junger P.C., Costa F.C., Nobre R. L. G., Kosten S., Martins E., Carvalho F. De,   et al\
  <br> \
  <em>Science of the Total Environment 664, 283–295</em>, 2019 \
  <br> \
  </p></td> \
</tr> \
<tr> \
  <td width="25%" valign="top"> <h2>2016</h2></td> \
  <td width="75%" valign="top"> \
  <p align="justify"> \
      <b><papertitle>High primary production contrasts with intense carbon emission in a eutrophic tropical reservoir. </papertitle></b> \
  <br> \
  Almeida R.M., Nóbrega G.N., Junger P.C., Figueiredo A.V., Andrade A.S., de Moura C.G.B., Nobre, R. L. G., et al. \
  <em>Frontiers in Microbiology, 7 </em>, 2016 \
  <br> \
  </p></td> \
</tr> \
<tr> \
  <td width="25%" valign="top"> <h2>2015\</h2></td> \
  <td width="75%" valign="top"> \
  <p align="justify"> \
      <b><papertitle> Spatial patterns reveal strong abiotic and biotic drivers of zooplankton community composition in Lake Myvatn, Iceland</papertitle></b> \
  <br> \
  Bartrons, M., Einarsson, Á., Nobre, R. L. G., Herren, C. M., Webert, K. C., S. Brucet, Ólafsdóttir, S. R., and. Ives, A. R.\
   <em>Ecosphere 6(6):105 </em>, 2015 \
  </p></td> \
</tr> \
</table>'

$(document).ready(function(){
  $("#publications").click(function(){
    $(".content").empty();
    $(".content").append(mypubli);
  });
});
