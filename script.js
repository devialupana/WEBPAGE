const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mobileno = document.getElementById('mobileno');
const mail = document.getElementById('email');
const password = document.getElementById('pswd');
const checkbx = document.getElementById('drawing').checked;
const address = document.getElementById('addr');
const city = document.getElementById('city');
const radio = document.getElementById('female').checked;

let mailpat = /[A-Za-z0-9_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
let passpat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){6,}/;



// fname.addEventListener('input', ()=>{
// 	if(fname.value.length < 4){
// 		document.getElementById('fn').style.visibility='visible';
// 	}
// 	else{
// 		document.getElementById('fn').innerText="valid!";
// 		document.getElementById('fn').style.color="green";
// 	}
// });
function sp(){
	if(password.type=="password"){
		document.querySelector('i.bx').classList.add('bx-show');
		document.querySelector('i.bx').classList.remove('bx-hide');
		document.getElementById('pswd').type="text";
	}
	else{
		document.querySelector('i.bx').classList.add('bx-hide');
		document.querySelector('i.bx').classList.remove('bx-show');
		document.getElementById('pswd').type="password";
	}
}
function Validating(){
	if(fname.value.length<4){
		// alert('invalid');
		document.getElementById('fn').style.visibility='visible';
		return false;
	}
	if(lname.value.length<3){
		document.getElementById('ln').style.visibility='visible';
		return false;
	}
	if(mobileno.value.length!=10){
		document.getElementById('pn').style.visibility='visible';
		return false;
	}
	if(!mailpat.test(mail.value)){
		document.getElementById('m').style.visibility='visible';
		return false;
	}
	if(!passpat.test(password.value)){
		document.getElementById('p').style.visibility='visible';
		return false;
	}
	if(checkbx){
		document.getElementById('checkbox').style.visibility='visible';
		return false;
	}
	if(address.value==''){
		document.getElementById('add').style.visibility='visible';
		return false
	}
	if(city.value==''){
		document.getElementById('c').style.visibility='visible';
		return false
	}
	if(radio){
		document.getElementById('rad').style.visibility='visible';
		return false;
	}


	// else{
	// 	document.getElementById('fn').style.visibility='hidden';
	// 	document.getElementById('ln').style.visibility='hidden';
	// 	document.getElementById('pn').style.visibility='hidden';
	// }

	
}