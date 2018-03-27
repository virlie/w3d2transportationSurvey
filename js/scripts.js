$(document).ready(function(){
  $("form#restSurvey").submit(function(event){
    event.preventDefault();
    $("#restSurveyResponse").show();
    $("input:checkbox[name=restaurant-survey]:checked").each(function(){
      var answers = $(this).val();
      $("#restSurvey").append(answers + "<br>");

    });
  });
});
