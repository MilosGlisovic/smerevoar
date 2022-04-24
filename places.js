window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [

    
     

    {
     name: 'Smederevsku Tvrđavu, kao upravno, vojno, privredno, kulturno i crkveno sedište srpske Despotovine, podigao je Despot Đurađ Branković, sestrić despota Stefana Lazarevića. Sagrađena je u periodu od  1428-1439 godine.Svojim položajem na ušću reke Jezave u Dunav zauzima površinu od približno 11 hektara, ima oblik nepravilnog trougla i sastoji se iz dva dela - Velikog grada i Malog grada.',
     h: 'Smederevska Tvrđava',
     logo: 'logo.png',
     width: "1",
     height: "1",
     location: {
         lat: 44.05504, 
         lng: 20.48758,
     }
  
 },
 {
    name: 'Smederevsku Tvrđavu, kao upravno, vojno, privredno, kulturno i crkveno sedište srpske Despotovine, podigao je Despot Đurađ Branković, sestrić despota Stefana Lazarevića. Sagrađena je u periodu od  1428-1439 godine.Svojim položajem na ušću reke Jezave u Dunav zauzima površinu od približno 11 hektara, ima oblik nepravilnog trougla i sastoji se iz dva dela - Velikog grada i Malog grada.',
    h: 'Smederevska Tvrđava',
    logo: 'logo.png',
    width: "1",
    height: "1",
    location: {
        lat: 44.05469, 
        lng: 20.48725,
    }
 
},
 
{
    name: 'Smederevsku Tvrđavu, kao upravno, vojno, privredno, kulturno i crkveno sedište srpske Despotovine, podigao je Despot Đurađ Branković, sestrić despota Stefana Lazarevića. Sagrađena je u periodu od  1428-1439 godine.Svojim položajem na ušću reke Jezave u Dunav zauzima površinu od približno 11 hektara, ima oblik nepravilnog trougla i sastoji se iz dva dela - Velikog grada i Malog grada.',
    h: 'Smederevska Tvrđava',
    logo: 'logo.png',
    width: "1",
    height: "1",
    location: {
        lat: 44.83664, 
        lng: 20.38884,
    }
 
},
 
   
 {
     name: 'Smederevsku Tvrđavu, kao upravno, vojno, privredno, kulturno i crkveno sedište srpske Despotovine, podigao je Despot Đurađ Branković, sestrić despota Stefana Lazarevića. Sagrađena je u periodu od  1428-1439 godine.Svojim položajem na ušću reke Jezave u Dunav zauzima površinu od približno 11 hektara, ima oblik nepravilnog trougla i sastoji se iz dva dela - Velikog grada i Malog grada.',
     h: 'Smederevska Tvrđava',
     logo: 'logo.png',
     width: "1",
     height: "1",
     location: {
         lat: 44.83670,
         lng: 20.38887,
     }
 },
 

 


   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;
       let name2 = place.name;
       let logo = place.logo;
       let wdt = place.width;
       let hg = place.height;
       let bt = place.h;


       

       const model = document.createElement('a-image');
                   model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                   model.setAttribute('name', name2);
                   model.setAttribute('src', logo);
                   model.setAttribute('width', wdt); 
                   model.setAttribute('height', hg); 
                   model.setAttribute('look-at', '[gps-camera]');





                   // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
                   model.setAttribute('scale', '5, 5');
                   model.setAttribute('position', '0, 0, 0');

                   const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');
                   
                   const text = document.createElement('a-text');
                   text.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                   text.setAttribute('value', distanceMsg);
                   text.setAttribute('width', wdt); 
                    text.setAttribute('height', hg); 
                   text.setAttribute('look-at', '[gps-camera]');
                   text.setAttribute('scale', '10, 10');
                   text.setAttribute('color', 'white');
    
                  model.appendChild(text);
       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       text.addEventListener('loaded', () => {
        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });


       
       const clickListener = function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const name = ev.target.getAttribute('name');
        
        const el = ev.detail.intersection && ev.detail.intersection.object.el;

        //const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');


        if (el && el === ev.target) {

    
            
            //const msg = document.createElement('p');
            const container = document.createElement('div');
            const container3 = document.createElement('div');
            const container2 = document.createElement('h5');
            const label = document.createElement('p');

            const btn = document.createElement('div');
            //const link = document.createElement('a');
           // const btn1 = document.createElement('button');
            container.setAttribute('id', 'place-label');
            //link.setAttribute('href', place.link2);
            label.innerText = name;
            container2.innerText = bt;

           //msg.innerText = distanceMsg;
            btn.innerText = 'Close';
            container.setAttribute('class', 'card text-white bg-primary z-index-n1 position-relative mb-3');
            container3.setAttribute('class', 'card-body z-index-1 position-absolute');
            container2.setAttribute('class', 'card-title');
            label.setAttribute('class', 'card-text');
            btn.setAttribute('class', 'btn bg-light');

            //link.innerText = 'Zavrtite tocak';
           // btn1.innerText = 'Play';
            container.appendChild(container3);
            container.appendChild(container2);
            container.appendChild(label);
            container.appendChild(btn);
            //container.appendChild(msg);
            //container.appendChild(link);
            //container.appendChild(btn1);
            document.body.appendChild(container);



           // btn1.addEventListener("click", function() {
             //   let play = new SpeechSynthesisUtterance();
              // play.text = name;
              // window.speechSynthesis.speak(play);
              //});

            btn.addEventListener("click", function() {
                container.parentElement.removeChild(container);
              });

           // setTimeout(() => {
             //   container.parentElement.removeChild(container);
            //}, 1500);
        }
    };

    model.addEventListener('click', clickListener);
       scene.appendChild(model);
   });
   scene.appendChild(text);
   
}