function showDashboard(){
	document.getElementById('dashboard').style.display = 'block';
	document.getElementById('users').style.display = 'none';
	document.getElementById('setting').style.display = 'none';
}

function showUsers(){
	document.getElementById('dashboard').style.display = 'none';
	document.getElementById('users').style.display = 'block';
	document.getElementById('setting').style.display = 'none';
}

function showSetting(){
	document.getElementById('dashboard').style.display = 'none';
	document.getElementById('users').style.display = 'none';
	document.getElementById('setting').style.display = 'block';
}