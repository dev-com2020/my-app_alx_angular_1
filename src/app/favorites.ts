import { FavoritesService } from "./favorites.service";
import { ProductsService } from "./products.service";

export function favoritesFactory(isFavorites:boolean) {
    return () => {
        if (isFavorites) {
            return new FavoritesService();
        } 
        return new ProductsService();
    };
}