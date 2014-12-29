function showMood(){
 name = document.getElementById('name').value;
 mood = document.getElementById('mood').value;

 moodstring = name+ " is "+mood+" today ." ;

 holder= document.getElementById('holder');
 
 holder.innerHTML = moodstring;
  
 } 
