import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Loadable from 'react-loadable'
import Loading from './components/loading';
import Nomach from './pages/nomatch';
import BikeMap from './pages/map/bikeMap';

import Bar from './pages/echarts/bar';
import Pie from './pages/echarts/pie';
import Line from './pages/echarts/line';

// import Buttons from './pages/ui/buttons';
// import Modals from './pages/ui/modals';
// import Loadings from './pages/ui/loadings';
// import Notice from './pages/ui/notice';
// import Message from './pages/ui/message';
// import Tabs from './pages/ui/tabs';
// import Gallery from './pages/ui/gallery';
// import Carousel from './pages/ui/carousel';

const Home = Loadable({
  loader: () => import('./pages/home'),
  loading: Loading,
});

const Buttons = Loadable({
  loader: () => import('./pages/ui/buttons'),
  loading: Loading,
});
const Modals = Loadable({
  loader: () => import('./pages/ui/modals'),
  loading: Loading,
});
const Loadings = Loadable({
  loader: () => import('./pages/ui/loadings'),
  loading: Loading,
});
const Notice = Loadable({
  loader: () => import('./pages/ui/notice'),
  loading: Loading,
});
const Message = Loadable({
  loader: () => import('./pages/ui/message'),
  loading: Loading,
});
const Tabs = Loadable({
  loader: () => import('./pages/ui/tabs'),
  loading: Loading,
});
const Gallery = Loadable({
  loader: () => import('./pages/ui/gallery'),
  loading: Loading,
});
const Carousel = Loadable({
  loader: () => import('./pages/ui/carousel'),
  loading: Loading,
});

const FormLogin = Loadable({
  loader: () => import('./pages/form/login'),
  loading: Loading,
});
const Register = Loadable({
  loader: () => import('./pages/form/register'),
  loading: Loading,
});
const BasicTable = Loadable({
  loader: () => import('./pages/table/basicTable'),
  loading: Loading,
});
const HighTable = Loadable({
  loader: () => import('./pages/table/highTable'),
  loading: Loading,
});
const City = Loadable({
  loader: () => import('./pages/city/index'),
  loading: Loading,
});
const Order = Loadable({
  loader: () => import('./pages/order/index'),
  loading: Loading,
});

const Common = Loadable({
  loader: () => import('./common'),
  loading: Loading,
});
const OrderDetail = Loadable({
  loader: () => import('./pages/order/detail'),
  loading: Loading,
});
const Uesr = Loadable({
  loader: () => import('./pages/user'),
  loading: Loading,
});
const BikeM = Loadable({
  loader: () => import('./pages/map/bikeMap'),
  loading: Loading,
});

const Rich = Loadable({
  loader: () => import('./pages/rich'),
  loading: Loading,
});
const Permission = Loadable({
  loader: () => import('./pages/permission'),
  loading: Loading,
});

export default class IRouter extends Component{
  render(){
    return(
      <HashRouter>
        <App>
          <Switch>
            <Route path="/Login" component={Login}/>
            <Route path="/common" render={()=>
              <Common>
                <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
              </Common>
            }
            />
            <Route path="/" render={()=>
              <Admin>
                <Switch>
                  
                  <Route path="/home" component={Home}/>
                  <Route path="/ui/buttons" component={Buttons}/>
                  <Route path="/ui/modals" component={Modals}/>
                  <Route path="/ui/loadings" component={Loadings}/>
                  <Route path="/ui/notification" component={Notice}/>
                  <Route path="/ui/messages" component={Message}/>
                  <Route path="/ui/tabs" component={Tabs}/>
                  <Route path="/ui/gallery" component={Gallery}/>
                  <Route path="/ui/carousel" component={Carousel}/>
                  <Route path="/form/login" component={FormLogin}/>
                  <Route path="/form/reg" component={Register}/>
                  <Route path="/table/basic" component={BasicTable}/>
                  <Route path="/table/high" component={HighTable}/>
                  <Route path="/city" component={City}/>
                  <Route path="/order" component={Order}/>
                  <Route path="/user" component={Uesr}/>
                  <Route path="/bikeMap" component={BikeM}/>
                  <Route path="/charts/bar" component={Bar}/>
                  <Route path="/charts/pie" component={Pie}/>
                  <Route path="/charts/line" component={Line}/>
                  <Route path="/rich" component={Rich}/>
                  <Route path="/permission" component={Permission}/>
                  <Redirect to="/home"/>

                  <Route component={Nomach}/>
                </Switch>
              </Admin>
            }/>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}