import { createSelector } from 'reselect'


const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collection
)
export const selectCollectionForPreview = createSelector(
    [selectShopCollection],
    collection => {

       const res = Object.keys(collection).map(key => collection[key])
         console.log(res);
       return res;
     
    }

)

export const selectCollection = collectionParamId => createSelector(

    [selectShopCollection],
    collections => collections[collectionParamId]
)
