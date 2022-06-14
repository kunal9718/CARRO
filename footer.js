

const createfooter = () => {
    let nav = document.querySelector('.footer');

    nav.innerHTML = `
       
        <div class="footflex">
        <div class="foot"><ul>ABOUT</ul>
            <ul><a href="contactus.htm" class="footer" >Contact Us</a></ul>
            <ul><div class="popup" onclick="myFunction1()">About Us
                    <span class="popuptext" id="myPopup1">We are the two best coders is this GODDAMN country.</span>
                  </div></ul>
            <ul><div class="popup" onclick="myFunction2()">Carro Stories
                    <span class="popuptext" id="myPopup2">We worked our asses to make this website functional.</span>
                  </div></ul>
            <ul><div class="popup" onclick="myFunction3()">Gift a Smile
                <span class="popuptext" id="myPopup3">&#128515;&#128515;&#128515;</span>
              </div></ul>
        </div>

        <div class="foot"><ul>HELP </ul>
            <ul><a href="footerpayment.htm" class="footer">Payments</a></ul>
            <ul><a href="footer_shipping.htm" class="footer">Shipping</a></ul>
            <ul><div class="popup" onclick="myFunction4()">Cacellation  Returns
                <span class="popuptext" id="myPopup4">Visit My Orders to check the status of your replacement.</span>
              </div></ul>
            <ul><a href="faqs.htm" class="footer">FAQ</a></ul>
        </div>

        <div class="foot"><ul>POLICY </ul>
            <ul><div class="popup" onclick="myFunction5()">Return Policy
                    <span class="popuptext" id="myPopup5">Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/ or refund is offered by the respective sellers to you.</span>
                  </div></ul>
            <ul>
                <div class="popup" onclick="myFunction6()">Terms of Use
                    <span class="popuptext" id="myPopup6">ACCESSING, BROWSING OR OTHERWISE USING THE SITE INDICATES YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE, SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING. </span>
                </div></ul>
            <ul>
                <div class="popup" onclick="myFunction7()">Security
                    <span class="popuptext" id="myPopup7">Your online transaction on Carro is secure with the highest levels of transaction security currently available on the Internet. </span>
                  </div></ul>
            <ul><div class="popup" onclick="myFunction8()">Privacy
                <span class="popuptext" id="myPopup8">We value the trust you place in us and recognize the importance of secure transactions and information privacy.</span>
              </div></ul>
        </div>

        <div class="foot"><ul>SOCIAL</ul>
            <ul><a href="#" class="footer">E-Mail</a></ul>
            <ul><a href="https://www.instagram.com/k_u_n_a_l__g_a_r_g" class="footer">Instagram</a></ul>
            <ul><a href="https://www.facebook.com/" class="footer" target="_blank">Facebook</a></ul>
        </div>
        </div>

     
    
        <span class="copyright">
        <h3 style="text-align: center; color: white;"> &copy;2022,CARRO</h3>  
        </span>


    `;







}



// When the user clicks on div, open the popup
function myFunction1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}  
function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
} 
function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
} 
function myFunction4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
} 
function myFunction5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
} 
function myFunction6() {
  var popup = document.getElementById("myPopup6");
  popup.classList.toggle("show");
} 
function myFunction7() {
  var popup = document.getElementById("myPopup7");
  popup.classList.toggle("show");
} 
function myFunction8() {
  var popup = document.getElementById("myPopup8");
  popup.classList.toggle("show");
} 



createfooter();