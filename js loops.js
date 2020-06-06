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
//  var name;  var bio; var photo; var output; var crown;
 var container =  document.getElementById("container");
//  var role1; var role2; var roleColor1; var roleColor2;
 var role; var color;


//Assign JSON object to a variable:
if (window.XMLHttpRequest) {
   // code for modern browsers
   xhttp = new XMLHttpRequest();
 } else {
   // code for old IE browsers
   xhttp = new ActiveXObject("Microsoft.XMLHTTP");
} 

//Getting data into Object:
xhttp.open("GET", "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php", true);
xhttp.send(); 

//Function that prints content of the Object: =============
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     data = JSON.parse(xhttp.responseText); 
    // console.log('obj length: '+Object.keys(data).length);

    //Main loop iterating through 3 main objects inside of JSON
    for ( i = 1; i <= Object.keys(data).length; i++) {

    //Building layout for every Person by creating Html elements: ----------
      var childDiv =  document.createElement("div"); 
      container.appendChild(childDiv);
      childDiv.classList.add("child-div");

      //displaying a Crown image selectively:
      if(data[i].employeeisfeatured == 1) {
        var crownImage = document.createElement("img"); 
        crownImage.src = "crown.png"; 
        crownImage.id = "crown";
        crownImage.alt = "crown image";
        childDiv.appendChild(crownImage);
        }
        // console.log("crown:"+crown.innerHTML);
        // console.log("index: "+i);
        // console.log(JSON.stringify(crownImage));
        // console.log("childDiv: "+childDiv);

      var personImage = document.createElement("img"); 
      personImage.src = `http://sandbox.bittsdevelopment.com/code1/employeepics/${i}.jpg`;
      personImage.id="photo";
      personImage.alt=`employee ${i}`;      
      childDiv.appendChild(personImage);
          // console.log(JSON.stringify (personImage));

      var h2 = document.createElement("h2");
      var h2Node = document.createTextNode(data[i].employeefname+ ' '+ data[i].employeelname);
      h2.appendChild(h2Node);
      childDiv.appendChild(h2);
      console.log(data[i].employeefname+ ' '+ data[i].employeelname);

      var p = document.createElement("p"); 
      var pNode = document.createTextNode(data[i].employeebio);
      p.appendChild(pNode);
      childDiv.appendChild(p);
      
      // Print Roles and Colors using nested loop iterating through "roles" array inside every object of top level: 
      for ( ii = 0; ii < data[i].roles.length; ii++) {
        role = data[i].roles[ii].rolename;
        var roleDiv = document.createElement("div");
        roleDiv.innerHTML = role;
        roleDiv.style.backgroundColor = data[i].roles[ii].rolecolor;
        roleDiv.classList.add("role-div");

        childDiv.appendChild(roleDiv);    

        // console.log("role: "+role);
        // console.log("i: "+i);
        // console.log("ii: "+ii);
        // console.log("rolename: "+ data[i].roles[ii].rolename);
        // console.log("Object.length: "+Object.keys(data[i].roles).length); 
        // console.log("Roles array.length: "+data[i].roles.length);           
      }
       
    }//closing main for loop
  }//closing if status==200
} // closing function

