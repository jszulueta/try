---
title: Columbaries
description: Catholic columbaries under the diocese.
---

## New La Loma Columbary

---

<div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start; margin-bottom: 2rem;">

  <div style="flex: 1; min-width: 300px;">
    <div style="position: relative; width: 100%; display: flex; align-items: center;">
      <button onclick="prevSlide('laloma')" style="position:absolute;top:50%;left:8px;transform:translateY(-50%);background:none;color:white;border:none;font-size:2.5rem;padding:0;cursor:pointer;text-shadow:0 2px 4px rgba(0,0,0,0.8);line-height:1;z-index:1;">&#8249;</button>
      <a href="https://www.google.com/maps/search/?api=1&query=Across+C-3+Road,+5th+St.,+Caloocan,+1400+Metro+Manila" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%;">
        <img id="slide-laloma" src="https://dioceseofkalookan.ph/wp-content/uploads/2020/12/columbary.jpg" alt="New La Loma Columbary" style="border-radius: 8px; width: 100%; height: auto; box-shadow: 0 4px 6px rgba(0,0,0,0.1); cursor: pointer; display: block;" />
      </a>
      <button onclick="nextSlide('laloma')" style="position:absolute;top:50%;right:8px;transform:translateY(-50%);background:none;color:white;border:none;font-size:2.5rem;padding:0;cursor:pointer;text-shadow:0 2px 4px rgba(0,0,0,0.8);line-height:1;z-index:1;">&#8250;</button>
    </div>
    <p style="font-size: 0.85rem; color: #666; margin-top: 0.5rem; text-align: center;">📍 Click image to open in Google Maps</p>
  </div>



  <div style="flex: 1.5; min-width: 300px;">

* **Address:** Across C-3 Road, 5th St., Caloocan, 1400 Metro Manila  
* **Telephone:** (02) 8277 3261  

**Administration**
* **Chairman of the Board:** Most Rev. Pablo Virgilio S. David, D.D.  
* **Members of the Board:** Rev. Fr. Jeronimo Ma. J. Cruz, Rev. Fr. Rufino P. Yabut,  
  Rev. Fr. Romeo C. Tuazon, Rev. Fr. Gaudioso A. Sustento  
* **Administration Manager:** Jerrel Lopez  
* **Building Maintenance Staff:** Lawrence Abella  
* **Administrative Staff:** John Wayne Garcia  
* **Administrative Assistant:** Jesus de Jesus Nell  

  </div>
</div>



<script>
  const slides = {
    laloma: {
      images: [
        "https://dioceseofkalookan.ph/wp-content/uploads/2020/12/columbary.jpg",
        "https://dioceseofkalookan.ph/wp-content/uploads/2020/12/70430786_694043224339743_2499125458180767744_n.jpg",
        "https://dioceseofkalookan.ph/wp-content/uploads/2020/12/147921477_1061830524227676_2002081601224020799_n.jpg"
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

  function updateDots(id) {
    const dots = document.querySelectorAll('#dots-' + id + ' span');
    dots.forEach((dot, i) => {
      dot.style.background = i === slides[id].current ? '#555' : '#bbb';
    });
  }

  function goToSlide(id, index) {
    slides[id].current = index;
    document.getElementById('slide-' + id).src = slides[id].images[index];
    updateDots(id);
  }

  function nextSlide(id) {
    const s = slides[id];
    s.current = (s.current + 1) % s.images.length;
    document.getElementById('slide-' + id).src = s.images[s.current];
    updateDots(id);
  }

  function prevSlide(id) {
    const s = slides[id];
    s.current = (s.current - 1 + s.images.length) % s.images.length;
    document.getElementById('slide-' + id).src = s.images[s.current];
    updateDots(id);
  }

  document.addEventListener('DOMContentLoaded', () => preloadImages('laloma'));
</script>
