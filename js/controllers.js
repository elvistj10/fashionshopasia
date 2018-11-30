var clientMod = angular.module('clientModule', ['angularUtils.directives.dirPagination']);

clientMod.controller('ProductCtrl', function ($scope, $http) { // ================= BARANG ============

  $scope.product = {};
  $scope.sosial = {};
  $scope.datainfo = {};
  $scope.datakategori = {};
  $scope.datajenis = {};
  var idkategori = 0;
  var idjenisbarang = 0;

        str = "./admin_fashionshopasia/web-service/clientProduct.php";
        $http.get(str).then(function (response) {
          $scope.product = response.data.records;
        });

        str = "./admin_fashionshopasia/web-service/data-sosial.php";
        $http.get(str).then(function (response) {
          $scope.sosial = response.data.records;
        });

        str = "./admin_fashionshopasia/web-service/data-info.php";
        $http.get(str).then(function (response) {
          $scope.datainfo = response.data.records;
        });

        str = "./admin_fashionshopasia/web-service/data-kategori.php";
        $http.get(str).then(function (response) {
          $scope.datakategori = response.data.records;
        });

        str = "./admin_fashionshopasia/web-service/data-jenisbarang.php";
        $http.get(str).then(function (response) {
          $scope.datajenis = response.data.records;
        });
        
        document.getElementById('selectKategori').addEventListener('change', function(){
            idkategori = this.value;
            if(idkategori == 0){
              document.getElementById('selectJenis').value = 0;
              str = "./admin_fashionshopasia/web-service/clientProduct.php";
                $http.get(str).then(function (response) {
                  $scope.product = response.data.records;
                });
            }
            else if(idkategori != 0 && idjenisbarang == 0){
                console.log("DUA");
                str = "./admin_fashionshopasia/web-service/tampilby-kategori.php?idkategori=" + idkategori;
                $http.get(str).then(function (response) {                
                  $scope.product = response.data.records;
                });
            }
            else if(idkategori != 0 && idjenisbarang != 0){
                console.log("TIGA");
                str = "./admin_fashionshopasia/web-service/tampilby-idjenis-idkategori.php?idjenisbarang=" + idjenisbarang + "&idkategori=" + idkategori;
                $http.get(str).then(function (response) {                
                  $scope.product = response.data.records;
                });
            }
        });

        document.getElementById('selectJenis').addEventListener('change', function(){
            idjenisbarang = this.value;
            console.log(idjenisbarang, idkategori);
            if(idjenisbarang == 0){
              document.getElementById('selectKategori').value = 0;
                console.log("SATU");
                str = "./admin_fashionshopasia/web-service/clientProduct.php";
                $http.get(str).then(function (response) {
                  $scope.product = response.data.records;
                });
              }
            else if(idjenisbarang != 0 && idkategori == 0){
                console.log("DUA");
                str = "./admin_fashionshopasia/web-service/tampilby-jenis.php?idjenisbarang=" + idjenisbarang;
                $http.get(str).then(function (response) {                
                  $scope.product = response.data.records;
                });
            }
            else if(idjenisbarang != 0 && idkategori != 0){
                console.log("TIGA");
                str = "./admin_fashionshopasia/web-service/tampilby-idjenis-idkategori.php?idjenisbarang=" + idjenisbarang + "&idkategori=" + idkategori;
                $http.get(str).then(function (response) {                
                  $scope.product = response.data.records;
                });
            }
        });

        document.getElementById('selectOrder').addEventListener('change', function(){
            var val = this.value;
            if(val == 0){
                str = "./admin_fashionshopasia/web-service/clientProduct.php";
                $http.get(str).then(function (response) {
                  $scope.product = response.data.records;
                });
              }
            else if(val == 1){
                str = "./admin_fashionshopasia/web-service/tampilby-hargarendah.php";
                $http.get(str).then(function (response) {                
                  $scope.product = response.data.records;
                });
              }
              else if(val == 2){
                str = "./admin_fashionshopasia/web-service/tampilby-hargatinggi.php";
                $http.get(str).then(function (response) {                
                  $scope.product = response.data.records;
                });
              }
              else if(val == 3){
                str = "./admin_fashionshopasia/web-service/tampilby-dilihat.php";
                $http.get(str).then(function (response) {                
                  $scope.product = response.data.records;
                });
              } 
        });

        $scope.getDataBarang = function(idbarang, kode, namakategori, namajenisbarang, namadetailbarang, hargabarang, gambar, deskripsi){
          //console.log("Click..." + idbarang, kode, namakategori, namajenisbarang, namadetailbarang, gambar, deskripsi);
          str = "./admin_fashionshopasia/web-service/update-dilihat.php?idbarang=" + idbarang;
                $http.get(str).then(function (response) {});

          $scope.kodeBrg   = kode;
          $scope.namajen   = namajenisbarang;
          $scope.namadet   = namadetailbarang;
          $scope.namakat   = namakategori;
          $scope.hrgbrg    = hargabarang;
          $scope.foto      = gambar;
          $scope.deskripsi = deskripsi;
        }

});