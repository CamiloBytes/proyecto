import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                auth: resolve(__dirname, "./src/views/auth.html"),
                dashboard: resolve(__dirname, "./src/views/dashboard.html"),
                offers: resolve(__dirname, "./src/views/offers.html"),
                profile: resolve(__dirname, "./src/views/profile.html"),
                shoppingCard: resolve(__dirname, "./src/views/shopping_car.html"),
                admin: resolve(__dirname, "./src/views/admin.html"),
                myShop: resolve(__dirname, "./src/views/my_shop.html")
            },
        },
    },
});
