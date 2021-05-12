//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});


// typing animation script

var typed = new Typed(".typing", {
	strings: [" Creative Frontend Developer", "Graphic Designer", "Digital Marketer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

 var typed = new Typed(".typing-2", {
        strings: ["Creative Frontend Developer", "Graphic Designer", "Digital Marketer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

// typing liquid blobs script

function Blobs(options){
    this.count = options && options.count ? options.count : 10;
    this.animationTime = options && options.animationTime ? options.animationTime : 700;
    this.deltaTime = options && options.deltaTime ? options.deltaTime : 300;
    this.blobs = [];
    this.container = options && options.container ? document.querySelector(options.container) : document.querySelector('.blobs');

    this.random = function(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    };

    this.objectSort = function(obj){
        return Object.keys(obj).sort().reduce(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
    };

    this.dictionary = {
        '1': 'a',
        '11': 'b',
        '22': 'c',
        '2': 'd',
        '3': 'e',
        '4': 'f',
        '44': 'g',
        '33': 'h'
    };

    this.generateBlob = function(){
        var result = '',
            obj = {};
        for(var i = 1; i <= 4; i++){
            var rand = this.random(25, 75);
            obj[this.dictionary[i]] = rand;
            obj[this.dictionary[''+i+i]] = 100 - rand;
        }
        obj = this.objectSort(obj);
        for(var item in obj){
            result += obj[item]+'% ';
        }
        result = result.slice(0, result.length - 1);
        var resultPartOne = result.slice(0, result.length / 2),
            resultPartTwo = result.slice(result.length / 2, result.length);
        result = resultPartOne+ ' / '+resultPartTwo;
        return result;
    };

    this.generateBlobTime = function(){
        return this.random(this.animationTime - this.deltaTime, this.animationTime + this.deltaTime);
    }

    this.transformBlob = function(item, index){
        var time = this.blobs[index].time,
            self = this;
      !this.inited && setTimeout(function(){
          self.go(item, index, time);
          self.inited = true;
      }, 0);
        setTimeout(function(){
            self.go(item, index, time);
            self.transformBlob(item, index);
        }, time);
    };
  
  this.go = function(item, index, time){
    item.style.transition = 'all '+ time / 1000 +'s linear';
    item.style.left = this.random(30, 70)+'%';
    item.style.top = this.random(30, 70)+'%';
    item.style.borderRadius = this.generateBlob();
    this.blobs[index].time = this.generateBlobTime();
  }

    this.createBlob = function(index){
        var blob = document.createElement('div');
        blob.classList.add('blob');
        this.blobs.push({
            dom: blob,
            time: this.generateBlobTime(),
            index: index
        });
        return blob;
    };

    this.appendBlob = function(item){
        this.container.appendChild(item);
    }

    this.build = function(){
        if(!this.container) return false;
        for(var i = 0; i < this.count; i++){
            var blob = this.createBlob(i);
            this.appendBlob(blob);
            this.transformBlob(blob, i);
        }
    }

    this.init = function(){
        this.build();
    }

    this.init();
}

new Blobs({
  count: 8,
  animationTime: 3000,
  deltaTime: 500
});

//javascript for about leaf 


const  parallax = (e) => {
  document.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

const togglePopup = () => {
  const popup = document.getElementById("creditsPopup");
  popup.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  document.addEventListener('mousemove', parallax);
  document.addEventListener('keydown', event => {
    if (event.keyCode == 27) { // escape key maps to keycode `27`
      togglePopup();
    }
  });
});



//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}


//javascript for contact form message to gmail

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)