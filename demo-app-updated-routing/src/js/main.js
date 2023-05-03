//Side Bar JS

  $(window).load(function () {
    var height = window.innerHeight,
      x = 0, y = height / 2,
      curveX = 10,
      curveY = 0,
      targetX = 0,
      xitteration = 0,
      yitteration = 0,
      menuExpanded = false;

    blob = $('#blob'),
      blobPath = $('#blob-path'),

      hamburger = $('.hamburger');

    $(this).on('mousemove', function (e) {
      x = e.pageX;

      y = e.pageY;
    });

    $('.hamburger, .menu-inner').on('mouseenter', function () {
      $(this).parent().addClass('expanded');
      menuExpanded = true;
    });

    $('.menu-inner').on('mouseleave', function () {
      menuExpanded = false;
      $(this).parent().removeClass('expanded');
    });

    function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
      return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
    }

    var hoverZone = 150;
    var expandAmount = 20;

    function svgCurve() {
      if ((curveX > x - 1) && (curveX < x + 1)) {
        xitteration = 0;
      } else {
        if (menuExpanded) {
          targetX = 0;
        } else {
          xitteration = 0;
          if (x > hoverZone) {
            targetX = 0;
          } else {
            targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
          }
        }
        xitteration++;
      }

      if ((curveY > y - 1) && (curveY < y + 1)) {
        yitteration = 0;
      } else {
        yitteration = 0;
        yitteration++;
      }

      curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
      curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

      var anchorDistance = 200;
      var curviness = anchorDistance - 40;

      var newCurve2 = "M60," + height + "H0V0h60v" + (curveY - anchorDistance) + "c0," + curviness + "," + curveX + "," + curviness + "," + curveX + "," + anchorDistance + "S60," + (curveY) + ",60," + (curveY + (anchorDistance * 2)) + "V" + height + "z";

      blobPath.attr('d', newCurve2);

      blob.width(curveX + 60);

      hamburger.css('transform', 'translate(' + curveX + 'px, ' + curveY + 'px)');

      $('h2').css('transform', 'translateY(' + curveY + 'px)');
      window.requestAnimationFrame(svgCurve);
    }

    window.requestAnimationFrame(svgCurve);

  });

  //Text Editor JS

  tinymce.init({
    selector: 'textarea#editor',
    plugins: 'lists, link, image, media',
    toolbar: 'h1 h2 bold italic strikethrough blockquote bullist numlist backcolor | link image media | removeformat help',
    menubar: false,
    setup: (editor) => {
      // Apply the focus effect
      editor.on("init", () => {
        editor.getContainer().style.transition = "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out";
      });
      editor.on("focus", () => {
        (editor.getContainer().style.boxShadow = "0 0 0 .2rem rgba(0, 123, 255, .25)"),
          (editor.getContainer().style.borderColor = "#80bdff");
      });
      editor.on("blur", () => {
        (editor.getContainer().style.boxShadow = ""),
          (editor.getContainer().style.borderColor = "");
      });
    },
  });

  //File Upload JS

  + function ($) {
    'use strict';

    // UPLOAD CLASS DEFINITION
    // ======================

    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');

    var startUpload = function (files) {
      console.log(files)
    }

    uploadForm.addEventListener('submit', function (e) {
      var uploadFiles = document.getElementById('js-upload-files').files;
      e.preventDefault()

      startUpload(uploadFiles)
    })

    dropZone.ondrop = function (e) {
      e.preventDefault();
      this.className = 'upload-drop-zone';

      startUpload(e.dataTransfer.files)
    }

    dropZone.ondragover = function () {
      this.className = 'upload-drop-zone drop';
      return false;
    }

    dropZone.ondragleave = function () {
      this.className = 'upload-drop-zone';
      return false;
    }

  }(jQuery);

  function check() {
    userName = document.getElementById("typeUsername").value
    if (userName != "eebalboni")
      if (userName != "profBlake")
        alert("Username is not registered. Please enter a valid username.");
    if (userName == "eebalboni")
      window.location.assign("../indexes/courses-view-student.html");
    if (userName == "profBlake")
      window.location.assign("../indexes/courses-view-professor.html");
  }

  function sub()
      {
      var ddl = document.getElementById("options");
      var selectedValue = ddl.options[ddl.selectedIndex].value;
      if(document.getElementById("typeUsername").value == "")
        alert("Please enter your full name");
      else if(document.getElementById("typeEmail").value == "")
        alert("Please enter a username");
      else if(document.getElementById("typePassword").value == "")
        alert("Please enter a password");
      else if (selectedValue == "selectUser") 
        alert("Please select a user type");
      else
      window.location.assign("../indexes/SignIn.html")
      }