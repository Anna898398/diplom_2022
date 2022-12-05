const data = [
    {
        "url": "icons/auto_01.jpeg"
    },

    {
        "url": "icons/auto_02.jpeg"
    },

    {
        "url": "icons/auto_03.jpeg"
    },

    {
        "url": "icons/auto_04.jpeg"
    },

    {
        "url": "icons/auto_05.jpeg"
    }
]

const photo = $('#gallery');

for (let i = 0; i < data.length; i++) {

    const img = $('<img>');
    photo.append(img); 
    img.attr({ 
        src: data[i].url
    }) 
}