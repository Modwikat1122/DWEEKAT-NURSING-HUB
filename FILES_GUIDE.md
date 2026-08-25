# 📥 دليل إضافة الملفات القابلة للتحميل

## نظرة عامة
حالياً، روابط تحميل PDF و PPT في الموقع تعرض رسائل تنبيهية. هذا الدليل يشرح كيفية إضافة الملفات الفعلية.

---

## 📂 الخطوة 1: إنشاء مجلد الملفات

أنشئ مجلد جديد باسم `files` في جذر المشروع:

```
dweekat-nursing-hub/
├── index.html
├── css/
├── js/
└── files/         ← أنشئ هذا المجلد
    ├── bls-guide.pdf
    ├── bls-slides.ppt
    ├── acls-guide.pdf
    └── ...
```

---

## 📄 الخطوة 2: تسمية الملفات

### اتبع هذا النظام:

#### BLS Files:
- `bls-guide.pdf` - دليل BLS
- `bls-slides.ppt` - عرض تقديمي BLS

#### ACLS Files:
- `acls-guide.pdf` - دليل ACLS
- `acls-slides.ppt` - عرض تقديمي ACLS

#### PALS Files:
- `pals-guide.pdf` - دليل PALS
- `pals-slides.ppt` - عرض تقديمي PALS

#### ICU Files:
- `icu-guide.pdf` - دليل ICU
- `icu-slides.ppt` - عرض تقديمي ICU

#### Emergency Care Files:
- `emergency-guide.pdf` - دليل Emergency Care
- `emergency-slides.ppt` - عرض تقديمي Emergency Care

#### Patient Safety Files:
- `safety-guide.pdf` - دليل Patient Safety
- `safety-slides.ppt` - عرض تقديمي Patient Safety

#### Medication Files:
- `medication-guide.pdf` - دليل Medication Administration
- `medication-slides.ppt` - عرض تقديمي Medication Administration

---

## 🔧 الخطوة 3: تحديث الروابط في index.html

افتح `index.html` وابحث عن كل `onclick="alert('يرجى رفع ملف...')"`

### مثال على التعديل:

#### قبل:
```html
<a href="#" class="file-btn" onclick="alert('يرجى رفع ملف PDF للتحميل'); return false;">
    <i class="fas fa-file-pdf"></i>
    تحميل PDF
</a>
<a href="#" class="file-btn" onclick="alert('يرجى رفع ملف PPT للتحميل'); return false;">
    <i class="fas fa-file-powerpoint"></i>
    تحميل PPT
</a>
```

#### بعد:
```html
<a href="files/bls-guide.pdf" class="file-btn" download>
    <i class="fas fa-file-pdf"></i>
    تحميل PDF
</a>
<a href="files/bls-slides.ppt" class="file-btn" download>
    <i class="fas fa-file-powerpoint"></i>
    تحميل PPT
</a>
```

---

## 📝 الخطوة 4: الكود الكامل للتحديث

### BLS (الموضوع الأول):
```html
<div class="topic-files">
    <a href="files/bls-guide.pdf" class="file-btn" download>
        <i class="fas fa-file-pdf"></i>
        تحميل PDF
    </a>
    <a href="files/bls-slides.ppt" class="file-btn" download>
        <i class="fas fa-file-powerpoint"></i>
        تحميل PPT
    </a>
</div>
```

### ACLS (الموضوع الثاني):
```html
<div class="topic-files">
    <a href="files/acls-guide.pdf" class="file-btn" download>
        <i class="fas fa-file-pdf"></i>
        تحميل PDF
    </a>
    <a href="files/acls-slides.ppt" class="file-btn" download>
        <i class="fas fa-file-powerpoint"></i>
        تحميل PPT
    </a>
</div>
```

### PALS (الموضوع الثالث):
```html
<div class="topic-files">
    <a href="files/pals-guide.pdf" class="file-btn" download>
        <i class="fas fa-file-pdf"></i>
        تحميل PDF
    </a>
    <a href="files/pals-slides.ppt" class="file-btn" download>
        <i class="fas fa-file-powerpoint"></i>
        تحميل PPT
    </a>
</div>
```

### ICU Nursing (الموضوع الرابع):
```html
<div class="topic-files">
    <a href="files/icu-guide.pdf" class="file-btn" download>
        <i class="fas fa-file-pdf"></i>
        تحميل PDF
    </a>
    <a href="files/icu-slides.ppt" class="file-btn" download>
        <i class="fas fa-file-powerpoint"></i>
        تحميل PPT
    </a>
</div>
```

### Emergency Care (الموضوع الخامس):
```html
<div class="topic-files">
    <a href="files/emergency-guide.pdf" class="file-btn" download>
        <i class="fas fa-file-pdf"></i>
        تحميل PDF
    </a>
    <a href="files/emergency-slides.ppt" class="file-btn" download>
        <i class="fas fa-file-powerpoint"></i>
        تحميل PPT
    </a>
</div>
```

### Patient Safety (الموضوع السادس):
```html
<div class="topic-files">
    <a href="files/safety-guide.pdf" class="file-btn" download>
        <i class="fas fa-file-pdf"></i>
        تحميل PDF
    </a>
    <a href="files/safety-slides.ppt" class="file-btn" download>
        <i class="fas fa-file-powerpoint"></i>
        تحميل PPT
    </a>
</div>
```

### Medication Administration (الموضوع السابع):
```html
<div class="topic-files">
    <a href="files/medication-guide.pdf" class="file-btn" download>
        <i class="fas fa-file-pdf"></i>
        تحميل PDF
    </a>
    <a href="files/medication-slides.ppt" class="file-btn" download>
        <i class="fas fa-file-powerpoint"></i>
        تحميل PPT
    </a>
</div>
```

---

## 🚀 الخطوة 5: الاختبار

1. ضع ملفات PDF و PPT في مجلد `files/`
2. افتح `index.html` في المتصفح
3. اضغط على زر "تحميل PDF" أو "تحميل PPT"
4. يجب أن يبدأ التحميل فوراً

---

## 💡 نصائح إضافية

### حجم الملفات:
- احرص على أن تكون الملفات بحجم معقول (< 10 MB)
- استخدم PDF بدلاً من صور ممسوحة ضوئياً

### التنسيق:
- استخدم أسماء ملفات واضحة بدون مسافات
- استخدم أحرف صغيرة (lowercase)
- استخدم الشرطة `-` بدلاً من المسافة

### الأمان:
- تأكد من أن الملفات خالية من الفيروسات
- لا تضع معلومات حساسة في الملفات العامة

---

## 📊 قائمة الملفات المطلوبة (Checklist)

```
□ files/bls-guide.pdf
□ files/bls-slides.ppt
□ files/acls-guide.pdf
□ files/acls-slides.ppt
□ files/pals-guide.pdf
□ files/pals-slides.ppt
□ files/icu-guide.pdf
□ files/icu-slides.ppt
□ files/emergency-guide.pdf
□ files/emergency-slides.ppt
□ files/safety-guide.pdf
□ files/safety-slides.ppt
□ files/medication-guide.pdf
□ files/medication-slides.ppt
```

**المجموع**: 14 ملف (7 مواضيع × 2 ملف لكل موضوع)

---

## 🔍 استكشاف الأخطاء

### المشكلة: الملف لا يُحمّل
**الحل**: تحقق من:
- اسم الملف صحيح
- الملف موجود في مجلد `files/`
- المسار صحيح في HTML

### المشكلة: الملف يفتح بدلاً من التحميل
**الحل**: أضف `download` attribute:
```html
<a href="files/file.pdf" download>
```

### المشكلة: خطأ 404 Not Found
**الحل**: تأكد من:
- مجلد `files/` في نفس مستوى `index.html`
- اسم الملف مطابق تماماً (حساس لحالة الأحرف)

---

## 🎨 تخصيص أيقونات الملفات

### لإضافة أنواع ملفات أخرى:

#### Word Documents:
```html
<a href="files/document.docx" class="file-btn" download>
    <i class="fas fa-file-word"></i>
    تحميل Word
</a>
```

#### Excel Files:
```html
<a href="files/spreadsheet.xlsx" class="file-btn" download>
    <i class="fas fa-file-excel"></i>
    تحميل Excel
</a>
```

#### Video Files:
```html
<a href="files/video.mp4" class="file-btn" download>
    <i class="fas fa-file-video"></i>
    تحميل فيديو
</a>
```

---

## ✅ بعد الانتهاء

بعد إضافة جميع الملفات:
1. ✅ اختبر جميع روابط التحميل
2. ✅ تأكد من أن الملفات تُحمّل بشكل صحيح
3. ✅ احذف رسائل `alert` القديمة
4. ✅ انشر الموقع

---

**جاهز! الآن الملفات القابلة للتحميل تعمل بشكل كامل! 📥✅**