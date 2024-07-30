alert(`welcome di pendaftaran sekolah SMKN 1 PURWOSARI`);

function validasi() {
            var nama = document.forms["formku"]["nama"].value;
            var nisn = document.forms["formku"]["nisn"].value;

            // Validasi nama
            if (!/^[a-zA-Z]+$/.test(nama)) {
                alert("Data yang diinputkan untuk nama harus berupa huruf");
                document.getElementById("nama").focus();
                document.formku.nama.value = "";
                return false;
            }

            // Validasi NISN
            if (!/^[0-9]+$/.test(nisn)) {
                alert("Data yang diinputkan untuk NISN harus berupa angka");
                document.getElementById("nisn").focus();
                document.formku.nisn.value = "";
                return false;
            }

            return true;
        }
