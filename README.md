Bu çalisma, verilen  görseli'ye göre HTML, Pure JavaScript ve CSS kullanılarak SPA (Single Page Application) yapıya dönüştürmektir.

 Is adimlari olarak;
- HTML hazirlanmasi
   HTML5 ve accessibity sağlamak için semantic tags kullandım. 
- CSS hazirlanmasi
   css3 ve preprocessor olarak sass kullandım
- JavaScript 
    kod yazma yaklasim olarak MVC (Model View Controller) yaklaşımı kullandım.
	Model: verilerimi tutan kısmı
	View: kullanıcı ve uyglama arasında etkileşim sağlayan kısmı
	Controller: uyglamadaki fonksyonların yöneten kısmı olarak tasarlamıştım.

	MVC design pattern tercih nedeni
	  1. Daha hızlı gelişme süreci 
	  2. Birden fazla görünüm sağlama yeteneği
	  3. Değişiklik tüm modeli etkilemez
	  4. MVC modeli verileri formatlamadan döndürür olması için tercih ettim
   
    Fonksiyonlar:
	  1. klavye yön tuslari (yukari/asagi ve sag/sol) ile seçenekler üzerinde hareket eder 
          2. Yön tusu ile sag tarafa geçildiginde soldaki menünü gizler,
	  3. Enter ile herhangi bir kareye basildiginda bir içerik gelir.
