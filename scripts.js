var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Batata frita",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salada",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coca Cola",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Água",
        "price": 1.49,
        "active": false,
        "quantity": 1
    }
];
 
const SelfServiceMachine = {
    data() {
        return {
            products: window.products,
            showModalFlag: false,
            newProduct: {
                photo: "",
                name: "",
                price: "",
                active: false,
                quantity: 1
            },
            selectedProduct: null
        }
    },
    methods: {
        addToCart() {
            let totalPrice = 0
            this.products.forEach(product => {
                if (product.active) {
                    totalPrice += product.quantity * product.price;
                }
            });
            return totalPrice.toFixed(2);
        },
        SaveItens() {
            if(this.inputsValidation()) {
                const sendProduct = {...this.newProduct}
                this.products.push(sendProduct)
                this.showModalFlag = false
                this.clearObject()
            } else {
                alert("Preencha todos os campos")
            }
        },

        changeImage(product) {
            this.newProduct.photo = product.photo
            this.selectedProduct = product;
        },

        inputsValidation() {
            if (this.newProduct.name == "" || this.newProduct.photo == "" || this.newProduct.price == "") {
                return false
            } else {
                return true
            }
        },

        closeModal() {
            this.showModalFlag = false
            this.clearObject()
        },

        clearObject() {
            this.newProduct = {
                photo: "",
                name: "",
                price: "",
                active: false,
                quantity: 1
            };
            this.selectedProduct = null;
        },

        openFinishModalOrder() {
            Swal.fire({
                title: 'Compra finalizada com sucesso!',
                text: `Valor total R$: ${this.addToCart()}`,
                icon: 'success',
                confirmButtonText: 'Fechar',
                customClass: {
                    confirmButton: 'my-confirm-button' 
                }
            }).then((result) => {
                window.location.reload()
            })
            
        },
        
        finishOrder() {
            this.openFinishModalOrder()
        }

        
    }
}

Vue.createApp(SelfServiceMachine).mount("#app");
