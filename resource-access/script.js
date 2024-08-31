console.log(navigator);
console.log(navigator.onLine);
console.log(navigator.permissions);

(async function(){
    console.log(await navigator.bluetooth.getAvailability());
})()
   
