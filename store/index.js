import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		shopCart: {}
	},
	mutations:{
		SINGLE_SELECT_GOODS(state,{goodsID}){
		    console.log(goodsID);
		    // 4.1 取出state中的商品数据
		    let shopCart = state.shopCart;
		    // 4.2 根据商品id取到goods
		    let goods = shopCart[goodsID];
		    // 4.3 判断商品是否存在
		    if (goods) {
		        // 4.4 判断checked是否存在
		        if (goods.checked) {
		            // 4.5 取反
		            goods.checked = !goods.checked;
		        } else {
		            // 4.6 不存在那么就设置默认值
		            Vue.set(goods, 'checked', true);
		        }
		    }
		    // 4.7 将数据同步到state中
		    state.shopCart = {
		        ...shopCart
		    };
		    // 4.8 将数据更新到本地
		    setLocalStore('shopCart', state.shopCart);
		},
	}
})