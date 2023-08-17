
const texts=document.getElementById("text")
const textJustify=document.getElementById("just")
const textCenter=document.getElementById("center")
const textLeft=document.getElementById("left")
const textRight=document.getElementById("right")
const textBold=document.getElementById("bold")
const textItalic=document.getElementById("italic")
const textUnder=document.getElementById("under")
const textColor=document.getElementById("color")


textBold.addEventListener('click',function(){
    texts.style.fontWeight="bold"
} )

textItalic.addEventListener('click',function(){
    texts.style.fontStyle="italic"
} )
textUnder.addEventListener('click',function(){
    texts.style.textDecoration="underline"
} )
textLeft.addEventListener('click',function(){
    texts.style.textAlign="left"
} )
textRight.addEventListener('click',function(){
    texts.style.textAlign="right"
} )
textCenter.addEventListener('click',function(){
    texts.style.textAlign="center"
} )
textJustify.addEventListener('click',function(){
    texts.style.textAlign="justify"
} )

