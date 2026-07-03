// script.js - ลูกเล่นเพิ่มเติม (ตอนนี้ยังไม่มีฟังก์ชันพิเศษ แต่เตรียมไว้ให้เผื่ออนาคต)

// ตัวอย่าง: การสร้าง micro-interaction เมื่อ Hover ที่ Icon ข้อมูลติดต่อ
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