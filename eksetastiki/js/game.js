function myFunction() { 
    document.querySelector(".Start").style.display = "none"; // Hide the Start div
    document.querySelector(".Lobby").style.display = "block"; // Hide the Start div

    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

document.getElementById('Exit').onclick = function(){
    document.querySelector('.Lobby').style.display = 'none';
    document.querySelector('.BYE').style.display = 'block';
}

document.getElementById('Almost').onclick = function() {
    document.querySelector('.finished').style.display = 'block';
    document.querySelector('.item1_1').style.display = 'none';
    document.querySelector('.item2_1').style.display = 'none';
    document.querySelector('.item3_1').style.display = 'none';

    document.querySelector('.exit').style.display = 'block';
    document.querySelector('.exit2').style.display = 'block';
    document.querySelector('.LobbyLefty').style.display = 'none';

}

document.getElementById('myLefty').onclick = function() {
    document.querySelector('.Lobby').style.display = 'none';
    document.querySelector('.LeftRoom').style.display = 'block';
    document.querySelector('.FindTheDifference').style.display = 'block';
    if(x == 1){
        document.querySelector('.item2_2').style.display = 'block';
    } else {
        document.querySelector('item2_2').style.display = 'none';
    }

    if(y == 1){
        document.querySelector('.item3_2').style.display = 'block';
    } else {
        document.querySelector('.item3_2').style.display = 'none';
    }



};

document.getElementById('myLobbyRighty').onclick = function() {
    document.querySelector('.Lobby').style.display = 'none';
    document.querySelector('.RightRoom').style.display = 'block';
    document.querySelector('.LobbyLefty2').style.display = 'block';
    document.querySelector('#myLefty2').style.display = 'block';
    if(x == 1){
        document.querySelector('.barracks2').style.display = 'none';
    } else {
        document.querySelector('.barracks2').style.display = 'block';
    }
};

    document.getElementById('myRighty').onclick = function() {
    if(score >= 70){
        document.querySelector('.Lobby').style.display = 'block';
        document.querySelector('.LeftRoom').style.display = 'none';
        document.querySelector('.FindTheDifference').style.display = 'none';
        document.querySelector('.barracks').style.display = 'none';
    } else {
        document.querySelector('.Lobby').style.display = 'block';
        document.querySelector('.LeftRoom').style.display = 'none';
        document.querySelector('.FindTheDifference').style.display = 'none';
        document.querySelector('.barracks').style.display = 'block';
    }
}

var score = 0;
var spots = ['.spot1', '.spot2', '.spot3','.spot4','.spot5','.spot6','.spot7'];
/*
var spotsProps = {
    spot1:{'a':1, 'b':2, 'c':3},
    spot2:{'a':11, 'b':12, 'c':13},
    spot3:{'a':21, 'b':22, 'c':23},
    spot4:{'a':31, 'b':32, 'c':33},
    spot5:{'a':41, 'b':42, 'c':43}
    };
*/

spots.forEach(function(item){

    spot = document.querySelector(item);
    myPropsSpot = item.replace('.', '');
    //console.log(spotsProps[myPropsSpot].b);
    myCoords = spot.coords;
    console.log(myCoords);
    myCoordsSplit = myCoords.split(',');
    myX = parseInt(myCoordsSplit[0]);
    myY = parseInt(myCoordsSplit[1]);
    spot.style.left=(myX-40)+'px';
    spot.style.top =(myY-30)+'px';
    console.log(item+'='+myX);
    spot.style.width='32px';
    spot.style.height='32px';
    spot.style.display='block';

    spot.addEventListener('click', function(){
        myHiliterId = item.replace('.', '#');
        myHiliter = document.querySelector(myHiliterId);
        myHiliter.style.display='block';
        myCoords = this.coords;

        myCoordsSplit = myCoords.split(',');
        myX = parseInt(myCoordsSplit[0]);
        myY = parseInt(myCoordsSplit[1]);

        //console.log(myX +' - '+ myY);
        console.log(this.shape);
        if(this.shape == 'circle'){
            myHiliter.style.left  = (myX - 50 )+'px';
            myHiliter.style.top   = (myY - 50)+'px';
        }

        if(this.shape == 'rect'){
            myHiliter.style.left  = (myX - 15)+'px';
            myHiliter.style.top   = (myY - 15)+'px';
        }

        score+=10;
        document.querySelector('#score').innerHTML = score;
        this.style.display='none';
        this.style.zindex = 1;

        if(score==70){
            document.querySelector('.item1_1').style.display = 'block';
            document.querySelector('.item1_2').style.display = 'block';
            document.querySelector('.item1_3').style.display = 'block';
            document.querySelector('.item1_4').style.display = 'block';
        }

        if( y == 1){
            document.querySelector('.item3_2').style.display = 'block';
        } else {
            document.querySelector('.item3_2').style.display = 'none';
        }


    })

});

document.getElementById('myLefty2').onclick = function(){
    document.querySelector('.RightRoom').style.display = 'none';
    document.querySelector('.Lobby').style.display = 'block';
    if(x == 1){
        document.querySelector('.item2_1').style.display = 'block';
    } else {
        document.querySelector('.item2_1').style.display = 'none';
    }

    if(y == 1){
        document.querySelector('.item3_1').style.display = 'block';
        document.querySelector('.Almost').style.display = 'block'; 
    } else {
        document.querySelector('.item3_1').style.display = 'none';
    }
};

var y = 0;
    document.getElementById('myRightRighty').onclick = function() {
        document.querySelector('.RightRoom').style.display = 'none';
        document.querySelector('.LastRoom').style.display = 'block';
        document.querySelector('.item1_4').style.display = 'block';
        document.querySelector('.item2_4').style.display = 'block';
        y = 1;
    };

var x = 0;
document.getElementById('btn1').onclick = function(){
    x = 1;
    document.querySelector('.item2_3').style.display = 'none';
    document.querySelector('.barracks2').style.display = 'none';
    document.querySelector('.item2_3').style.display = 'block';
    document.querySelector('.RightRighty').style.display = 'block';
};

// Combination lock logic for the Last Room
const correct = [3, 3, 3, 3];
const values = [1, 1, 1, 1];
let locked = false;

function updateColors() {
    for (let i = 0; i < 4; i++) {
        const el = document.getElementById('num' + i);
        el.textContent = values[i];
        el.classList.remove('blue', 'red', 'green');
        if (locked) {
            if (values[i] < correct[i]) {
                el.classList.add('blue');
            } else if (values[i] > correct[i]) {
                el.classList.add('red');
            } else {
                el.classList.add('green');
            }
        }
    }
}

function changeDigit(idx, delta) {
    if (locked) return;
    values[idx] += delta;
    if (values[idx] < 1) values[idx] = 9;
    if (values[idx] > 9) values[idx] = 1;
    updateColors();
}

function lockAnswer() {
    locked = true;
    updateColors();
    document.getElementById('lockBtn').style.display = 'none';
    document.getElementById('tryAgainBtn').style.display = 'block';
    // Check if the answer is correct
    if (values[0] === 3 && values[1] === 3 && values[2] === 3 && values[3] === 3) {
        document.getElementById('lastPiece').style.display = 'block';
    }
}

function tryAgain() {
    locked = false;
    updateColors();
    document.getElementById('lockBtn').style.display = 'block';
    document.getElementById('tryAgainBtn').style.display = 'none';
    document.getElementById('lastPiece').style.display = 'none';
}

// Initialize colors on load
updateColors();

document.getElementById('myLastLefty').onclick = function(){
    document.querySelector('.RightRoom').style.display = 'block';
    document.querySelector('.LastRoom').style.display = 'none';
    if(y == 1){
        document.querySelector('.item3_3').style.display = 'block';
    } else {
        document.querySelector('.item3_3').style.display = 'none';
    }
};
