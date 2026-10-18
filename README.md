# webdev-actions-lab

![Deploy Static Website](https://github.com/67160332/webdev-actions-lab/actions/workflows/deploy.yml/badge.svg)

เว็บไซต์ส่วนตัวแบบ Static ที่สร้างจากแลป **GitHub Actions + GitHub Pages** ทุกครั้งที่ push โค้ดเข้า branch `main` ระบบจะ Deploy เว็บไซต์ให้อัตโนมัติ

🔗 **เว็บไซต์:** https://67160332.github.io/webdev-actions-lab/

## ผู้จัดทำ

| รายการ | ข้อมูล |
|---|---|
| ชื่อ | ณัทฐิกา ครุยาศรัทธา |
| รหัสนิสิต | 67160332 |

## ฟีเจอร์ของเว็บไซต์

- หน้าเว็บส่วนตัวโทนชมพูพาสเทล ประกอบด้วย About Me, Skills และ Contact
- แถบเมนูด้านบนที่เลื่อนไปยังแต่ละส่วนได้
- ปุ่ม **Say Hello** เปลี่ยนข้อความบนหน้าเว็บด้วย JavaScript พร้อมเอฟเฟกต์หัวใจลอย
- ปุ่มสลับธีม **Dark / Light**
- รองรับหน้าจอมือถือ (Responsive)

## เทคโนโลยีที่ใช้

- HTML
- CSS
- JavaScript
- Git และ GitHub
- GitHub Actions
- GitHub Pages

## โครงสร้างโปรเจกต์

```text
webdev-actions-lab/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
└── README.md
```

## หลักการทำงาน

```text
แก้โค้ดบนเครื่อง → git commit → git push (main) → GitHub Actions เริ่มทำงาน
→ อัปโหลดเว็บไซต์เป็น Artifact → Deploy ขึ้น GitHub Pages → เปิดดูผ่าน URL
```

Workflow อยู่ที่ `.github/workflows/deploy.yml` และทำงานเมื่อ

- มีการ push เข้า branch `main`
- กดรันเองจากแท็บ Actions (`workflow_dispatch`)

## วิธีรันในเครื่อง

1. Clone โปรเจกต์
   ```bash
   git clone https://github.com/67160332/webdev-actions-lab.git
   cd webdev-actions-lab
   ```
2. เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ได้ทันที ไม่ต้องติดตั้งอะไรเพิ่ม

## วิธีอัปเดตเว็บไซต์

```bash
git add .
git commit -m "ข้อความอธิบายการแก้ไข"
git push origin main
```

จากนั้นดูสถานะที่แท็บ **Actions** เมื่อเป็นสีเขียว เว็บไซต์จะอัปเดตเอง (ถ้ายังไม่เปลี่ยนให้กด Hard Refresh)

## หมายเหตุ

GitHub Pages รองรับเฉพาะเว็บแบบ Static (HTML, CSS, JavaScript) ไม่สามารถรัน PHP หรือ MySQL ฝั่ง Server ได้
