const mobile = {
    brand: 'apple',
    model: 'I Phone 16 pro',
    'release year': '24 jun 2024',
    processor: 'snapdragon Gen 3',
    camera: ['24 MP','12 MP','4 MP']
};
console.log(mobile.brand);
console.log(mobile['release year']);
console.log(mobile.camera);
mobile.camera.forEach((camera,index)=>{
console.log(`camera ${index+1}: ${camera}`);
});