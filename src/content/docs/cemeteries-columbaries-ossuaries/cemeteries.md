---
title: Cemeteries
description: Catholic cemeteries under the diocese.
---

## La Loma Catholic Cemetery (LLCC)

---

<div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start; margin-bottom: 2rem;">

  <div style="flex: 1; min-width: 300px;">
    <div style="position: relative; width: 100%; display: flex; align-items: center;">
      <button onclick="prevSlide('llcc')" style="position:absolute;top:50%;left:8px;transform:translateY(-50%);background:none;color:white;border:none;font-size:2.5rem;padding:0;cursor:pointer;text-shadow:0 2px 4px rgba(0,0,0,0.8);line-height:1;z-index:1;">&#8249;</button>
      <a href="https://www.google.com/maps/search/?api=1&query=La+Loma+Catholic+Cemetery+Caloocan" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%;">
        <img id="slide-llcc" src="https://dioceseofkalookan.ph/wp-content/uploads/2020/12/dscf3275.jpg" alt="La Loma Catholic Cemetery" style="border-radius: 8px; width: 100%; height: auto; box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor: pointer; display: block;" />
      </a>
      <button onclick="nextSlide('llcc')" style="position:absolute;top:50%;right:8px;transform:translateY(-50%);background:none;color:white;border:none;font-size:2.5rem;padding:0;cursor:pointer;text-shadow:0 2px 4px rgba(0,0,0,0.8);line-height:1;z-index:1;">&#8250;</button>
    </div>
    <p style="font-size: 0.85rem; color: #666; margin-top: 0.5rem; text-align: center;">📍 Click image to open in Google Maps</p>
  </div>



  <div style="flex: 1.5; min-width: 300px;">

* **Address:** Across C-3 Road, 5th St., Caloocan, 1400 Metro Manila  
* **Telephone:** (02) 8277 3261  
* **Email:** [lalomacatholiccemetery@gmail.com](mailto:lalomacatholiccemetery@gmail.com)  

**Administration**
* **Head Administrator:** His Eminence Pablo Virgilio S. Cardinal David, D.D.  
* **Council:** Rev. Fr. Jeronimo Ma. J. Cruz, Rev. Fr. Gaudioso A. Sustento,  
  Rev. Fr. Rufino P. Yabut, Rev. Fr. Romeo C. Tuazon  
* **Deputy Administrator:** Ms. Edith I. Dabuit  
* **Chaplain:** Rev. Fr. Lauro M. Toledo  
* **Records Dept. Head:** Ms. Susan Elumba  

  </div>
</div>

---

## San Bartolome Catholic Cemetery

---

<div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start; margin-bottom: 2rem;">

  <div style="flex: 1; min-width: 300px;">
    <a href="https://www.findagrave.com/cemetery/2658691/san-bartolome-catholic-cemetery" target="_blank" target="_blank" rel="noopener noreferrer" style="display: block;">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/San_Bartolome_de_Malabon_Catholic_Cemetery_10.jpg" alt="San Bartolome Catholic Cemetery" style="border-radius: 8px; width: 100%; height: auto; box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor: pointer; display: block;" />
    </a>
    <p style="font-size: 0.85rem; color: #666; margin-top: 0.5rem; text-align: center;">📍 Click image to open in Google Maps</p>
  </div>


  <div style="flex: 1.5; min-width: 300px;">

* **Address:** #6 Rizal Ave. Ext., San Agustin, Malabon City  
* **Telephone:** (02) 283-3512 / (02) 281-1266  

**Administration**
* **Parish Priest/Administrator:** Rev. Fr. Elpidio Erlano Jr.  
* **Deputy Administrator/Payroll Master:** Mr. Francisco C. Torrefiel II  
* **Cashier/Cemetery Assistant/IT Specialist:** Mr. Noli P. Villafuerte  
* **Cemetery Assistant/Encoder:** Mr. Jesson Jay O. Erlano  
* **Liaison Officer/Cemetery Custodian:** Mr. Allan M. Simbulan  
* **Cemetery Guard:** Mr. Rolando A. Gumapos  
* **Cemetery Maintenance:** Mr. Amorie T. Cruz  

  </div>
</div>

---

## San Jose Catholic Cemetery

---

<div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start; margin-bottom: 2rem;">

  <div style="flex: 1; min-width: 300px;">
    <a href="https://www.google.com/maps/search/?api=1&query=San+Jose+Catholic+Cemetery+Navotas" target="_blank" rel="noopener noreferrer" style="display: block;">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/San_Jose_de_Navotas_Church%2C_Navotas_City.jpg/1280px-San_Jose_de_Navotas_Church%2C_Navotas_City.jpg?_=20201012124200" alt="San Jose Catholic Cemetery Navotas" style="border-radius: 8px; width: 100%; height: auto; box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor: pointer; display: block;" />
    </a>
    <p style="font-size: 0.85rem; color: #666; margin-top: 0.5rem; text-align: center;">📍 Click image to open in Google Maps</p>
  </div>


  <div style="flex: 1.5; min-width: 300px;">

* **Address:** Los Martirez St., Navotas City  
* **Telephone:** (02) 282 9126  

**Administration**
* **Parish Priest/Administrator:** Rev. Fr. Rufino P. Yabut  
* **Staff:** Mr. Russell Bautista  

  </div>
</div>




<script>
  const slides = {
    llcc: {
      images: [
        "https://dioceseofkalookan.ph/wp-content/uploads/2020/12/dscf3275.jpg",
        "https://dioceseofkalookan.ph/wp-content/uploads/2020/12/archival-photos-la-loma-7-1_2021-07-04_17-43-29.jpg",
        "https://dioceseofkalookan.ph/wp-content/uploads/2020/12/BluPrint-Stories-in-Stone-3.jpg"
      ],
      current: 0,
      preloaded: []
    }
  };

  function preloadImages(id) {
    slides[id].images.forEach(src => {
      const img = new Image();
      img.src = src;
      slides[id].preloaded.push(img);
    });
  }

  function nextSlide(id) {
    const s = slides[id];
    s.current = (s.current + 1) % s.images.length;
    document.getElementById('slide-' + id).src = s.images[s.current];
  }

  function prevSlide(id) {
    const s = slides[id];
    s.current = (s.current - 1 + s.images.length) % s.images.length;
    document.getElementById('slide-' + id).src = s.images[s.current];
  }

  document.addEventListener('DOMContentLoaded', () => preloadImages('llcc'));
</script>
