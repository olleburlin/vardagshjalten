import * as React from "react"
import HeaderBar from "./common/HeaderBar"
import Footer from "./common/Footer"
function Layout({ children, isHome }) {
  const code = ` <div id="fb-root"></div>


  <div id="fb-customer-chat" class="fb-customerchat">
  </div>

  <script>
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "226503147514288");
    chatbox.setAttribute("attribution", "biz_inbox");
  </script>

  <!-- Your SDK code -->
  <script>
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v15.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/sv_SE/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>`

  return (
    <div className="md:min-h-screen antialiased relative  leading-relaxed text-secondary">
      <div className="flex flex-col md:flex-row md:h-full w-full relative">
        <div
          className={`${
            isHome ? "absolute" : "static"
          }  md:fixed md:top-0 md:left-0 z-20 w-full md:w-24 md:h-screen`}
        >
          <HeaderBar />
        </div>
        <div className="h-full w-full relative md:ml-24">
          <main className="h-full w-full">{children}</main>
          <Footer />
        </div>
      </div>
      <div>
        {" "}
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
  )
}

export default Layout
