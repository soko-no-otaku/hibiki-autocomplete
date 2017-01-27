window.onload = function() {
  var defaults = {
    name: "しいたけ",
    email: "kankanmikan@tochiman.com",
    gender: 2,
    generation: "高校2年生",
    area: "内浦"
  };

  chrome.storage.local.get(
    defaults,
    function(items) {
      document.getElementById("inquiry_name").value = items.name;
      document.getElementById("inquiry_email").value = items.email;
      document.getElementById("inquiry_gender").getElementsByTagName("option")[items.gender].selected = true;
      document.getElementById("inquiry_generation").value = items.generation;
      document.getElementById("inquiry_area").value = items.area;
    }
  );

  document.getElementById("apply").addEventListener("click", saveChanges, false);
};

function saveChanges() {
  var listenerInfo = {
    name:       $('#inquiry_name').val(),
    email:      $('#inquiry_email').val(),
    gender:     $('#inquiry_gender').val(),
    generation: $('#inquiry_generation').val(),
    area:       $('#inquiry_area').val()
  };

  chrome.storage.local.set(listenerInfo, function() {});

  alert("保存しました。");
};
