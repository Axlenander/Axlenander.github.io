let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let x=0;
while(x<10)
{
  setTimeout(blah, 10);
  x+=1;
}

function blah()
{
  if(x%2===0)
  {
    myHeading.textContent = 'YES';
      alert('Yes');
  }
  else
  {
    myHeading.textContent = 'NOO';
      alert('no2');
  }
}