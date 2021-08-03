let click = 0;// для отслеживания кликов

function show() {
    if (click === 0) {
        document.getElementById('about_text').style.display = 'block';
        //в документе, блок с ид 'about_text' меняем свойство на 'block'
        click++;//инкремент
    } else {
        document.getElementById('about_text').style.display = 'none';
        //в документе, блок с ид 'about_text' меняем свойство на 'none'
        click--;//декремент
    }
}
