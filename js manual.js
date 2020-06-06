/*   This is source JSON object just so I can format it clearly;
var info = {

  "1":{"employeeid":"1",
  "employeefname":"Gary",
  "employeelname":"Bittle",
  "employeebio":"Proudly the most unproductive member of the team.",
  "employeehaspic":"1",
  "employeeisfeatured":"1",
 "roles":[{"rolename":"Eating","rolecolor":"#FFED65","roleid":"3"}]
  },

"2":{"employeeid":"2","employeefname":"Trilby","employeelname":"Bittle","employeebio":"Media Communications specialist. Humber graduate with extensive experience. Began with national television news on the assignment desk and curated the syndicate news feed. Continued in media as an international editor for 2 different magazines. Worked at the Royal Ontario Museum (ROM) with various positions in Media Relations, ultimately leading to the position Head of Marketing Communications. Responsibilities included internal communications, advertising, promotions, and publicity.","employeehaspic":"1","employeeisfeatured":"0",

"roles":[ {"rolename":"Communications", "rolecolor":"#FDFFF7", "roleid":"2"},
           {"rolename":"Writing","rolecolor":"#FBCAEF","roleid":"5"}
      ]},

"3":{"employeeid":"3","employeefname":"Christine","employeelname":"Bittle","employeebio":"Web Enthusiast.","employeehaspic":"1","employeeisfeatured":"0",

"roles":[{"rolename":"Coding","rolecolor":"#B4ADEA","roleid":"1"},
        {"rolename":"Gaming", "rolecolor":"#E3D3E4","roleid":"6"}]}};

 console.log("var info: " +info);

document.getElementById("container").innerHTML=info[1].employeebio;
 */

//Variables:
 var xhttp; var data;
 var name;  var bio; var photo; var output; var crown;
 var container =  document.getElementById("container");
 var role1; var role2; var roleColor1; var roleColor2;
 var role; var color;
 var div = document.createElement("div");
 var image = document.createElement("img"); 
 var h2 = document.createElement("h2"); 
 var p = document.createElement("p"); 


 //Assign JSON object to a variable:
if (window.XMLHttpRequest) {
   // code for modern browsers
   xhttp = new XMLHttpRequest();
 } else {
   // code for old IE browsers
   xhttp = new ActiveXObject("Microsoft.XMLHTTP");
} 

//Getting data into object:
xhttp.open("GET", "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php", true);
xhttp.send(); 

//Function that prints content of the Object:
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     data = JSON.parse(xhttp.responseText); 
    // console.log(JSON.stringify(data));
    // container.innerHTML = JSON.stringify(data); 
    // console.log('obj length: '+Object.keys(data).length);

    for ( i = 1; i <= Object.keys(data).length; i++) {

      //displaying a Crown image selectively:
       if(data[i].employeeisfeatured == 1) {
        crown = '<img src="crown.png" alt="crown image" id="crown">'
        }else {crown =""};
        // console.log(crown);
        // console.log("index: "+i);

        //Assign roles to variables:
        //Cat doesn't have 2nd role which requires a bit of a fix with undefined 2nd var:

  //  Assign Roles manually:
        role1 = data[i].roles[0].rolename;
        if (Object.keys(data[i].roles).length>1){ 
          role2 = data[i].roles[1].rolename
        }else {role2 = ""}; 
 
/* "roles":[ {"rolename":"Communications", "rolecolor":"#FDFFF7", "roleid":"2"},
           {"rolename":"Writing","rolecolor":"#FBCAEF","roleid":"5"}
      ]},
 */
/* 
var para = document.createElement("P");                 // Create a <p> element
para.innerHTML = "This is a paragraph.";                // Insert text
document.getElementById("myDIV").appendChild(para);     // Append <p> to <div> with id="myDIV" 
*/
/* 
  // Print Roles and Colors using loop: 
         for ( ii = 0; ii < data[i].roles.length; ii++) {
          role = data[i].roles[ii].rolename;
          div.innerHTML = role;
          div.style.backgroundColor = data[i].roles[ii].rolecolor;
          container.appendChild(div);    

          console.log("role: "+role);
          console.log("i: "+i);
          console.log("ii: "+ii);
          console.log("rolename: "+ data[i].roles[ii].rolename);
          console.log("Object.length: "+Object.keys(data[i].roles).length); 
          console.log("Roles array.length: "+data[i].roles.length);           
        }

 */        
      //Assign colors to variables manually:
        roleColor1 = data[i].roles[0].rolecolor;
        
        //get rid of undefined var for 2nd color for a Cat:
        if (Object.keys(data[i].roles).length>1){
          roleColor2 = data[i].roles[1].rolecolor;
        }else {roleColor2 = ""};   
        
        //document.createTextNode; document.appendchild;

/*         
      //Building Html Nodes layout for every Person: 
      var childDiv =  container.appendChild(div);
      childDiv.classList.add("child-div");
      childDiv.appendChild(crown);
      image.innerHTML = `<img src="http://sandbox.bittsdevelopment.com/code1/employeepics/${i}.jpg" alt="employee ${i}" id="photo">`;
      childDiv.appendChild(image);
      h2.innerHTML = data[i].employeefname+ ' '+ data[i].employeelname;
      childDiv.appendChild(h2);
      p.innerHTML =  data[i].employeebio;
      childDiv.appendChild(p);

 */
 
        
      //Building Html string layout for every Person:  
      output = container.innerHTML += 
      '<div class="child-div">' + crown +
        `<img src="http://sandbox.bittsdevelopment.com/code1/employeepics/${i}.jpg" alt="employee ${i}" id="photo">` +
        '<h2>'+ data[i].employeefname+ ' '+ data[i].employeelname+'</h2>'+
        '<p>'  + data[i].employeebio + '</p>'+
        '<div class="role-div" style="background-color:'+roleColor1+'">'+ role1  + '</div>'+
        '<div class="role-div" style="background-color:'+roleColor2+'">'+ role2 +'</div>'+
      '</div>';
      console.log("rolename: "+role1);
      console.log("rolename: "+role2);

     }
  }
} // closing function




