var work_text ={
    title: 'Multi-Post Stories Gain+Glory',
    feature_image: './img/Plaholder.png',
    technologies: ['html', 'css', 'javaScript','html'],
    btn_text:'See Project',
    link_to_source: '#'
    }

var work = document.getElementById('work');

for (let i = 0; i < 6; i++){
  work.innerHTML = work.innerHTML + `
      <article class="main-container">
            <div class="grid-item">
                <div class="flex-item1"><img src="${work_text.feature_image}" alt="placeholder"></div>
                <div class="flex-item2">
                    <h2>${work_text.title}</h2>
                </div>
                <ul class="inner-flex-item">
                    <li class="pill-btn">${work_text.technologies[0]}</li>
                    <li class="pill-btn">${work_text.technologies[1]}</li>
                    <li class="pill-btn">${work_text.technologies[2]}</li>
                    <li class="pill-btn">${work_text.technologies[3]}</li>
                </ul>
                <button id="myBtn" class="flex-item4 ">${work_text.btn_text}</button>
            </div>
        </article>
    `;
}
