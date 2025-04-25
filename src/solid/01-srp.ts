(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    class ProductService{

        getProduct(id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        
        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }

    }

    class Mailer{

        private masterEmail: string = 'masterEmail@gmail.com';

        sendEmails(emailList: string[], template: 'to-clients' | 'to-admins'){ 
            console.log('Enviando correo a los clientes', template);
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }

        notifyClients() {
            this.mailer.sendEmails(['eduardo@google.com'], 'to-clients');
            console.log('Enviando correo a los clientes');
        }

        loadProduct(id: number){
            this.productService.getProduct(id);
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
            console.log('Guardando en base de datos', product );
        }

    }

    class CartBloc{

        private itemsInCart: Object[] = [];

        onAddToCart( productId: number ) {
            
            console.log('Agregando al carrito ', productId );
        }
    }
    
    const productService = new ProductService();
    const mailer = new Mailer();

    // When testing, these dependency injections allow us to test the ProductBloc using mocks.
    // Mock -> fictional class with fictional methods
    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productService.getProduct(10);
    productService.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();

    cartBloc.onAddToCart(10);
})();