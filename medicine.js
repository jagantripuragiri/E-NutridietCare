function bookMedicine() {
            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let medicineType = document.getElementById("medicineType").value;
            let quantity = document.getElementById("quantity").value;

            if (name === "" || phone === "" || medicineType === "" || quantity === "") {
                alert("Please fill in all fields!");
                return;
            }

            alert("Your order received successfully!");
        }
     