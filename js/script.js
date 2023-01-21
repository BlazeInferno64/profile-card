function exeFunc(){
    function setCookie(Default, value, options = {}) {

        options = {
          path: '',
          // add other defaults here if necessary
          ...options
        };
      
        if (options.expires instanceof Date) {
          options.expires = options.expires.toUTCString();
        }
      
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      
        for (let optionKey in options) {
          updatedCookie += "; " + optionKey;
          let optionValue = options[optionKey];
          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }
      
        document.cookie = updatedCookie;
      }
      
      // Example of use:
      setCookie('user', 'John', {secure: true, 'max-age': 36000});
      
      function deleteCookie(Default) {
        setCookie(Default, "", {
          'max-age': 0
        })
      }
      
      // returns the cookie with the given name,
      // or undefined if not found
      function getCookie(Default) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + Default.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
      
    } 
    document.getElementById('dis').style.color = 'transparent';
    document.getElementById('dis1').style.color = 'transparent';
    document.getElementById('dis2').style.color = 'transparent';
    document.getElementById('dis3').style.color = 'transparent';
    document.getElementById('img').style.display = 'none';
    document.getElementById("btn1").style.display = 'none';
    document.getElementById("btn2").style.display = 'none';

    setTimeout(exe,5500);
    function exe(){
    document.getElementById("btn1").style.display = 'inline-block';
    document.getElementById("btn2").style.display = 'inline-block';
    document.getElementById('dis').style.color = 'black';
    document.getElementById('list').className = 'feedback-list';
    document.getElementById('dis1').style.color = 'black';
    document.getElementById('list1').className = 'feedback-list';
    document.getElementById('dis2').style.color = 'black';
    document.getElementById('list2').className = 'feedback-list';
    document.getElementById('img').style.display = 'block';
    document.getElementById('dis3').style.color = 'black';
    document.getElementById('list3').className = 'feedback-list';
    document.getElementById('list4').className = 'feedback-list';
    document.getElementById('btns').className = 'feedback-list';
    }
