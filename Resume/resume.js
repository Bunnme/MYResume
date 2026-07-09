
const contactItems = document.querySelectorAll('.contact-item');

contactItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('i').style.color = '#3498db';
        item.querySelector('i').style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseout', () => {
        item.querySelector('i').style.color = '#2c3e50';
        item.querySelector('i').style.transform = 'scale(1)';
    });
});
// ระบบกล่องข้อความแบบพับได้ (Accordion)
const panelHeaders = document.querySelectorAll('.panel-header');

panelHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // 1. สลับคลาส active ที่หัวข้อ (เพื่อสั่งให้ CSS หมุนลูกศร)
        header.classList.toggle('active');
        
        // 2. หา div ถัดไป (ซึ่งก็คือ panel-content) 
        const content = header.nextElementSibling;
        
        // 3. สลับคลาส active ที่เนื้อหา (เพื่อสั่งให้ CSS โชว์/ซ่อน เนื้อหา)
        if (content) {
            content.classList.toggle('active');
        }
    });
});
// ระบบสลับรูปโปรไฟล์ 3 รูป (Easter Egg)
const profileImg = document.querySelector('.profile-img');

// 1. เก็บชื่อไฟล์รูปทั้งหมดไว้ใน Array (แก้ชื่อไฟล์ตรงนี้ได้ตามต้องการ)
const images = ['profile1.png', 'profile2.png', 'profile3.png'];

// 2. ตัวแปรเก็บตำแหน่งรูปปัจจุบัน (เริ่มที่ 0 คือ profile.png)
let currentImageIndex = 0; 

if (profileImg) {
    profileImg.addEventListener('click', () => {
        // 3. บวกค่า index เพิ่มทีละ 1 (ใช้เครื่องหมาย % เพื่อให้พอมันนับถึงรูปสุดท้าย แล้วเด้งกลับมาเริ่ม 0 ใหม่)
        currentImageIndex = (currentImageIndex + 1) % images.length;
        
        // 4. สั่งเปลี่ยนรูปตามชื่อไฟล์ใน Array
        profileImg.setAttribute('src', images[currentImageIndex]);
    });
}