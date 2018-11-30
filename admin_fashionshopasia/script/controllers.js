var myModule = angular.module('rootModule', ['ngRoute', 'angularUtils.directives.dirPagination', 'ui.bootstrap']);

//=================== START OF ROUTE PAGE ==============================
myModule.config(function ($routeProvider) {
  $routeProvider
    .when("/Home", {
      templateUrl: "homeInject.html",
      controller: "HomeCtrl"
    })
    .when("/Account", {
      templateUrl: "account.html",
      controller: "LoginCtrl"
    })
    .when("/Barang", {
      templateUrl: "dataBarang.html",
      controller: "BarangCtrl"
    })
    .when("/Kategori", {
      templateUrl: "dataKategori.html",
      controller: "KategoriCtrl"
    })
    .when("/Jenis", {
      templateUrl: "dataJenisBarang.html",
      controller: "JenisBarangCtrl"
    })
    .when("/Detail", {
      templateUrl: "dataDetailBarang.html",
      controller: "DetailBarangCtrl"
    })
    .when("/Sosial", {
      templateUrl: "dataSosial.html",
      controller: "SosialCtrl"
    })
    .when("/Info", {
      templateUrl: "dataInfo.html",
      controller: "InfoCtrl"
    })
    .otherwise({
      redirectTo: "/"
    });

}); //================== END OF ROUTE PAGE ==============================
//======================= CONTROLLERS START FROM HERE ===================
myModule.controller('HomeCtrl', function ($scope, $location, $http, $modal, $route) {
	//console.log("In Home Controllers....");
});

myModule.controller('PageCtrl', function ($scope, $location, $http, $modal, $route) {
  //console.log("In Home Controllers....");
});

myModule.controller('LoginCtrl', function ($scope, $http, $window, $modal, $route) { // ============== LOGIN ===========
  $scope.dataAdmin = {};
  $scope.akun = {};

  $scope.loginAdmin = function () {
    var username = $scope.username;
    var userpass = $scope.userpass;

    if (username == '' && userpass == '') {
      alert("Username dan password kosong ! ! !");
    } else if (username == '' || userpass == '') {
      alert("Username dan password harus diisi ! ! !");
    } else if (username != "" && userpass != "") {
      str = "web-service/login.php?username=" + username + "&userpass=" + userpass;
      $http.get(str).then(function (response) {
        if (response.data == "error") {
            $scope.errorLogin = "Username atau password salah . . .";
            console.log("Username atau password salah...");
        }
        else{
            var dataLogin = response.data.records;
            $scope.dataAdmin = response.data.records;
            localStorage.setItem("id", dataLogin.idadmin);
            localStorage.setItem("username", dataLogin.username);
            localStorage.setItem("nama", dataLogin.nama);
            window.location = "/fashionshopasia.com/admin_fashionshopasia/views/home.html#/Home";
          }
      });
    }

  };

    var nmAdmin = localStorage.getItem("nama");
    $scope.namaAdmin = nmAdmin;

  $scope.getAccount = function () {

  if (localStorage.getItem("id") == null && localStorage.getItem("username") == null && localStorage.getItem("nama") == null) {
      console.log("No login data");
      window.location.href = "../error page/index.html";
  }

  else{
      var idadmin = localStorage.getItem("id");
      console.log(idadmin);
      $scope.nama = localStorage.getItem("nama");
      $scope.username = localStorage.getItem("username"); 
    }
  };

  $scope.updateAkun = function(){
    
    if ($scope.nama == "") {
      console.log("Nama lengkap harus diisi ! ! !");
      $scope.errorPass = "Nama lengkap harus diisi ! ! !";
    }
    else if ($scope.username == "") {
      console.log("Username harus diisi ! ! !");
      $scope.errorPass = "Username harus diisi ! ! !";
    }
    else if ($scope.pwdbaru == undefined) {
      console.log("Password baru harus diisi ! ! !");
      $scope.errorPass = "Password baru harus diisi ! ! !";
    }
    else if ($scope.ulgpwdbaru == undefined) {
      console.log("Ulangi pasword baru ! ! !");
      $scope.errorPass = "Ulangi pasword baru ! ! !";
    }
    else if ($scope.pwdbaru != $scope.ulgpwdbaru) {
      console.log("Ulangi password baru salah ! ! !");
      $scope.errorPass = "Ulangi password baru salah ! ! !";
    }
    else{
      var idadmin = localStorage.getItem("id");
      console.log(idadmin);
      var nama = $scope.nama;
      var username = $scope.username;
      var userpass = $scope.pwdbaru;
       str = "../web-service/edit-account.php?idadmin=" + idadmin + "&nama=" + nama + "&username=" + username + "&userpass=" + userpass;
              $http.get(str).then(function(response){
              console.log(response.data);
              console.log("data berhasil dirubah...");
              }); 
        alert("Akun berhasil diubah, silahkan login dengan username dan password baru");
        window.location = "/fashionshopasia.com/admin_fashionshopasia/";
      }
  };

  $scope.logout = function(){
    console.log("Logout...");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("nama");
    window.location = "/fashionshopasia.com/admin_fashionshopasia/";
  };

});

myModule.controller('SosialCtrl', function ($scope, $http) { // ================= SOSIAL ============
  $scope.sosial = {};

  if (localStorage.getItem("username") == null && localStorage.getItem("nama") == null) {
      console.log("No login data");
      window.location.href = "../error page/index.html";
  }

  else{
        $scope.lihatsosial = function () {
          str = "../web-service/data-sosial.php";
          $http.get(str).then(function (response) {
            $scope.sosial = response.data.records;
            var datasosial = response.data.records;
            console.log(response.data.records);
            res = response.data.records;
              $scope.idSosial = res.idSosial;
              $scope.nohp = res.nohp;
              $scope.facebook = res.facebook;
              $scope.whatsapp = res.whatsapp;
              $scope.instagram = res.instagram;
              $scope.email = res.email;
              $scope.lokasi = res.lokasi;
          });
        }

        $scope.updatesosial = function(idSosial, nohp, facebook, whatsapp, instagram, email, lokasi){
          console.log(idSosial, nohp, facebook, whatsapp, instagram, email, lokasi);

              str = "../web-service/edit-sosial.php?idSosial=" + idSosial + "&nohp=" + nohp + "&facebook=" + facebook +
                                                  "&whatsapp=" + whatsapp + "&instagram=" + instagram + "&email=" + email +
                                                  "&lokasi=" + lokasi;
              $http.get(str).then(function(response){
              $scope.lihatsosial();
              console.log("data berhasil dirubah...");
              alert("Data berhasil dirubah...");
              });
        }
     }//=============================== TUTUP ELSE

      });

myModule.controller('KategoriCtrl', function ($scope, $http, $modal, $route, $window) { // ================= KATEGORI============

  if (localStorage.getItem("username") == null && localStorage.getItem("nama") == null) {
      console.log("No login data");
      window.location.href = "../error page/index.html";
  }

  else{

        $scope.datakategori = {};
        $("#kolomEditKategori").hide();
        $("#kolomTambahKategori").hide();
        var idKategori; 

        $scope.lihatkategori = function () {
          str = "../web-service/data-kategori.php";
          $http.get(str).then(function (response) {
            $scope.datakategori = response.data.records;
          });
        }

        $scope.inputTambahKategori = function(){
            $("#kolomTambahKategori").show();
            $("#kolomEditKategori").hide();
        }

        $scope.tutupModalKategori = function(){
          $("#kolomEditKategori").hide(); 
          $("#kolomTambahKategori").hide();
        } 

        $scope.tambahkategori = function () {
          var namakategori = $scope.datakategori.namakategori;
          var insertby = localStorage.getItem("username");
          if(namakategori == undefined){
            $scope.error = "harus diisi ! ! !";
          }else{
            str = "../web-service/tambah-kategori.php?namakategori=" + namakategori + "&insertby=" + insertby;
            $http.get(str).then(function (response) {
              $scope.lihatkategori();
            });
          }
        }

        $scope.updatekategori = function(){
          var namakategori = $scope.datakategori.namakategori;
          if (namakategori == undefined) {
            $scope.error = "harus diisi ! ! !";
          }else{
              str = "../web-service/edit-kategori.php?idkategori=" + idKategori + "&namakategori=" + namakategori;
              $http.get(str).then(function(response){
              $scope.lihatkategori();
              console.log("data berhasil dirubah...");
              }); 
            }
            $("#kolomEditKategori").hide();   
        }

        $scope.editkategori = function (idkategori, namakategori) {
          $("#kolomEditKategori").show();
          $("#kolomTambahKategori").hide();
          console.clear();
          idKategori = idkategori;
          console.log(idKategori);
          var copydata = angular.copy(namakategori);
          console.log(copydata);
          $scope.datakategori.namakategori = copydata;
        }

        $scope.getId = function(idkategori, namakategori){
          console.log(idkategori, namakategori);
          $scope.dataGetId = idkategori;
          $scope.dataGetNama = namakategori;
        }
        
        $scope.hapuskategori = function () {
          var idkategori = $scope.dataGetId;
          str = "../web-service/hapus-kategori.php?idkategori=" + idkategori;
          $http.get(str).then(function (response) {
            console.clear();
            console.log("Berhasil dihapus...");
            $scope.lihatkategori();
          });
        }
      }//=============================== TUTUP ELSE

      });

myModule.controller('InfoCtrl', function ($scope, $http, $modal, $route, $window) { // ================= KATEGORI============

  if (localStorage.getItem("username") == null && localStorage.getItem("nama") == null) {
      console.log("No login data");
      window.location.href = "../error page/index.html";
  }

  else{

        $scope.datainfo = {};
        $("#kolomEditInfo").hide();
        $("#kolomTambahInfo").hide();
        var idInfo; 

        $scope.lihatinfo = function () {
          str = "../web-service/data-info.php";
          $http.get(str).then(function (response) {
            $scope.datainfo = response.data.records;
          });
        }

        $scope.inputTambahInfo = function(){
            $("#kolomTambahInfo").show();
            $("#kolomEditInfo").hide();
        }

        $scope.tutupModalInfo = function(){
          $("#kolomEditInfo").hide(); 
          $("#kolomTambahInfo").hide();
        } 

        $scope.tambahinfo = function () {
          var judul = $scope.datainfo.judul;
          var isi = $scope.datainfo.isi;
          if(judul == null && isi == null){
            $scope.error = "harus diisi ! ! !";
          }else{
            str = "../web-service/tambah-info.php?judul=" + judul + "&isi=" + isi;
            $http.get(str).then(function (response) {
              $scope.lihatinfo();
            });
          }
        }

        $scope.updateinfo = function(){
          var judul = $scope.datainfo.judul;
          var isi = $scope.datainfo.isi;
          if (judul == null && isi == null) {
            $scope.error = "harus diisi ! ! !";
          }else{
              str = "../web-service/edit-info.php?idinfo=" + idInfo + "&judul=" + judul + "&isi=" + isi;
              $http.get(str).then(function(response){
              $scope.lihatinfo();
              console.log("data berhasil dirubah...");
              }); 
            }
            $("#kolomEditInfo").hide();   
        }

        $scope.editinfo = function (idinfo, judul, isi) {
          $("#kolomEditInfo").show();
          $("#kolomTambahInfo").hide();
          console.clear();
          idInfo = idinfo;
          console.log(idInfo);
          var judulinfo = angular.copy(judul);
          var isiinfo = angular.copy(isi);
          console.log(judulinfo, isiinfo);
          $scope.datainfo.judul = judulinfo;
          $scope.datainfo.isi = isiinfo;
        }

        $scope.getId = function(idinfo, judul, isi){
          console.log(idInfo, judul, isi);
          $scope.dataGetId = idinfo;
          $scope.dataGetNama = judul;
        }
        
        $scope.hapusinfo = function () {
          var idinfo = $scope.dataGetId;
          str = "../web-service/hapus-info.php?idinfo=" + idinfo;
          $http.get(str).then(function (response) {
            console.clear();
            console.log("Berhasil dihapus...");
            $scope.lihatinfo();
          });
        }
      }//=============================== TUTUP ELSE

});

myModule.controller('JenisBarangCtrl', function ($scope, $http, $modal, $route) { // ================= JENIS BARANG ===========
  
  if (localStorage.getItem("username") == null && localStorage.getItem("nama") == null) {
      console.log("No login data");
      window.location.href = "../error page/index.html";
  }
  else{
        $scope.datajenisbarang = {};
        $("#kolomEditJenis").hide();
        $("#kolomTambahJenis").hide();
        var idJenis;

        $scope.lihatjenisbarang = function () {
          str = "../web-service/data-jenisbarang.php";
          $http.get(str).then(function (response) {
            $scope.datajenisbarang = response.data.records;
          });
        }

        $scope.inputTambahJenis = function(){
            $("#kolomTambahJenis").show();
            $("#kolomEditJenis").hide();
        }

        $scope.tutupModalJenis = function(){
          $("#kolomEditJenis").hide(); 
          $("#kolomTambahJenis").hide();
        } 

        $scope.tambahjenisbarang = function () {
          var namajenisbarang = $scope.datajenisbarang.namajenisbarang;
          var insertby = localStorage.getItem("username");

          if (namajenisbarang == undefined){
                $scope.error = " harus diisi ! ! !";
            }else{
              str = "../web-service/tambah-jenisbarang.php?namajenisbarang=" + namajenisbarang + "&insertby=" + insertby;
              $http.get(str).then(function (response) {
                $scope.lihatjenisbarang();
              });
          }
        }

        $scope.updatejenisbarang = function(){
          var namajenisbarang = $scope.datajenisbarang.namajenisbarang;
          if (namajenisbarang == undefined){
                $scope.error = " harus diisi ! ! !";
            }else{
              str = "../web-service/edit-jenisbarang.php?idjenisbarang=" + idJenis + "&namajenisbarang=" + namajenisbarang;
              $http.get(str).then(function(response){
                  $scope.lihatjenisbarang();
                  console.log("data berhasil dirubah...");
                });
            }
        }

        $scope.editjenisbarang = function (idjenisbarang, namajenisbarang) {
          $("#kolomEditJenis").show();
          $("#kolomTambahJenis").hide();
          console.clear();
          idJenis = idjenisbarang;
          console.log(idJenis);
          var copydata = angular.copy(namajenisbarang);
          console.log(copydata);
          $scope.datajenisbarang.namajenisbarang = copydata;
        }

        $scope.getId = function(idjenisbarang, namajenisbarang){
          console.log(idjenisbarang, namajenisbarang);
          $scope.dataGetId = idjenisbarang;
          $scope.dataGetNama = namajenisbarang;
        }

        $scope.hapusjenisbarang = function () {
          var idjenisbarang = $scope.dataGetId;
          str = "../web-service/hapus-jenisbarang.php?idjenisbarang=" + idjenisbarang;
          $http.get(str).then(function (response) {
            console.clear();
            console.log("Berhasil dihapus...");
            $scope.lihatjenisbarang();
          });
        }
    }//=============================== TUTUP ELSE

});

myModule.controller('DetailBarangCtrl', function ($scope, $rootScope, $modal, $http, $route) { // ================= DETAIL BARANG ============

  if (localStorage.getItem("username") == null && localStorage.getItem("nama") == null) {
      console.log("No login data");
      window.location.href = "../error page/index.html";
  }
  else{
        $scope.datadetailbarang = {};
        $("#kolomEditDetail").hide();
        $("#kolomTambahDetail").hide();
        var idDetail;

        $scope.inputTambahDetail = function(){
            $("#kolomTambahDetail").show();
            $("#kolomEditDetail").hide();
        }

        $scope.tutupModalDetail = function(){
          $("#kolomEditDetail").hide(); 
          $("#kolomTambahDetail").hide();
        }

        $scope.tambahdetailbarang = function () {      
            var namadetailbarang = $scope.datadetailbarang.namadetailbarang;
            var insertby = localStorage.getItem("username");
            
            if (namadetailbarang == undefined){
                $scope.error = " harus diisi ! ! !";
            }else {
                str = "../web-service/tambah-detailbarang.php?namadetailbarang=" + namadetailbarang + "&insertby=" + insertby;
                $http.get(str).then(function (response) {
                console.log("data berhasil ditambahkan...");
                $scope.lihatdetailbarang();
                });
              }
           } 

        $rootScope.lihatdetailbarang = function () {
          str = "../web-service/data-detailbarang.php";
          $http.get(str).then(function (response) {
            $scope.datadetailbarang = response.data.records;
          });
        }

        $scope.updatedetail = function(){
          var namadetailbarang = $scope.datadetailbarang.namadetailbarang;
          if(namadetailbarang == undefined){
              $scope.error = " harus diisi ! ! !";
          }else{
                str = "../web-service/edit-detailbarang.php?iddetailbarang=" + idDetail + "&namadetailbarang=" + namadetailbarang;
                $http.get(str).then(function(response){
                $scope.lihatdetailbarang();
                console.log("data berhasil dirubah...");
              }); 
            }   
            $("#kolomEditDetail").hide();
        }

        $scope.editdetailbarang = function (iddetailbarang, namadetailbarang) {
          $("#kolomEditDetail").show();
          $("#kolomTambahDetail").hide();
          console.clear();
          idDetail = iddetailbarang;
          console.log(idDetail);
          var copydata = angular.copy(namadetailbarang);
          console.log(copydata);
          $scope.datadetailbarang.namadetailbarang = copydata;
        }

        $scope.getId = function(iddetailbarang, namadetailbarang){
          console.log(iddetailbarang, namadetailbarang);
          $scope.dataGetId = iddetailbarang;
          $scope.dataGetNama = namadetailbarang;
        }

        $scope.hapusdetailbarang = function () {
          var iddetailbarang = $scope.dataGetId;
          str = "../web-service/hapus-detailbarang.php?iddetailbarang=" + iddetailbarang;
          $http.get(str).then(function (response) {
            console.clear();
            console.log("Berhasil dihapus...");
            $scope.lihatdetailbarang();
          });
        }
    }//========================== TUTUP ELSE

});

myModule.controller('BarangCtrl', function ($scope, $rootScope, $http, $modal, $log, $route) { // ================= BARANG ============
  if (localStorage.getItem("username") == null && localStorage.getItem("nama") == null) {
      console.log("No login data");
      window.location.href = "../error page/index.html";
  }
  else{
        var namafoto; // Variabel ini dipake di beberapa fungsi
        $scope.databarang = {};
        $scope.datakategori = {};
        $scope.datajenisbarang = {};
        $scope.datadetailbarang = {};

        $scope.clearfield = function () {          
          console.log("Clicked");
            document.getElementById("gambarBrg").src = "../images/noImages.png";
            $scope.databarang.hargabarang = "";
            $scope.databarang.deskripsi = "";
        }

        $scope.loadkategori = function () {
          $http.get("../web-service/data-kategori.php").then(function (response) {
            $scope.datakategori = response.data.records;
          });
        }

        $scope.loaddetailbarang = function () {
          $http.get("../web-service/data-detailbarang.php").then(function (response) {
            $scope.datadetailbarang = response.data.records;
          });
        }

        $scope.loadjenisbarang = function () {
          $http.get("../web-service/data-jenisbarang.php").then(function (response) {
            $scope.datajenisbarang = response.data.records;
          });
        }
        
        $scope.tambahbarang = function () {
        	if ($scope.datakategori.idkategori == undefined || $scope.datajenisbarang.idjenisbarang == undefined ||
        		$scope.datadetailbarang.iddetailbarang == undefined || $scope.databarang.hargabarang == undefined || $scope.gambar == '' ||
          	$scope.databarang.deskripsi == ''){
            document.getElementById("gambarBrg").src = "../images/noImages.png";
        		console.log("Kesalahan Inputan ! ! !");
        	}else{
      		    var idkategori = $scope.datakategori.idkategori;
      		    var idjenisbarang = $scope.datajenisbarang.idjenisbarang;
      		    var iddetailbarang = $scope.datadetailbarang.iddetailbarang;
      		    var hargabarang = $scope.databarang.hargabarang;
      		    var gambar = $scope.gambar;
      		    var deskripsi = $scope.databarang.deskripsi;
              var insertby = localStorage.getItem("username");

      		    str = "../web-service/tambah-barang.php?idkategori=" + idkategori + "&idjenisbarang=" + idjenisbarang +
      		      "&iddetailbarang=" + iddetailbarang + "&hargabarang=" + hargabarang +
      		      "&gambar=" + gambar + "&deskripsi=" + deskripsi + "&insertby=" + insertby;
      		    $http.get(str).then(function (response) {
      		      $scope.databarang = response.data.records;
                $scope.submit();
                $scope.lihatbarang();
      		    });
              document.getElementById("gambarBrg").src = "../images/noImages.png";
      		  	}
        }

        $scope.lihatbarang = function () {
          $scope.loadkategori();
          $scope.loadjenisbarang();
          $scope.loaddetailbarang();
          $scope.hargabarang = '';
          $scope.gambar = '';
          $scope.deskripsi = '';

          str = "../web-service/data-barang.php";
          $http.get(str).then(function (response) {
            $scope.databarang = response.data.records;
          });
        }

        $scope.updatebarang = function(idbarang){

          if (document.getElementById("selectKategori").value == undefined || document.getElementById("selectJenis").value == undefined ||
              document.getElementById("selectDetail").value == undefined || $scope.databarang.hargabarang == undefined || $scope.gambar == '' ||
              $scope.databarang.deskripsi == ''){
              console.log("Kesalahan Inputan ! ! !");
          }else{
              var idbarang = $scope.databarang.idbarang;        
              var idkategori = document.getElementById("selectKategori").value;
              var idjenisbarang = document.getElementById("selectJenis").value;
              var iddetailbarang = document.getElementById("selectDetail").value;
              var hargabarang = $scope.databarang.hargabarang;
              var gambar = $scope.gambar;
              var deskripsi = $scope.databarang.deskripsi;
              console.log(idbarang, idkategori, idjenisbarang, iddetailbarang);
              str = "../web-service/edit-barang.php?idbarang=" + idbarang + "&idkategori=" + idkategori + "&idjenisbarang=" + idjenisbarang +
                    "&iddetailbarang=" + iddetailbarang + "&hargabarang=" + hargabarang + "&gambar=" + gambar + "&deskripsi=" + deskripsi;
              $http.get(str).then(function(response){
                  $scope.submit();
                  $scope.lihatbarang();
                  console.log("data berhasil dirubah...");
              });
              document.getElementById("gambarBrg").src = "../images/noImages.png";
            };
        }

        $scope.editbarang = function (idbarang, idkategori, idjenisbarang, iddetailbarang, namakategori, namajenisbarang, namadetailbarang, hargabarang, gambar, deskripsi) {

          console.clear();
          console.log("ID Barang: " + idbarang);      

          $scope.databarang.idbarang = idbarang;    
          document.getElementById("selectKategori").selectedIndex = idkategori;
          document.getElementById("selectJenis").selectedIndex = idjenisbarang;
          document.getElementById("selectDetail").selectedIndex = iddetailbarang;
          document.getElementById("gambarBrg").src = "../web-service/upload/" + gambar;
          $scope.databarang.hargabarang = hargabarang;
          $scope.gambar = gambar;
          $scope.databarang.deskripsi = deskripsi;

          console.log(idbarang, idkategori, idjenisbarang, iddetailbarang, namakategori, namajenisbarang, namadetailbarang, hargabarang, gambar, deskripsi);

          var copyhargabarang = angular.copy(hargabarang);
          var hargabarang = copyhargabarang.split('.').join("");

          keInt = parseInt(hargabarang, 10);
          
          $scope.databarang.hargabarang = keInt;
        }

        $scope.getId = function(idbarang){
          console.log(idbarang);
          $scope.dataGetId = idbarang;
        }

        $scope.hapusbarang = function (idbarang) {
          str = "../web-service/hapus-barang.php?idbarang=" + idbarang;
          $http.get(str).then(function (response) {
            console.clear();
            console.log("Berhasil dihapus...");
            $scope.lihatbarang();
          });
        }

        $scope.uploadedFile = function (element) {
          $scope.currentFile = element.files[0];
          var data = element.files[0];
          var reader = new FileReader();

          reader.onload = function (event) {
            var date = new Date();
            date.setDate(date.getDate());
            sec = date.getSeconds();
            minute = date.getMinutes(),
              hour = date.getHours(),
              day = '' + date.getDate(1),
              month = '' + (date.getMonth() + 1),
              year = date.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            namafoto = [year, month, day, hour, minute, sec].join('-');
            $scope.image_source = event.target.result
            $scope.$apply(function ($scope) {
              $scope.files = element.files;
              var myRegex = data.name.replace(/^.*\./, '');
              $scope.gambar = namafoto + '.' + myRegex;
              console.log(namafoto + '.' + myRegex);
            });
          }

          reader.readAsDataURL(element.files[0]);
        };

        $scope.form = [];
        $scope.files = [];

        $scope.submit = function () {
        	var copy = $scope.gambar;
        	var imgregex = copy.replace();
          $scope.form.image = $scope.files[0];
          $http({
              method: 'POST',
              url: '../web-service/uploadgambar.php?namafoto=' + namafoto,
              processData: false,
              transformRequest: function (data) {
                var formData = new FormData();
                formData.append("image", $scope.form.image);
                return formData;
              },
              data: $scope.form,
              headers: {
                'Content-Type': undefined
              }
            })
            .then(function (data) {
              console.log("Successfully Upload An Image!");
            });
            
        };
    }//===================== TUTUP ELSE

});