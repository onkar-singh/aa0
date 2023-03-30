
//{ "pc": { "Bio": [160, 165], "NBio": [105, 110], "OverS": [210], "Polo": [185, 195], "Hood": [300, 310], "Sweat": [235, 245] }, "wt": { "Bio": 0.20, "NBio": 0.20, "OverS": 0.25, "Polo": 0.25, "Hood": 0.55, "Sweat": 0.45 }, "sqt": 20, "sp": 30 }

//sendd(urli,od,'type')
async function sendd(urld,d9,b) {
  await fetch(urld, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(d9)
  })
    .then((res) => {
      console.log(b+' data send ', d9 ,res)
    })
    .catch((error) => {
      if(localStorage.gr5!='hi2'){
      alert('error in '+b+' sendd fn- '+JSON.stringify(d9)+' '+error+'\nTake a screenshot for Onkar');}
      console.log('error in '+b+' sendd fn- '+JSON.stringify(d9)+error);
      let kl=JSON.parse(localStorage.getItem('pend2'));
      kl['pendingPinData']=d9;
      localStorage.setItem("pend2", JSON.stringify(kl));  
    });
}

// let readyStateCheckInterval1 = setInterval(function() {
//   if (document.readyState === "complete") {
//       if (localStorage.imgf) {
//        // alert('hi222');
//         clearInterval(readyStateCheckInterval1);
//         let imgf5=localStorage.imgf;
//        // downl(imgf5.split(',,,')[0],imgf5.split(',,,')[1]); 
//         let htl="<a id='link55' href='"+imgf5.split(',,,')[0]+"' download='"+imgf5.split(',,,')[1]+"'>hjhj</a>";
//       let iframe = document.createElement('iframe');
//       document.getElementById("imgf").appendChild(iframe);
//       // document.body.appendChild(iframe);
//       iframe.contentWindow.document.open();
//       iframe.contentWindow.document.write(htl);
//       iframe.contentWindow.document.getElementById('link55').click();
//       iframe.contentWindow.document.close();
//       setTimeout(function(){ iframe.remove()}, 5000);
//         localStorage.removeItem("imgf");
//       }
//   }
// }, 50);



