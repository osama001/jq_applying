let displaydays= document.querySelector('.days')
let displayhours= document.querySelector('.hours')
let displayminutes= document.querySelector('.minutes')
let displayseconds= document.querySelector('.seconds')
let textarea= document.querySelector('textarea')
let number= document.querySelector('.number')

$('.info, .fa-x').click(function(){
    let leftValue = $('aside').outerWidth()
   
    if($('aside').offset().left<0){
        $('aside').css({left:0})   
    }else{
        $('aside').css({left:-leftValue})
    }
  

})
 let infoWidth= $('.info').outerWidth(true)
 $('.info').css('right',-infoWidth)

$('section ul li').click(function(){
    $(this).children().slideToggle(500)
    $(this).siblings().children().slideUp(500)

})

let mydate= new Date('2023-9-30')
let day = mydate.getDate()
let hours = mydate.getHours()
let minutes =  mydate.getMinutes()
let seconds = mydate.getSeconds()

setInterval(
    function(){
        let d1= new Date()
        
        let difrrence = mydate.getTime() - d1.getTime()
       
        displaydays.innerHTML=  Math.round(difrrence /1000/60/60/24) +' d'
        displayhours.innerHTML=  Math.round(difrrence /1000/60/60) +' h'
        displayminutes.innerHTML=  Math.round(difrrence /1000/60) +' m'
        displayseconds.innerHTML=  Math.round(difrrence /1000)+' s'
    },1000
)
textarea.addEventListener('input',function(){
    number.innerHTML = 100- textarea.value.length
console.log(textarea.value.length)
})

