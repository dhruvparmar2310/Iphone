$(document).ready(function () {
    $(".home").click(function () {
        $(".screen").toggleClass('active');
    });
});

$(document).ready(function () {
    $(".sleep").click(function () {
        $(".screen").toggleClass('active');
    });
});

function handleTimer() {
    const demo = document.getElementById('demo')
    // const volUp = document.getElementById('volumeStatus')
    if (demo.style.display === 'none') {
        demo.style.display = 'flex'
        // volUp.style.display = 'block'
    } else {
        demo.style.display = 'none'
        // volUp.style.display = 'none'

    }
}

function handleSilent() {
    const sound = document.getElementById('sound')
    const image = document.getElementById('silentImg')
    const text = document.getElementById('silentText')

    if (sound.style.display === 'none' && image.style.display === 'none' && text.style.display === 'none') {
        sound.style.display = 'block'
        image.style.display = 'flex'
        text.style.display = 'block'
    } else {
        sound.style.display = 'none'
        image.style.display = 'none'
        text.style.display = 'none'
    }
}

function handleVolumeUp() {
    const volUp = document.getElementById('volumeStatus')
    if (volUp.style.display === 'none') {
        volUp.style.display = 'block'
        volUp.volume = 0.2
    } else {
        volUp.style.display = 'none'
    }
}

/*------*/
setInterval(myTimer, 1000);

	function myTimer() {
		const time = new Date();
		document.getElementById("demo").innerHTML = time.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');

		const currentDay = new Date();

		var days = new Array(7);
        days[0] = "Sun";
        days[1] = "Mon";
        days[2] = "Tues";
        days[3] = "Wed";
        days[4] = "Thu";
        days[5] = "Fri";
        days[6] = "Sat";
        var r = days[currentDay.getDay()];
		document.getElementById('day').innerHTML = r + ', ';
		
		const currentDate = new Date();
		const months = new Array(12);
		months[0] = 'January';
		months[1] = 'February';
		months[2] = 'March';
		months[3] = 'April';
		months[4] = 'May';
		months[5] = 'June';
		months[6] = 'July';
		months[7] = 'August';
		months[8] = 'September';
		months[9] = 'October';
		months[10] = 'November';
		months[11] = 'December';

		const showMonth = months[currentDate.getMonth()]
		document.getElementById('date').innerHTML = currentDate.getDate() + ' ' + showMonth
	}

	function handleVolumeUp() {
		const volUp = document.getElementById('volumeStatus')
		if (volUp.style.display === 'block') {
			volUp.style.display = 'none'
		} else {
			volUp.style.display = 'block'
		}
	}