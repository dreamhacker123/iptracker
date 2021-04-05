function preloader(){

var main_content = document.querySelector(".maincontent");
var preloaderdesign = document.querySelector(".preloaderdesign")
main_content.style.display = "none";
setTimeout(()=>{

    preloaderdesign.style.display="none";
    main_content.style.display = "block";

},1500)


};


function getData(){


    var inputValue = document.querySelector('.inputvalue');
    var result_section = document.querySelector(".result_values");
    var result_label = document.querySelector(".result_label");
    var fetching_data = document.querySelector(".fetching_data");


    fetch('https://ipapi.co/'+inputValue.value+'/json/')
    .then(Response => Response.json())
    .then(data =>{
        fetching_data.style.display = "block";
        setTimeout(()=>{
        
        if(data.country_name){
            
            
        result_label.innerHTML=`<b>IP ADDRESS:</b><br><b>IP TYPE:</b><br><b>CONTINENT CODE:</b><br><b>COUNTRY:</b><br><b>SERVICE PROVIDER:</b><br><b>REGION:</b><br>
        <b>CITY:</b><br><b>ZIPCODE:</b><br><b>LATITUDE:</b><br><b>LONGITUDE:</b><br><br><b>FLAG:</b><br>`
        result_section.innerHTML = `<p style="word-wrap: break-word;">${data.ip}</p><br>${data.version}<br>${data.continent_code}<br>${data.country_name}<br>
        ${data.org.split(" ",2).join(" ")}<br>${data.region}<br>${data.city}<br>${data.postal}<br>
        ${data.latitude}<br>${data.longitude}<br><img src="https://www.countryflags.io/${data.country_code.toLowerCase()}/flat/64.png"/>`;
        console.log(data);
        fetching_data.style.display = "none";
            
        }
            
        else{
        
            alert("IP not in Existence");
            fetching_data.style.display = "none";
        }
        
            
            
        },1000);
        

    })
    .catch(Error=>{alert("Invalid IP address")});
    inputValue.value ="";

};

